<script lang="ts">
    import { goto } from "$app/navigation";
    import { translations } from "$lib/constants";
    import { previousUrl } from "$lib/stores";
    import type { PageProps } from "./$types";
    import { marked } from "marked";

    let { data }: PageProps = $props();

    let page = $derived(data.record);

    let language = $derived(data.lang);

    const goBack = () => {
        if($previousUrl === '') {
            goto(`/${language}`);
        } else {
            goto($previousUrl);
        }
    }
</script>

<svelte:head>
<title>{page.title}</title>
<meta name="description" content={page.desc} />
<meta property="og:title" content={page.title}>
<meta property="og:description" content={page.desc}>
<meta name="twitter:title" content={page.title}>
<meta name="twitter:description" content={page.desc}>
</svelte:head>

<div class="page-container">
    <div class="markdown-content">
        {@html marked(page.content || "")}
    </div>
    <button onclick={goBack}>{$previousUrl === '' ? translations[language].general.go_home : translations[language].general.back}</button>
</div>

<style>
    .page-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
        box-sizing: border-box;
    }

    .markdown-content {
        color: var(--text);
        font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
        font-size: 1.05rem;
    }

    /* Headings */
    .markdown-content :global(h1),
    .markdown-content :global(h2),
    .markdown-content :global(h3),
    .markdown-content :global(h4) {
        color: var(--text);
        font-weight: 700;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        line-height: 1.3;
    }

    .markdown-content :global(h1) {
        font-size: 2.2rem;
        margin-bottom: 0.8em;
        border-bottom: 1px solid var(--border);
        padding-bottom: 0.3em;
    }

    .markdown-content :global(h2) {
        font-size: 1.8rem;
    }

    .markdown-content :global(h3) {
        font-size: 1.4rem;
    }

    /* Text elements */
    .markdown-content :global(p) {
        margin-bottom: 1.2em;
    }

    .markdown-content :global(a) {
        color: var(--brand);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s;
    }

    .markdown-content :global(a:hover) {
        border-bottom-color: var(--brand);
    }

    .markdown-content :global(strong) {
        font-weight: 700;
        color: var(--text);
    }

    /* Lists */
    .markdown-content :global(ul),
    .markdown-content :global(ol) {
        margin-bottom: 1.2em;
        padding-left: 1.5em;
    }

    .markdown-content :global(li) {
        margin-bottom: 0.5em;
    }

    /* Blockquotes */
    .markdown-content :global(blockquote) {
        margin: 1.5em 0;
        padding-left: 1em;
        border-left: 4px solid var(--brand);
        color: var(--text-muted, #888);
        font-style: italic;
    }

    /* Code */
    .markdown-content :global(code) {
        background: var(--card-bg, #f5f5f5);
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-family: "Fira Code", monospace;
        font-size: 0.9em;
    }

    .markdown-content :global(pre) {
        background: var(--card-bg, #1e1e1e);
        padding: 1em;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1.5em 0;
        border: 1px solid var(--border);
    }

    .markdown-content :global(pre code) {
        background: transparent;
        padding: 0;
        color: inherit;
    }

    .markdown-content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 1em 0;
    }

    .markdown-content :global(hr) {
        border: none;
        border-top: 1px solid var(--border);
        margin: 2em 0;
    }

    .markdown-content :global(ol), .markdown-content :global(ul) {
        margin: 0 0 1rem 1rem;
    }

    .markdown-content :global(ol) {
        list-style: decimal;
    }

    .markdown-content :global(ul) {
        list-style: disc;
    }

    .markdown-content :global(li > p) {
        margin: 0;
    }
    button {
        width: 100%;
        padding: 0.875rem;
        background-color: var(--avatar-user);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.3s, transform 0.1s;
    }

    button:hover {
        opacity: 0.8;
    }

    button:active {
        transform: scale(0.98);
    }
</style>
