#!/bin/bash

# Configuration for Repositories
# Format: "folder_name:repo_name"
REPOS=(
  "ai:stolon-ai"
  "business:stolon-business"
  "computerization:stolon-computerization"
  "education:stolon-education"
  "marketing:stolon-marketing"
)

# GitHub Token (Extracted from user provided URLs)
TOKEN="YOUR_GITHUB_TOKEN" # Replace with your token or set as environment variable
OWNER="rallisf1"

# 1. Fetch primo.json for each repo
echo "=== Fetching primo.json files from GitHub ==="

for entry in "${REPOS[@]}"; do
  FOLDER="${entry%%:*}"
  REPO="${entry##*:}"
  
  TARGET_DIR="src/routes/$FOLDER"
  TARGET_FILE="$TARGET_DIR/primo.json"
  
  echo "Processing $FOLDER ($REPO)..."
  
  # Ensure directory exists
  mkdir -p "$TARGET_DIR"
  
  # Fetch file using GitHub API
  # Using raw header to get content directly
  HTTP_STATUS=$(curl -s -w "%{http_code}" -H "Authorization: token $TOKEN" \
       -H "Accept: application/vnd.github.v3.raw" \
       -L "https://api.github.com/repos/$OWNER/$REPO/contents/primo.json" \
       -o "$TARGET_FILE")

  if [ "$HTTP_STATUS" -eq 200 ]; then
    echo "✅ Successfully fetched primo.json for $FOLDER"
  else
    echo "❌ Failed to fetch primo.json for $FOLDER (Status: $HTTP_STATUS)"
    # Optional: cleanup empty file if failed
    rm -f "$TARGET_FILE"
  fi
done

echo -e "\n=== Starting Site Generation ===\n"

# 2. Run Bun script to generate pages
bun run - << 'EOF'
import { file, write } from "bun";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

// Configuration
const SECTIONS = ["ai", "business", "computerization", "education", "marketing"];
const LANGUAGES = ["el", "en"]; // Supported languages

// Helper to extract default values from symbol fields recursively
function extractFieldDefaults(fields) {
  const defaults = {};
  
  if (!fields || !Array.isArray(fields)) return defaults;
  
  for (const field of fields) {
    const key = field.key;
    
    // Handle different field types
    if (field.type === 'repeater' && field.value) {
      defaults[key] = field.value;
    } else if (field.type === 'group' && field.fields) {
      defaults[key] = extractFieldDefaults(field.fields);
    } else if (field.type === 'link' && field.value) {
      defaults[key] = field.value;
    } else if (field.value !== undefined) {
      defaults[key] = field.value;
    }
  }
  
  return defaults;
}

async function generateSection(sectionName) {
  const jsonPath = `src/routes/${sectionName}/primo.json`;
  const baseOutputDir = `src/routes/${sectionName}`;

  if (!existsSync(jsonPath)) {
    console.warn(`⚠️  Skipping ${sectionName}: primo.json not found at ${jsonPath}`);
    return;
  }

  console.log(`\n📘 Processing Section: ${sectionName}`);
  const content = await file(jsonPath).text();
  
  let data;
  try {
    data = JSON.parse(content);
  } catch (e) {
    console.error(`❌ Error parsing JSON for ${sectionName}:`, e.message);
    return;
  }

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

  // 4. Find the navbar symbol and store its content for each language
  const navbarSymbol = symbols.find(s => s.name === "Navbar");
  const navbarCanonicalContent = new Map(); // Map of lang -> content
  
  if (navbarSymbol && navbarSymbol.content) {
    LANGUAGES.forEach(lang => {
      if (navbarSymbol.content[lang]) {
        navbarCanonicalContent.set(lang, navbarSymbol.content[lang]);
      }
    });
  }

  // 5. Generate Pages for each language
  for (const lang of LANGUAGES) {
    // console.log(`   Detailed generation for language: ${lang}...`);
    
    for (const page of pages) {
      const relPath = getPagePath(page.id);
      const outputDir = path.join(baseOutputDir, lang, relPath);
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
              console.warn(`      ⚠️  Symbol not found for section ${section.id}`);
              continue;
          }

          const snippetName = `section_${section.id.split('-')[0]}_${i}`; 
          
          // --- DATA PREPARATION ---
          const fieldDefaults = extractFieldDefaults(symbol.fields);
          const symbolContentDefaults = symbol.content?.[lang] || {};
          
          // Special case: Navbar canonical content
          let sectionContent;
          if (navbarSymbol && section.symbol === navbarSymbol.id && navbarCanonicalContent.has(lang)) {
            sectionContent = navbarCanonicalContent.get(lang);
          } else {
            sectionContent = section.content?.[lang] || {};
          }
          
          const contentData = Object.keys(sectionContent).length > 0
            ? { ...fieldDefaults, ...symbolContentDefaults, ...sectionContent }
            : { ...fieldDefaults, ...symbolContentDefaults };
          
          const dataVarName = `data_${snippetName}`;
          
          scriptContent = scriptContent.replace('</script>', `
    const ${dataVarName} = ${JSON.stringify(contentData, null, 2)};
    </script>`);

          const propsDestructuring = Object.keys(contentData).join(', ');
          let snippetArgs = propsDestructuring ? ` { ${propsDestructuring} } ` : ` _ `;
          
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
      
      await mkdir(outputDir, { recursive: true });
      await write(outputFile, svelteFileContent);
    }
  }
  console.log(`   ✅ Validated and generated ${LANGUAGES.length * pages.length} pages for ${sectionName}`);
}

async function main() {
  console.log("Starting multi-repo site generation...");
  
  for (const section of SECTIONS) {
    await generateSection(section);
  }
  
  console.log("\n✨ All sections processed!");
}

main().catch(console.error);
EOF
