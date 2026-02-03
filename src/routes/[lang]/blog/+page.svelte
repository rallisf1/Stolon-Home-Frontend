<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    let lang = $derived(data.lang);
</script>

<div class="container">
    <div class="blog-grid" id="blogGrid">
        {#each data.records as post}
            <div class="blog-card">
                <div class="card-image">
                    <img src={post.image} alt={post.title} />
                </div>
                <div class="card-content">
                    <h2 class="card-title">{post.title}</h2>
                    <p class="card-excerpt">{post.desc}</p>
                    <a href={`/${lang}/blog/${post.slug}`} class="read-more"
                        >Read More →</a
                    >
                </div>
            </div>
        {/each}
    </div>
</div>

<style>

    :global(body)::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: linear-gradient(
                90deg,
                rgba(62, 155, 69, 0.05) 1px,
                transparent 1px
            ),
            linear-gradient(rgba(62, 155, 69, 0.05) 1px, transparent 1px);
        background-size: 50px 50px;
        z-index: 0;
        animation: gridScroll 20s linear infinite;
    }

    @keyframes gridScroll {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(50px, 50px);
        }
    }

    .container {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 30px;
        margin-bottom: 40px;
    }

    .blog-card {
        background: var(--card-bg);
        border: 2px solid var(--border);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
        box-shadow: 4px 4px 0 var(--border);
    }

    .blog-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--border);
    }

    .card-image {
        width: 100%;
        height: 200px;
        background: linear-gradient(135deg, #3e9b45 0%, #7e1416 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3em;
        color: #ffffff;
    }

    .card-content {
        padding: 25px;
    }

    .card-title {
        font-size: 1.5em;
        font-weight: 700;
        margin: 0 0 15px 0;
        color: var(--text);
    }

    .card-excerpt {
        font-size: 1em;
        line-height: 1.6;
        color: var(--text-muted);
        margin-bottom: 20px;
    }

    .read-more {
        display: inline-block;
        padding: 10px 25px;
        background-color: #ed2024;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
        transition: all 0.3s ease;
        border: 2px solid #ed2024;
    }

    .read-more:hover {
        background-color: #ffffff;
        color: #ed2024;
    }

    @media (max-width: 768px) {
        .blog-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
