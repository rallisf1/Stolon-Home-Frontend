<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import ChatArea from "$lib/ChatArea.svelte";
    let { data } = $props();

    let language = $derived(data.lang);
    let translations = $derived((data as any).translations);
</script>

<svelte:head>
<title>{translations[language].general.title}</title>
<meta name="description" content={translations[language].general.description} />
<meta property="og:title" content={translations[language].general.title}>
<meta property="og:description" content={translations[language].general.description}>
<meta name="twitter:title" content={translations[language].general.title}>
<meta name="twitter:description" content={translations[language].general.description}>
</svelte:head>

{#snippet cardsContent()}
    <div class="cards-carousel-container desktop-carousel">
        <div class="cards-track">
            <!-- Ensure enough duplicates for looping (4 sets) -->
            {#each [...data.records, ...data.records, ...data.records, ...data.records] as card}
            <div class="card-slide">
                <a href={card.link} target="_blank" class="mini-card">
                    <div class="mc-img-wrapper">
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div class="mc-info">
                        <h4>{card.title}</h4>
                        <div class="mc-price-row">
                            <span class="mc-label">{card.label}</span>
                            <span class="mc-price">{card.price}</span>
                        </div>
                    </div>
                </a>
            </div>
            {/each}
        </div>
    </div>
{/snippet}

<div class="layout-container">
    <div class="chat-area">
        <div class="mobile-header-spacer"></div>
        {@render cardsContent()}
        <div class="chat-wrapper-outer">
            {#key language}
            <ChatArea 
                floating={false}
                chatService={data.chatService}
                translations={translations}
                lang={language}
                info={translations[language].chat.ai_name}
                button_title={translations[language].chat.new_chat}
                place_holder={translations[language].chat.placeholder}
                pills={[translations[language].chat.pill1, translations[language].chat.pill2, translations[language].chat.pill3, translations[language].chat.pill4]}
            />
            {/key}
        </div>

        <!-- Local Footer for Chat Page -->
        <footer class="local-footer">
            <p>&copy; {data.footer?.copyright}</p>
        </footer>
    </div>
</div>

<style>
    .layout-container {
        display: flex;
        flex-direction: column;
        height: 100%; /* Fill available space (excluding hidden footer) */
        width: 100%;
        box-sizing: border-box;
        position: relative;
    }

    /* Chat Area */
    .chat-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100dvh;
        color: var(--text);
        box-sizing: border-box;
        position: relative;
    }
    
    .chat-wrapper-outer {
        flex: 1;
        width: 100%;
        min-height: 0;
        display: flex;
        flex-direction: column;
    }

    /* Local Footer */
    .local-footer {
        padding: 5px 0 10px; /* Small padding */
        text-align: center;
        opacity: 0.5;
        font-size: 0.8rem;
        width: 100%;
        color: var(--text-muted);
        flex-shrink: 0;
    }
    
    .mobile-header-spacer {
        display: none;
    }

    /* Cards Carousel (Desktop Only) */
    .cards-carousel-container {
        width: 100%;
        max-width: 900px;
        overflow: hidden;
        padding: 20px 0 10px 0;
        position: relative;
        flex-shrink: 0;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        margin: 0 auto;
    }

    .cards-track {
        display: flex;
        width: max-content;
        animation: scroll 40s linear infinite;
    }

    .cards-track:hover {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-25%, 0, 0); } /* Loops 4 sets */
    }

    .card-slide {
        padding-right: 16px;
        flex: 0 0 auto;
    }

    .mini-card {
        display: flex;
        align-items: center;
        background: var(--card-bg, #fff);
        border: 1px solid var(--border, #eaeaea);
        border-radius: 12px;
        padding: 8px;
        gap: 12px;
        width: 240px;
        text-decoration: none;
        color: var(--text, #333);
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }

    .mini-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        border-color: var(--brand, #007bff);
        background: var(--brand-soft);
    }

    .mc-img-wrapper {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 8px;
        overflow: hidden;
    }

    .mc-img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .mc-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        flex: 1;
    }

    .mc-info h4 {
        margin: 0 0 4px 0;
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .mc-price-row {
        display: flex;
        align-items: baseline;
        gap: 6px;
    }

    .mc-label {
        font-size: 10px;
        text-transform: uppercase;
        color: var(--brand, #888);
        font-weight: 800;
        letter-spacing: 0.5px;
    }

    .mc-price {
        font-size: 14px;
        color: var(--brand-dark, #0056b3);
    }

    @media (max-width: 900px) {
        .desktop-carousel {
            display: none !important;
        }

        .mobile-header-spacer {
            display: block;
            height: 60px;
            width: 100%;
            flex-shrink: 0;
        }
    }
</style>
