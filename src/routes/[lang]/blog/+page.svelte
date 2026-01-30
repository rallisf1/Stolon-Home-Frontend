<script lang="ts">
    import type { PageProps } from "./$types";
    import { goto } from "$app/navigation";

    let { data }: PageProps = $props();

    function toggleTag(tag: string) {
        const currentTags = new Set(data.selectedTags);

        if (currentTags.has(tag)) {
            // Deselect the tag
            currentTags.delete(tag);
        } else if (currentTags.size < 2) {
            // Select the tag (max 2)
            currentTags.add(tag);
        } else {
            // Already at max, do nothing
            return;
        }

        // Build new URL with updated tags
        const newTags = Array.from(currentTags);
        const url = new URL(window.location.href);

        if (newTags.length > 0) {
            url.searchParams.set("tags", newTags.join(","));
        } else {
            url.searchParams.delete("tags");
        }

        goto(url.pathname + url.search);
    }
</script>

<div class="container">
    <!-- Tag Filter Pills -->
    {#if data.availableTags && data.availableTags.length > 0}
        <div class="tags-filter">
            <h3 class="filter-title">Filter by Tags:</h3>
            <div class="tags-container">
                {#each data.availableTags as tag}
                    <button
                        class="tag-pill"
                        class:active={data.selectedTags.includes(tag)}
                        class:disabled={!data.selectedTags.includes(tag) &&
                            data.selectedTags.length >= 2}
                        onclick={() => toggleTag(tag)}
                    >
                        {tag}
                    </button>
                {/each}
            </div>
            {#if data.selectedTags.length > 0}
                <button
                    class="clear-filters"
                    onclick={() => goto(`/${data.lang}/blog`)}
                >
                    Clear Filters
                </button>
            {/if}
        </div>
    {:else}
        <div class="no-tags-message">
            <p>
                💡 No tags available yet. Add tags to your blog posts in
                PocketBase to enable filtering.
            </p>
        </div>
    {/if}

    <div class="blog-grid" id="blogGrid">
        {#each data.records as post}
            <div class="blog-card">
                <div class="card-image">
                    <img src={post.image} alt={post.title} />
                </div>
                <div class="card-content">
                    <h2 class="card-title">{post.title}</h2>
                    <p class="card-excerpt">{post.desc}</p>
                    <a href="/{data.lang}/blog/{post.slug}" class="read-more"
                        >Read More →</a
                    >
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

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

    .tags-filter {
        margin-bottom: 40px;
        padding: 25px;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid var(--border, #3e9b45);
        border-radius: 8px;
        box-shadow: 4px 4px 0 var(--border, #3e9b45);
    }

    .filter-title {
        font-size: 1.2em;
        font-weight: 700;
        margin: 0 0 15px 0;
        color: var(--text, #333);
    }

    .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 15px;
    }

    .tag-pill {
        padding: 8px 18px;
        background: #ffffff;
        color: #3e9b45;
        border: 2px solid #3e9b45;
        border-radius: 20px;
        font-size: 0.95em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        outline: none;
        box-shadow: 2px 2px 0 #3e9b45;
    }

    .tag-pill:hover:not(.disabled) {
        background: #3e9b45;
        color: #ffffff;
        transform: translate(-1px, -1px);
        box-shadow: 3px 3px 0 #3e9b45;
    }

    .tag-pill.active {
        background: #ed2024;
        color: #ffffff;
        border-color: #ed2024;
        box-shadow: 2px 2px 0 #ed2024;
    }

    .tag-pill.active:hover {
        background: #c41c1f;
        border-color: #c41c1f;
        box-shadow: 3px 3px 0 #c41c1f;
    }

    .tag-pill.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .clear-filters {
        padding: 8px 20px;
        background: transparent;
        color: #ed2024;
        border: 2px solid #ed2024;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .clear-filters:hover {
        background: #ed2024;
        color: #ffffff;
    }

    .no-tags-message {
        margin-bottom: 30px;
        padding: 20px;
        background: rgba(62, 155, 69, 0.1);
        border: 2px dashed #3e9b45;
        border-radius: 8px;
        text-align: center;
    }

    .no-tags-message p {
        margin: 0;
        color: var(--text, #333);
        font-size: 1em;
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
