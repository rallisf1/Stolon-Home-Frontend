import { mkdir } from "node:fs/promises";
import { deepmerge } from "deepmerge-ts";
import beautify from 'js-beautify';

type PrimoPage = {
    id: string;
    url: string;
    name: string;
    code: {
        js: string;
        css: string;
        html: {
            head: string;
            below: string;
        };
    };
    fields: {
        id: string;
        key: string;
        type: string;
        label: string;
        value?: string | any[] | {
            html?: string;
            markdown?: string;
            url?: string;
            label: string;
        },
        fields: PrimoPage["fields"][];
        options: any;
        is_static: boolean;
    }[];
    content: any;
    site?: string;
    parent?: string;
}

type PrimoSection = {
    id: string;
    content: any;
    page: string;
    symbol: string;
    index: number;
}

type PrimoSymbol = Omit<PrimoPage, 'url' | 'content'> & {
    code: {
        js: string;
        css: string;
        html: string;
    }
}

const repos: string[] = Bun.env.SITE_REPOS ? Bun.env.SITE_REPOS.split(',') : [];

if(!repos.length) {
    throw new Error('SITE_REPOS is empty!');
}

if(!Bun.env.REPO_OWNER) {
    throw new Error('REPO_OWNER is empty!');
}

if(!Bun.env.GH_TOKEN) {
    throw new Error('GH_TOKEN is empty!');
}

const beautifyOptions = {
    indent_size: 2,
    max_preserve_newlines: 3
};

const cleanCSS = (css: string): string => {
    css = beautify.css(css, beautifyOptions);
    let siteCSS: string[] = css.split('\n');
    siteCSS = siteCSS.filter(l => !l.startsWith('/*')); // remove comments
    siteCSS = siteCSS.filter(l => !l.includes('reset.css')); // remove original reset.css
    siteCSS = siteCSS.filter(Boolean); // remove empty lines
    return siteCSS.join("\n").trim();
}

const cleanJS = (js: string): string => {
    js = beautify.js(js, beautifyOptions);
    let has_icons = false;
    let siteJS: string[] = js.split('\n');
    siteJS = siteJS.filter(l => !l.startsWith('#')); // remove comments
    if(siteJS.some(l => l.includes('import Icon'))) {
        siteJS = siteJS.filter(l => !l.includes('import Icon'));
        has_icons = true;
    }
    siteJS = siteJS.filter(Boolean); // remove empty lines

    if(has_icons) {
        siteJS.unshift(`  import Icon from '@iconify/svelte';`);
    }

    return siteJS.join("\n").trim();
}

const cleanHTML = (html: string): string => {
    html = beautify.html(html, beautifyOptions);
    let siteHTML: string[] = html.split('\n');
    // remove common meta tags
    siteHTML = siteHTML.filter(l => !l.includes('viewport'));
    siteHTML = siteHTML.filter(l => !l.includes('meta charset'));
    siteHTML = siteHTML.filter(l => !l.includes('preconnect'));
    siteHTML = siteHTML.filter(l => !l.includes('icon'));
    siteHTML = siteHTML.filter(Boolean); // remove empty lines
    return siteHTML.join("\n").trim();
}

const generateDataLoader = ( type: "Page" | "Layout", content: object): string => {
    return `import type { ${type}ServerLoad } from './$types';

export const load: ${type}ServerLoad = async ({ params }) => {
  const content = ${JSON.stringify(content)};
  return {
    content: content[params.lang]
  };
};`
}

