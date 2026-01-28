import { mkdir } from "node:fs/promises";
import { deepmerge } from "deepmerge-ts";

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

const cleanCSS = (css: string): string => {
    let siteCSS: string[] = css.split('\n');
    siteCSS = siteCSS.filter(l => !l.startsWith('/*')); // remove comments
    siteCSS = siteCSS.filter(l => !l.includes('reset.css')); // remove original reset.css
    siteCSS = siteCSS.filter(Boolean); // remove empty lines
    return siteCSS.join("\n").trim();
}

const cleanJS = (js: string): string => {
    let has_icons = false;
    let siteJS: string[] = js.split('\n');
    siteJS = siteJS.filter(l => !l.startsWith('#')); // remove comments
    if(siteJS.some(l => l.includes('import Icon'))) {
        siteJS = siteJS.filter(l => !l.includes('import Icon'));
        has_icons = true;
    }
    siteJS = siteJS.filter(Boolean); // remove empty lines

    if(has_icons) {
        siteJS.unshift(`import Icon from "@iconify/svelte";`);
    }

    return siteJS.join("\n").trim();
}

const cleanHTML = (html: string): string => {
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

const generateRoute = ( type: "Page" | "Layout", fields: string[], js: string, css: string, head: string, footer: string, header?: string): string => {

    function countIdentation(str: string): number {
        return str.length - str.trimStart().length;
    }
    let result = "";
    if(type === "Layout" && css.length) {
        // add :global() to all non-nested selectors except #page and :root
        let cssLines = css.split("\n");
        let identation = -1;
        const regex = /((?<!&)[\.|#].+)\s{/;
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
    if(fields.length || js.length || type === "Layout") {
        result += '<script lang="ts">';
        if(fields.length) {
            result += `
    import type { ${type}Props } from './$types';
`;
            if(type === "Page") {
                result += `    let { data }: ${type}Props = $props();`
            } else {
                result += `    let { data, children }: ${type}Props = $props();`
            }
            result += `
    const { ${fields.join(', ')} } = data.content;
`;
        } else {
            if(type === "Layout") {
                result += `    let { children }: ${type}Props = $props();`
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
    if(header) {
        result += `
${header}
`;
    }
    if(type === "Layout") {
        result += `
<div id="page">{@render children()}</div>
`;
    }
    if(footer.length) {
        result += `
${footer}
`;
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
    // const languages = Object.keys(site.content);

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
        let html = '';
        sections.sort((a,b) => a.index - b.index); // this should be the default, but just in case...
        for (const section of sections) {
            const symbol = json.symbols.find((s: PrimoSymbol) => s.id === section.symbol);
            // we assume only the nav and the footer have ANY static fields
            if((symbol.fields as PrimoSymbol["fields"]).some(f => f.is_static === true)) {
                if (!section.index) {
                    if (!has_nav) {
                        // inject nav once
                        siteHTML += "\n" + symbol.code.html;
                        siteCSS += "\n" + symbol.code.css;
                        siteJS += "\n" + symbol.code.js;
                        siteFields = siteFields.concat((symbol.fields as PrimoSymbol["fields"]).map(f => f.key));
                        siteValues = deepmerge(siteValues, symbol.content);
                        has_nav = true;
                    }
                } else {
                    if (!has_footer) {
                        // inject footer once
                        siteFooter = symbol.code.html + "\n" + siteFooter;
                        siteCSS += "\n" + symbol.code.css;
                        siteJS += "\n" + symbol.code.js;
                        siteFields = siteFields.concat((symbol.fields as PrimoSymbol["fields"]).map(f => f.key));
                        siteValues = deepmerge(siteValues, symbol.content);
                        has_footer = true;
                    }
                }
                continue;
            }
            html += "\n" + symbol.code.html;
            css += "\n" + symbol.code.css;
            js += "\n" + symbol.code.js;
            fields = fields.concat((symbol.fields as PrimoSymbol["fields"]).map(f => f.key));
            values = deepmerge(values, section.content);
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
