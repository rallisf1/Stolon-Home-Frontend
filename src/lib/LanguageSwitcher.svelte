<script lang="ts">
    import Icon from "@iconify/svelte";
    import { languages } from "$lib/constants";
    import { goto } from "$app/navigation";

    // Default to en/el if list not provided, fulfilling user requirement
    let { lang, list = ["en", "el"] }: { lang: string; list?: string[] } =
        $props();

    // Determine which languages to show (exclude current)
    let langs2Show = $derived(list.filter((l) => l !== lang));

    // Function to switch language
    function toggleLanguage(targetLang: string) {
        if (typeof window === "undefined") return;

        const url = new URL(window.location.href);
        const currentPath = url.pathname;
        let newPath = currentPath;

        // Replace the current language segment in the path
        if (currentPath.startsWith(`/${lang}`)) {
            newPath = currentPath.replace(`/${lang}`, `/${targetLang}`);
        } else {
            // Fallback: try to match from list
            for (const l of list) {
                if (currentPath.startsWith(`/${l}`)) {
                    newPath = currentPath.replace(`/${l}`, `/${targetLang}`);
                    break;
                }
            }
        }

        goto(`${newPath}${url.search}`, { replaceState: false });
    }
</script>

<div class="language-switcher">
    {#each langs2Show as l}
        {@const langObj = languages.find((item) => item.key === l)}
        <button
            class="lang-btn"
            onclick={() => toggleLanguage(l)}
            title={langObj?.name || l}
        >
            <Icon icon={`circle-flags:${l}`} width="24" height="24" />
        </button>
    {/each}
</div>

<style>
    .language-switcher {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 100;
        display: flex;
        gap: 8px;
    }
    .lang-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: var(--card-bg); /* Add background for visibility */
        border: 1px solid var(--border);
        cursor: pointer;
        padding: 0;
        border-radius: 50%;
        color: var(--text);
        font-size: 0.9rem;
        transition: all 0.2s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .lang-btn:hover {
        transform: scale(1.1);
        background: var(--btn-hover);
        color: var(--brand);
        border-color: var(--brand);
    }
</style>