const generateRoute = ( type: "Page" | "Layout" | "Component", fields: string[], js: string, css: string, head: string, footer: string, header: string = ''): string => {

    function countIdentation(str: string): number {
        return str.length - str.trimStart().length;
    }
    let result = "";
    if(type !== "Component" && css.length) {
        // add :global() to all non-nested selectors except #page and :root
        let cssLines = css.split("\n");
        let identation = -1;
        const regex = /((?<!&).+)\s{/;
        const subst = `#page :global { $1 {`;
        for(let i=0;i<cssLines.length;i++) {
            if(cssLines[i].startsWith('#page') || cssLines[i].startsWith(':root')) continue;
            if(cssLines[i].includes('{')) { // string.includes is faster even if we will eventually run the regex
                if(regex.exec(cssLines[i]) !== null && identation === -1) {
                    identation = countIdentation(cssLines[i]);
                    cssLines[i] = cssLines[i].replace(regex, subst);
                }
                continue;
            }
            if(cssLines[i].includes('}')) {
                if(countIdentation(cssLines[i]) === identation) {
                    cssLines[i] = cssLines[i].replace('}', '}}');
                    identation = -1;
                }
            }
        }
        css = cssLines.join("\n");
    }
    if(fields.length || js.length) {
        result += '<script lang="ts">';
        if(fields.length) {
            if(type !== "Component") {
                result += `
  import type { ${type}Props } from './$types';
`;
            }
            switch(type) {
                case "Page":
                    result += `  let { data }: ${type}Props = $props();`
                    break;
                case "Layout":
                    result += `  let { data, children }: ${type}Props = $props();`
                    break;
                case "Component":
                    result += `  let { ${fields.join(', ')} } = $props();`
                    break;
            }
            if(type !== "Component") {
                for (const field of fields) {
                    result += `
  let ${field} = $derived(data.content.${field});`;
                }
            }

        } else {
            if(type === "Layout") {
                result += `
  let { children }: ${type}Props = $props();
`
            }
        }
        if(js.length) {
            result += `
    ${js}
`;
        }
        result += '</script>';
    }
    if(css.length) {
        result += `
<style>
${css}
</style>`;
    }
    if(head.length) {
        result += `
<svelte:head>
${head}
</svelte:head>`;
    }
    if(type === "Layout") {
        result += `
<div id="page">`;

        if(header.length) {
            result += `
${header}
`;
        }
        result += `
{@render children()}
`;
        if(footer.length) {
            result += `
${footer}
`;
        }
        result += `</div>`;
    } else {
        if(header.length) {
            result += `
${header}
`;
        }
        if(footer.length) {
            result += `
${footer}
`;
        }
    }
    return result;
}

const generatePagePath = (current: PrimoPage, pages: PrimoPage[]): string => {
    if(current.parent === null) {
        if(current.url === "index") {
            return '';
        } else {
            return current.url;
        }
    }
    let path = [current.url];
    let parent = pages.find((p) => p.id === current.parent);
    path.unshift(parent?.url!);
    let no_more_parents = parent?.parent === null;
    while (!no_more_parents) {
        parent = pages.find((p) => p.id === parent?.parent);
        path.unshift(parent?.url!);
        if (parent?.parent === null) {
            no_more_parents = true
        }
    }
    return `${path.join('/')}`;
}

for (const repo of repos) {
    console.log(`Fetching ${repo}`);
    const res = await fetch(`https://api.github.com/repos/${Bun.env.REPO_OWNER}/${repo}/contents/primo.json`, {
        headers: {
            Authorization: `token ${Bun.env.GH_TOKEN}`,
            Accept: "application/vnd.github.v3.raw",
        }
    });
    if (!res.ok) {
        console.warn(`Fetch error: ${res.status}`);
        continue;
    }
    const json = JSON.parse(await res.text());
    const site = json.site as PrimoPage;
    const route = repo.split('-')[1];
    const languages = Object.keys(site.content);

    try {
        await mkdir(`./src/routes/[lang]/${route}`, { recursive: true });
    } catch(e) { /* do nothing, directory just exists */ }

    let siteCSS = cleanCSS(site.code.css);
    const siteHead = cleanHTML(site.code.html.head);
    let siteFooter = cleanHTML(site.code.html.below);
    let siteFields: string[] = site.fields.map(f => f.key);
    let siteValues = site.content;
    let siteJS = site.code.js;
    let siteHTML = '';
    let has_nav = false;
    let has_footer = false;
    // symbols -> components, because assume the data entry is bad
    try {
        await mkdir(`./src/lib/symbols/${route}`, { recursive: true });
    } catch(e) { /* do nothing, directory just exists */ }
    for (const symbol of json.symbols as PrimoSymbol[]) {
        const symbolName = symbol.name.replace(/[\s-.()]/g, '_');
        const symbolJS = cleanJS(symbol.code.js);
        const symbolCSS = cleanCSS(symbol.code.css);
        const symbolHTML = cleanHTML(symbol.code.html);
        await Bun.write(`./src/lib/symbols/${route}/${symbolName}.svelte`, generateRoute('Component', (symbol.fields as PrimoSymbol["fields"]).map(f => f.key), symbolJS, symbolCSS, '', '', symbolHTML));
    }
    // pages
    for (const page of json.pages as PrimoPage[]) {
        const path = generatePagePath(page, json.pages);
        const fullPath = path === '' ? `./src/routes/[lang]/${route}` : `./src/routes/[lang]/${route}/${path}`;
        try {
            await mkdir(fullPath, { recursive: true });
        } catch(e) { /* do nothing, directory just exists */ }
        let css = cleanCSS(page.code.css);
        const head = cleanHTML(page.code.html.head);
        const footer = cleanHTML(page.code.html.below);
        let fields: string[] = page.fields.map(f => f.key);
        let values = page.content;
        let js = page.code.js;
        const sections: PrimoSection[] = json.sections.filter((s: PrimoSection) => s.page === page.id);
        const symbolsImported: string[] = [];
        let html = '';
        sections.sort((a,b) => a.index - b.index); // this should be the default, but just in case...
        for (const section of sections) {
            const symbol = json.symbols.find((s: PrimoSymbol) => s.id === section.symbol);
            const symbolName = symbol.name.replace(/[\s-.()]/g, '_');
            // we assume only the nav and the footer have ANY static fields
            if((symbol.fields as PrimoSymbol["fields"]).some(f => f.is_static === true)) {
                if (!section.index) {
                    if (!has_nav) {
                        siteJS = `  import ${symbolName} from '$lib/symbols/${route}/${symbolName}.svelte';\n` + siteJS;
                        siteHTML += `<${symbolName}`;
                        for (const field of symbol.fields) {
                            siteHTML += ` ${field.key}={${symbolName}_${section.index}_${field.key}}`;
                            siteFields.push(`${symbolName}_${section.index}_${field.key}`);
                        }
                        siteHTML += ' />\n';
                        for (const lang of languages) {
                            for (const [oldKey, value] of Object.entries(symbol.content[lang])) {
                                symbol.content[lang][`${symbolName}_${section.index}_${oldKey}`] = value;
                                delete symbol.content[lang][oldKey];
                            }
                        }
                        siteValues = deepmerge(siteValues, symbol.content);
                        has_nav = true;
                    }
                } else {
                    if (!has_footer) {
                        siteJS = `  import ${symbolName} from '$lib/symbols/${route}/${symbolName}.svelte';\n` + siteJS;
                        siteFooter += `<${symbolName}`;
                        for (const field of symbol.fields) {
                            siteFooter += ` ${field.key}={${symbolName}_${section.index}_${field.key}}`;
                            siteFields.push(`${symbolName}_${section.index}_${field.key}`);
                        }
                        siteFooter += ' />\n';
                        for (const lang of languages) {
                            for (const [oldKey, value] of Object.entries(symbol.content[lang])) {
                                symbol.content[lang][`${symbolName}_${section.index}_${oldKey}`] = value;
                                delete symbol.content[lang][oldKey];
                            }
                        }
                        siteValues = deepmerge(siteValues, symbol.content);
                        has_footer = true;
                    }
                }
                continue;
            }
            if(symbolsImported.indexOf(symbolName) === -1) {
                js = `  import ${symbolName} from '$lib/symbols/${route}/${symbolName}.svelte';\n` + js;
                symbolsImported.push(symbolName);
            }
            html += `\n<${symbolName}`;
            for (const field of symbol.fields) {
                html += ` ${field.key}={${symbolName}_${section.index}_${field.key}}`;
                fields.push(`${symbolName}_${section.index}_${field.key}`);
            }
            html += ' />';
            for (const lang of languages) {
                if(Object.keys(section.content).length){
                    for (const [oldKey, value] of Object.entries(section.content[lang])) {
                        section.content[lang][`${symbolName}_${section.index}_${oldKey}`] = value;
                        delete section.content[lang][oldKey];
                    }
                }
            }
            if(Object.keys(section.content).length) values = deepmerge(values, section.content);
        }
        console.log(`Generating ${path}`);
        js = cleanJS(js);
        await Bun.write(`${fullPath}/+page.ts`, generateDataLoader('Page', values));
        await Bun.write(`${fullPath}/+page.svelte`, generateRoute('Page', fields, js, css, head, footer, html));
    }
    console.log(`Generating ${route} layout`);
    siteJS = cleanJS(siteJS);
    await Bun.write(`./src/routes/[lang]/${route}/+layout.ts`, generateDataLoader('Layout', siteValues));
    await Bun.write(`./src/routes/[lang]/${route}/+layout.svelte`, generateRoute('Layout', siteFields, siteJS, siteCSS, siteHead, siteFooter, siteHTML));
}
