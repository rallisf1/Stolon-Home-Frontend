#!/bin/bash

# Parse JSON and generate SvelteKit structure using Bun
# This script embeds the JavaScript logic to handle complex JSON parsing safely.

bun run - << 'EOF'
import { file, write } from "bun";
import { mkdir } from "node:fs/promises";
import path from "node:path";

// Configuration
const JSON_PATH = "src/routes/education/primo.json";
const BASE_OUTPUT_DIR = "src/routes/education";

// Helper to extract default values from symbol fields recursively
function extractFieldDefaults(fields) {
  const defaults = {};
  
  if (!fields || !Array.isArray(fields)) return defaults;
  
  for (const field of fields) {
    const key = field.key;
    
    // Handle different field types
    if (field.type === 'repeater' && field.value) {
      // Repeater with default value
      defaults[key] = field.value;
    } else if (field.type === 'group' && field.fields) {
      // Group field - extract nested defaults
      defaults[key] = extractFieldDefaults(field.fields);
    } else if (field.type === 'link' && field.value) {
      // Link field
      defaults[key] = field.value;
    } else if (field.value !== undefined) {
      // Simple field with value
      defaults[key] = field.value;
    }
  }
  
  return defaults;
}

async function main() {
  console.log(`Reading JSON from ${JSON_PATH}...`);
  const content = await file(JSON_PATH).text();
  const data = JSON.parse(content);

  const { pages, sections, symbols, site } = data;

  // 1. Build Page Hierarchy Map
  const pageMap = new Map();
  pages.forEach((p) => pageMap.set(p.id, p));

  // 2. Helper to get full URL path
  const getPagePath = (pageId) => {
    const page = pageMap.get(pageId);
    if (!page) return "";
    
    if (page.url === "index") {
        return "";
    }

    if (page.parent) {
      const parentPath = getPagePath(page.parent);
      return path.join(parentPath, page.url);
    }
    return page.url;
  };

  // 3. Process Symbols into a Map
  const symbolMap = new Map();
  symbols.forEach((s) => symbolMap.set(s.id, s));

  // 4. Generate Pages
  for (const page of pages) {
    console.log(`Processing page: ${page.name} (${page.url})...`);

    const relPath = getPagePath(page.id);
    const outputDir = path.join(BASE_OUTPUT_DIR, relPath);
    const outputFile = path.join(outputDir, "+page.svelte");

    // Gather sections for this page
    const pageSections = sections
      .filter((s) => s.page === page.id)
      .sort((a, b) => a.index - b.index);

    let scriptContent = `
    <script>
        /** @type {{ data: import('./$types').PageData }} */
        let { data } = $props();
    </script>
`;
    let templateContent = "";
    let cssContent = "";
    
    // Add site-global CSS first
    if (site.code && site.code.css) {
        cssContent += `\n/* Site Global CSS */\n${site.code.css}`;
    }

    // Process each section
    for (let i = 0; i < pageSections.length; i++) {
        const section = pageSections[i];
        const symbol = symbolMap.get(section.symbol);
        
        if (!symbol) {
            console.warn(`Symbol not found for section ${section.id}`);
            continue;
        }

        const snippetName = `section_${section.id.split('-')[0]}_${i}`; 
        
        // --- DATA PREPARATION ---
        // 1. Extract defaults from symbol fields
        const fieldDefaults = extractFieldDefaults(symbol.fields);
        
        // 2. Get symbol content defaults (el locale)
        const symbolContentDefaults = symbol.content?.el || {};
        
        // 3. Get section content (el locale)
        const sectionContent = section.content?.el || {};
        
        // Merge: fieldDefaults < symbolContentDefaults < sectionContent
        const contentData = { ...fieldDefaults, ...symbolContentDefaults, ...sectionContent };
        
        const dataVarName = `data_${snippetName}`;
        
        scriptContent = scriptContent.replace('</script>', `
    const ${dataVarName} = ${JSON.stringify(contentData, null, 2)};
    </script>`);

        // We use keys from the merged object
        const propsDestructuring = Object.keys(contentData).join(', ');
        let snippetArgs = "";
        
        if (propsDestructuring) {
            snippetArgs = ` { ${propsDestructuring} } `;
        } else {
             snippetArgs = ` _ `; // unused
        }
        
        templateContent += `
{#snippet ${snippetName}(${snippetArgs})}
<!-- Symbol: ${symbol.name} -->
<section id="${section.id}">
${symbol.code.html}
</section>
{/snippet}

{@render ${snippetName}(${dataVarName})}
`;

        if (symbol.code.css) {
            cssContent += `\n/* Symbol: ${symbol.name} */\n${symbol.code.css}`;
        }
    }

    // Construct Final Svelte File
    const svelteFileContent = `
${scriptContent}

${templateContent}

<style>
${cssContent}
</style>
`;
    
    console.log(`Writing to ${outputFile}...`);
    await mkdir(outputDir, { recursive: true });
    await write(outputFile, svelteFileContent);
  }
  
  console.log("\n✅ Site generation complete!");
}

main().catch(console.error);
EOF
