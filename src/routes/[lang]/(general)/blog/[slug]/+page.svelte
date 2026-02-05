<script lang="ts">
    import type { PageProps } from "./$types";
    import { previousUrl } from "$lib/stores";
    import { goto } from "$app/navigation";

    let { data }: PageProps = $props();

    let post = $derived(data.record);
    let language = $derived(data.lang);
    let translations = $derived((data as any).translations);
    let date = $derived.by(() => {
        const postDate = new Date(data.record.created.replace(' ', 'T'));
        const locale = data.lang === "el" ? 'el-GR' : 'en-GB';
        return postDate.toLocaleDateString(locale, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    });

    const goBack = () => {
        if($previousUrl === '') {
            goto(`/${language}/blog`);
        } else {
            goto($previousUrl);
        }
    }
</script>

<svelte:head>
<title>{post.title}</title>
<meta name="description" content={post.desc} />
<meta property="og:title" content={post.title}>
<meta property="og:description" content={post.desc}>
<meta name="twitter:title" content={post.title}>
<meta name="twitter:description" content={post.desc}>
</svelte:head>

<article class="post-container">

    <header class="post-header">
        <h1 class="post-title">{post.title}</h1>
        <div class="post-meta">🗓 {date}</div>
    </header>

    {#if post.image}
        <div class="post-hero">
            <img src={post.image} alt={post.title} />
        </div>
    {/if}

    <div class="post-content">
        {@html post.content}
    </div>

    <button onclick={goBack} class="back-link">{translations[language].general.back}</button>
</article>

<style>
    .post-container {
        text-align: justify;
        position: relative;
        z-index: 1;
        max-width: 900px;
        margin: 0 auto;
        padding: 60px 20px 100px;
    }

    .back-link {
        display: inline-block;
        padding: 10px 25px;
        background-color: #ed2024;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
        transition: all 0.3s ease;
        border: 2px solid #ed2024;
        margin-bottom: 40px;
    }

    .back-link:hover {
        background-color: #ffffff;
        color: #ed2024;
    }

    .post-header {
        margin-bottom: 40px;
    }

    .post-title {
        font-size: 3em;
        line-height: 1.15;
        margin: 0 0 15px;
        font-weight: 800;
    }

    .post-meta {
        font-size: 0.9em;
        color: #7e1416;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .post-hero {
        margin: 40px 0 60px;
        border: 3px solid #000;
        box-shadow: 6px 6px 0 #000;
    }

    .post-hero img {
        width: 100%;
        display: block;
    }

    .post-content {
        font-size: 1.1em;
        line-height: 1.8;
        color: var(--text);
    }

    /* Content typography */
    .post-content :global(h2) {
        font-size: 2em;
        margin: 60px 0 20px;
        font-weight: 800;
    }

    .post-content :global(h3) {
        font-size: 1.4em;
        margin: 40px 0 15px;
        font-weight: 700;
    }

    .post-content :global(p) {
        margin-bottom: 24px;
    }

    .post-content :global(a) {
        color: var(--brand);
        font-weight: 600;
    }

    .post-content :global(blockquote) {
        margin: 40px 0;
        padding: 25px 30px;
        border-left: 6px solid var(--brand);
        background: var(--bg-soft);
        font-style: italic;
    }

    .post-content :global(pre) {
        background: #000;
        color: #fff;
        padding: 20px;
        overflow-x: auto;
        border-radius: 6px;
        margin: 40px 0;
    }

    .post-content :global(ol), .post-content :global(ul) {
        margin: 0 0 1rem 1rem;
    }

    .post-content :global(ol) {
        list-style: decimal;
    }

    .post-content :global(ul) {
        list-style: disc;
    }

    .post-content :global(li > p) {
        margin: 0;
    }

    /* Mobile */
    @media (max-width: 768px) {
        .post-title {
            font-size: 2.2em;
        }
    }
</style>
