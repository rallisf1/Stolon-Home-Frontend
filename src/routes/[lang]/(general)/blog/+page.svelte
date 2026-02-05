<script lang="ts">
    import type { PageProps } from "./$types";
    import { goto } from "$app/navigation";
    import { translations } from "$lib/constants";

    let { data }: PageProps = $props();

    let language = $derived(data.lang);

    function goToPage(page: number) {
        const url = new URL(window.location.href);
        url.searchParams.set("page", page.toString());
        goto(url.pathname + url.search);
    }

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

        // Reset to page 1 when changing filters
        url.searchParams.delete("page");

        if (newTags.length > 0) {
            url.searchParams.set("tags", newTags.join(","));
        } else {
            url.searchParams.delete("tags");
        }

        goto(url.pathname + url.search);
    }

    function clearTags() {
        const url = new URL(window.location.href);
        goto(url.pathname); // return to first page when clearing the filter
    }
</script>

<div class="container">
    <div class="tags-filter">
        <div class="filter-head">
            <h3 class="filter-title">{translations[language].blog.filter}</h3>
            <button
                class="clear-filters"
                onclick={clearTags}
            >
                {translations[language].blog.clear_filters}
            </button>
        </div>
        <div class="tags-container">
            {#each data.availableTags as tag}
                <button
                    class="tag-pill"
                    class:active={data.selectedTags.includes(tag)}
                    class:disabled={!data.selectedTags.includes(tag) && data.selectedTags.length >= 2}
                    onclick={() => toggleTag(tag)}
                >
                    {tag}
                </button>
            {/each}
        </div>
    </div>

    <div class="blog-grid" id="blogGrid">
        {#each data.records as post}
        <a href="/{language}/blog/{post.slug}">
            <div class="blog-card">
                {#if post.image.length}
                <div class="card-image">
                    <img src={post.image} alt={post.title} />
                </div>
                {/if}
                <div class="card-content">
                    <h2 class="card-title">{post.title}</h2>
                    <p class="card-excerpt">{post.desc}</p>
                </div>
            </div>
        </a>
        {:else}
        <div class="no-tags-message">
            <p>{translations[language].blog.no_posts}</p>
        </div>
        {/each}
    </div>

    <!-- Pagination Controls -->
    {#if data.pagination && data.pagination.totalPages > 1}
        <nav class="pagination" aria-label="Blog pagination">
            <button
                class="pagination-btn nav-btn"
                disabled={data.pagination.page === 1}
                onclick={() => goToPage(data.pagination.page - 1)}
            >
                {translations[language].blog.previous}
            </button>

            <div class="page-numbers">
                {#each Array.from({ length: data.pagination.totalPages }, (_, i) => i + 1) as pageNum}
                    <button
                        class="pagination-btn num-btn"
                        class:active={pageNum === data.pagination.page}
                        onclick={() => goToPage(pageNum)}
                    >
                        {pageNum}
                    </button>
                {/each}
            </div>

            <button
                class="pagination-btn nav-btn"
                disabled={data.pagination.page === data.pagination.totalPages}
                onclick={() => goToPage(data.pagination.page + 1)}
            >
                {translations[language].blog.next}
            </button>
        </nav>
    {/if}
</div>

<style>
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

    .filter-head {
        display: flex;
        justify-content: space-between;
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
        margin-bottom: 60px;
    }

    .blog-card {
        background: var(--card-bg);
        border: 2px solid var(--border);
        border-radius: 8px;
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

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

    /* Pagination Styles */
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 40px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border);
        border-radius: 12px;
        backdrop-filter: blur(8px);
    }

    .page-numbers {
        display: flex;
        gap: 10px;
    }

    .pagination-btn {
        padding: 10px 18px;
        background: var(--btn-bg, #ffffff);
        color: var(--text, #333);
        border: 2px solid var(--border, #3e9b45);
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 2px 2px 0 var(--border);
    }

    .pagination-btn:hover:not(:disabled) {
        transform: translate(-1px, -1px);
        box-shadow: 4px 4px 0 var(--border);
        background: var(--btn-hover, #f0f0f0);
    }

    .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        box-shadow: none;
    }

    .pagination-btn.active {
        background: #ed2024;
        color: #ffffff;
        border-color: #ed2024;
        box-shadow: 2px 2px 0 rgba(237, 32, 36, 0.4);
    }

    .nav-btn {
        min-width: 120px;
    }

    @media (max-width: 768px) {
        .blog-grid {
            grid-template-columns: 1fr;
        }

        .pagination {
            flex-direction: column;
            gap: 15px;
        }

        .nav-btn {
            width: 100%;
        }
    }
</style>
