<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import ChatArea from "$lib/ChatArea.svelte";
    let { data } = $props();

    let language = $derived(data.lang);
    let translations = $derived((data as any).translations);
    let showCardsMobile = $state(false);
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
    <div class="cards-area">
        {#each data.records as card}
        <a href={card.link} target="_blank">
            <div class="card">
                <div class="card-glow"></div>
                <div class="card-image-wrapper">
                    <img
                        src={card.image}
                        alt={card.title}
                        class="card-image"
                    />
                    <div class="card-image-overlay"></div>
                </div>
                <div class="card-content">
                    <h4>{card.title}</h4>
                    <div class="price-container">
                        <span class="price-label">{card.label}</span>
                        <div class="price-value">
                            <span class="currency">{card.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        {/each}
    </div>
{/snippet}

<div class="layout-container">
    <div class="left-panel">
        <!-- TODO animated Stolonas -->
    </div>

    <div class="chat-area">
        <!-- Mobile Header (Logo + Cards Toggle) -->
        <div class="mobile-header">
            <h3>{showCardsMobile ? translations[language].cards.title : " "}</h3>
            <button
                class="mobile-cards-toggle"
                onclick={() => (showCardsMobile = !showCardsMobile)}
                aria-label={showCardsMobile ? translations[language].cards.close : translations[language].cards.title}
                title={showCardsMobile ? translations[language].cards.close : translations[language].cards.title}
            >
                <Icon icon={showCardsMobile ? "material-symbols:x-circle-outline" : "material-symbols:percent-discount-outline"} width="24" height="24" />
            </button>
        </div>

        <ChatArea 
            floating={false}
            chatService={data.chatService}
            translations={translations}
            lang={language}
            info={translations[language].chat.ai_name}
            button_title={translations[language].chat.new_chat}
            place_holder={translations[language].chat.placeholder}
        />

        <!-- Local Footer for Chat Page -->
        <footer class="local-footer">
            <p>{data.footer?.copyright || "© Stolon 2025"}</p>
        </footer>
    </div>

    <!-- Right Column / Cards -->
    <div
        class="right-panel {showCardsMobile ? 'mobile-active' : 'desktop-only'}"
    >
        {@render cardsContent()}
    </div>
</div>

<style>
    .layout-container {
        display: grid;
        grid-template-columns: 260px 1fr 300px; /* narrowed for smaller cards */
        height: 100%; /* Fill available space (excluding hidden footer) */
        width: 100%;
        box-sizing: border-box;
        position: relative;
    }

    /* Hide the global footer on this chat page */
    /* Global footer is hidden conditionally in layout now */

    /* Left Panel (Logo area) */
    .left-panel {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
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

    /* Cards */
    .right-panel {
        display: flex;
        justify-content: center;
        padding: 0 20px 20px 0;
    }

    .cards-area {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 290px;
        max-height: 100vh;
        max-height: 100dvh;
        justify-content: flex-start;
        padding-top: 40px;
        scrollbar-width: none;
    }
    .cards-area::-webkit-scrollbar {
        display: none;
    }

    .card {
        position: relative;
        background: var(--card-bg);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: var(--card-shadow);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid var(--border);
    }
    .card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
            circle,
            var(--brand-glow) 0%,
            transparent 70%
        );
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }
    .card:hover .card-glow {
        opacity: 1;
    }

    .card-image-wrapper {
        position: relative;
        overflow: hidden;
        margin: 0;
        border-radius: 20px 20px 0 0;
        height: 140px;
    }
    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }
    .card:hover .card-image {
        transform: scale(1.08);
    }

    .card-image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .card:hover .card-image-overlay {
        opacity: 1;
    }

    .card-content {
        padding: 0 20px 20px;
    }
    .card h4 {
        margin: 10px 0 8px;
        font-size: 17px;
        font-weight: 800;
        color: var(--text);
        line-height: 1.3;
        text-align: center;
    }

    .price-container {
        background: var(--brand-soft);
        border: 2px solid var(--border-strong);
        border-radius: 14px;
        padding: 16px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    .price-label {
        display: block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: var(--brand-dark);
        margin-bottom: 8px;
        text-transform: uppercase;
    }
    .price-value {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 2px;
    }
    .currency {
        font-size: 24px;
        font-weight: 800;
        color: var(--brand-dark);
    }

    /* Mobile */
    /* Mobile */
    .mobile-header {
        display: none;
    }

    @media (max-width: 900px) {
        .layout-container {
            grid-template-columns: 1fr;
        }

        /* Hide Left Panel on Mobile */
        .left-panel {
            display: none;
        }

        /* Mobile Header */
        .mobile-header {
            display: flex;
            align-items: center;
            justify-content: end;
            width: 100%;
            height: 60px;
            padding: 0 16px 0 60px; /* Left padding space for Burger from layout */
            box-sizing: border-box;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 50;
        }
        .mobile-header h3 {
            margin: 0;
            font-size: 1.1rem;
            font-weight: bold;
        }
        .mobile-cards-toggle {
            background: transparent;
            border: none;
            color: var(--text);
            cursor: pointer;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Right Panel (Cards) -> Mobile Overlay */
        .right-panel {
            display: none; /* Hidden by default on mobile */
        }
        .right-panel.mobile-active {
            display: flex;
            flex-direction: column;
            position: fixed;
            inset: 0;
            z-index: 10;
            background: var(--bg);
            padding: 70px 0 0 0;
            opacity: 1;
            /* Reset desktop styles if needed */
            justify-content: flex-start;
            align-items: stretch;
        }

        /* Cards Area in Overlay needs to scroll */
        .right-panel.mobile-active .cards-area {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            overflow-y: auto;
            flex: 1;
        }

        .desktop-only {
            display: none;
        }
    }
</style>
