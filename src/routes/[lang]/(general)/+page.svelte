<script lang="ts">
    import { marked } from "marked";
    import { translations } from "$lib/constants";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    let { data } = $props();

    let language = $derived(data.lang);
    let messages: {role: string, content: string}[] = $state([]);
    let userInput = $state("");
    let isGenerating = $state(false);
    let theme = $state("light");
    let chatContainer: HTMLElement;
    let messageInputel;
    let showCardsMobile = $state(false);

    function autoResize(e: any) {
        const el = e.target;
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 240) + "px"; // cap height
    }

    function loadMessages() {
        if (typeof localStorage === "undefined") return;
        const saved = localStorage.getItem("chat_history");
        if (saved) {
            messages = JSON.parse(saved);
        } else {
            messages = [{ role: "assistant", content: translations[language].chat.greeting }];
        }
    }

    onMount(() => {
        if (typeof localStorage !== "undefined") {
            loadMessages();
        }
    })

    $effect(() => {
        if (typeof localStorage !== "undefined") {
            theme = localStorage.getItem("theme") || "light";
            if (messages.length > 1) {
                localStorage.setItem("chat_history", JSON.stringify(messages));
                scrollToBottom();
            }
        }
    });

    function scrollToBottom() {
        if (chatContainer) {
            setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 0);
        }
    }

    async function sendMessage() {
        if (!userInput.trim() || isGenerating) return;

        const currentInput = userInput;
        userInput = "";
        isGenerating = true;

        // Add user message
        const userMsg = { role: "user", content: currentInput };
        messages = [...messages, userMsg];

        // placeholder for AI response
        const aiMsg = { role: "assistant", content: "" };
        messages = [...messages, aiMsg];
        let responseContent = "";

        // Start streaming
        await data.chatService.sendMessage(currentInput, (chunk) => {
            responseContent += chunk;
            // Update the last message (AI) with new content
            messages[messages.length - 1].content = responseContent;
            scrollToBottom();
        });

        isGenerating = false;
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    function clearChat() {
        if (typeof window !== "undefined") {
            // Clear specific keys as requested (chat_history + session from chat.ts)
            localStorage.removeItem("chat_history");
            localStorage.removeItem("chat_session_id");
            messages = [];
            // Ideally we also reset the chatService session, but a reload might be needed for full effect
            // For now, clearing messages matches user intent "clear local storage"
        }
    }
</script>

{#snippet cardsContent()}
    <div class="cards-area">
        <div class="card card-website">
            <div class="card-glow"></div>
            <div class="card-image-wrapper">
                <img
                    src="https://cdn.pixabay.com/photo/2020/02/24/04/25/web-design-4875183_1280.jpg"
                    alt="Website"
                    class="card-image"
                />
                <div class="card-image-overlay"></div>
            </div>
            <div class="card-content">
                <h4>{translations[language].cards.website_title}</h4>
                <div class="price-container">
                    <span class="price-label"
                        >{translations[language].cards
                            .website_price_label}</span
                    >
                    <div class="price-value">
                        <span class="currency">€</span>
                        <span class="amount">250</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-nextcloud">
            <div class="card-glow"></div>
            <div class="card-image-wrapper">
                <img
                    src="https://cdn.thenewstack.io/media/2023/09/94b1d1e3-nextcloud.jpg"
                    alt="Nextcloud"
                    class="card-image"
                />
                <div class="card-image-overlay"></div>
            </div>
            <div class="card-content">
                <h4>{translations[language].cards.nextcloud_title}</h4>
                <div class="price-container">
                    <span class="price-label"
                        >{translations[language].cards
                            .nextcloud_price_label}</span
                    >
                    <div class="price-value">
                        <span class="currency">€</span>
                        <span class="amount">1</span>
                        <span class="period"
                            >{translations[language].cards.per_month}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
{/snippet}

<div class="layout-container">
    <div class="left-panel">
        <!-- TODO animated Stolonas -->
    </div>

    <div class="chat-area" class:startup={messages.length === 0}>
        <!-- Mobile Header (Logo + Cards Toggle) -->
        <div class="mobile-header">
            <button
                class="mobile-cards-toggle"
                onclick={() => (showCardsMobile = true)}
                aria-label={translations[language].cards.title}
                title={translations[language].cards.title}
            >
                <Icon icon="material-symbols:percent-discount-outline" width="24" height="24" />
            </button>
        </div>

        <div class="messages-container" bind:this={chatContainer}>
            {#each messages as msg}
                <div class="message {msg.role}">
                    <div class="message-wrapper">
                        {#if msg.role === "assistant"}
                            <div class="avatar ai">
                                <img src="/stolonas-thumb.png" alt="AI Agent" />
                            </div>
                            <div class="bubble ai-bubble">
                                <div class="message-info">
                                    {translations[language].chat.ai_name}
                                </div>
                                <div class="message-content">
                                    {#if msg.content && msg.content.length}
                                    {@html marked(msg.content)}
                                    {:else}
                                    <Icon icon="svg-spinners:3-dots-bounce" />
                                    {/if}
                                </div>
                            </div>
                        {:else}
                            <div class="bubble user-bubble">
                                <div class="message-content">{msg.content}</div>
                            </div>
                            <div class="avatar user">
                                <span>U</span>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>

        <div class="input-area">
            <div class="input-wrapper messageBox">
                <!-- LEFT ICON BUTTON (Clear History) -->
                <button
                    class="icon-button left-icon-btn"
                    onclick={clearChat}
                    title={translations[language].chat.new_chat}
                    aria-label={translations[language].chat.new_chat}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M3 6h18" /><path
                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                        /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg
                    >
                </button>
                <textarea
                    id="messageInput"
                    rows="1"
                    placeholder={messages.length > 1 ? translations[language].chat.placeholder2 : translations[language].chat.placeholder}
                    bind:value={userInput}
                    bind:this={messageInputel}
                    onkeydown={(e) => handleKeydown(e)}
                    oninput={(e) => autoResize(e)}
                ></textarea>

                <!-- RIGHT ICONS -->
                <div class="right-icons-container">
                    <button class="icon-button" aria-label="Microphone">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"
                            /></svg
                        >
                    </button>
                    <button class="icon-button" aria-label="Voice over">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            ><!-- Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE --><g
                                fill="none"
                                ><path
                                    d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                /><path
                                    fill="currentColor"
                                    d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"
                                /></g
                            ></svg
                        >
                    </button>
                </div>
            </div>
        </div>

        <!-- Local Footer for Chat Page -->
        <footer class="local-footer">
            <p>{data.footer?.copyright || "© Stolon 2025"}</p>
        </footer>
    </div>

    <!-- Right Column / Cards -->
    <div
        class="right-panel {showCardsMobile ? 'mobile-active' : 'desktop-only'}"
    >
        <div class="mobile-cards-header">
            <h3>{translations[language].cards.title}</h3>
            <button
                class="close-cards-btn"
                onclick={() => (showCardsMobile = false)}>✕</button
            >
        </div>
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

    .logo-wrapper {
        position: relative;
        /* Aligned visually roughly where sidebar header would be */
        padding-left: 20px;
    }
    .logo-wrapper img {
        width: 120px;
        height: auto;
    }

    /* Chat Area */
    .chat-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        color: var(--text);
        box-sizing: border-box;
        position: relative;
    }

    /* Messages Container style from snippet */
    .messages-container {
        flex-grow: 1;
        width: 100%;
        max-width: 800px;
        overflow-y: auto;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;
        transition:
            flex-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            padding 0.8s ease;
        min-height: 0;
        /* Hide scrollbar */
        scrollbar-width: none;
    }
    .messages-container::-webkit-scrollbar {
        display: none;
    }

    .chat-area.startup .messages-container {
        flex-grow: 0.0001;
        padding-top: 35px;
        padding-bottom: 1;
    }

    /* Message Styles */
    .message {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 4px 0;
        animation: messageFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes messageFadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .message.user {
        justify-content: flex-end;
    }

    .message-wrapper {
        display: flex;
        gap: 12px;
        max-width: 85%;
        align-items: flex-end;
    }
    .message.user .message-wrapper {
        flex-direction: row;
    }

    /* Avatars */
    .avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        flex-shrink: 0;
        overflow: hidden;
        border: 2px solid var(--border);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .avatar.ai {
        background: var(--card-bg);
        border-color: var(--brand);
    }
    .avatar.ai img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .avatar.user {
        background: linear-gradient(135deg, #ec2025, #991b1b);
        color: white;
        border-color: rgba(255, 255, 255, 0.2);
    }
    .avatar.user span {
        color: white;
    }

    /* Bubbles */
    .bubble {
        padding: 12px 16px;
        border-radius: 18px;
        font-size: 16px;
        line-height: 1.5;
        position: relative;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
    .ai-bubble {
        background: var(--bubble-ai-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--bubble-ai-border);
        color: var(--bubble-ai-text);
        border-bottom-left-radius: 4px;
    }
    .user-bubble {
        background: var(--brand);
        color: white;
        border-bottom-right-radius: 4px;
        box-shadow: 0 4px 15px var(--brand-glow);
    }

    .message-info {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
        opacity: 0.7;
    }

    /* Content Styling */
    .message-content :global(pre) {
        background: var(--bubble-pre-bg);
        padding: 14px;
        border-radius: 12px;
        margin: 10px 0;
        overflow-x: auto;
        border: 1px solid var(--bubble-pre-border);
        font-family: "Fira Code", "Courier New", monospace;
        font-size: 14px;
    }
    .message-content :global(code) {
        background: var(--bubble-code-bg);
        padding: 2px 4px;
        border-radius: 4px;
        font-family: inherit;
        font-weight: 600;
        color: var(--bubble-code-text);
    }
    .message-content :global(a) {
        color: var(--brand);
        text-decoration: none;
        font-weight: 600;
        border-bottom: 1.5px solid transparent;
        transition: all 0.2s;
    }
    .message-content :global(a:hover) {
        border-bottom-color: var(--brand);
    }

    /* Input Area */
    .input-area {
        width: 100%;
        max-width: 100%;
        padding: 24px;
        background: transparent;
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        z-index: 10;
        box-sizing: border-box;
    }

    .input-wrapper.messageBox {
        width: 100%;
        max-width: 768px;
        position: relative;
        background: var(--input-bg);
        border-radius: 12px;
        box-shadow: var(--card-shadow);
        border: 1px solid var(--border);
        display: flex;
        align-items: flex-end;
        pointer-events: auto;
        min-height: 48px;
        padding: 6px 12px;
        gap: 8px;
    }
    .input-wrapper:focus-within {
        border-color: #3e9b45;
    }

    #messageInput {
        flex: 1;
        width: 100%;
        min-height: 40px;
        max-height: 240px;
        box-sizing: border-box;
        background: transparent;
        border: none;
        outline: none;
        padding: 8px 10px;
        color: var(--text);
        font-size: 16px;
        line-height: 1.4;
        resize: none;
    }
    #messageInput::placeholder {
        color: #9ca3af;
    }

    /* Right & Left Icon Buttons */
    .icon-button {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        padding: 0;
        border-radius: 50%;
        transition: background 0.2s;
        color: var(--text-muted);
    }
    .icon-button:hover {
        background: var(--btn-hover);
        color: #3e9b45;
    }
    .right-icons-container {
        display: flex;
        align-items: center;
        gap: 1px;
        flex-shrink: 0;
    }

    /* Cards */
    .right-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px 20px 0;
    }

    .cards-area {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 290px;
        max-height: 100vh;
        overflow-y: auto;
        justify-content: flex-start;
        padding-top: 40px;
        /* Hide scrollbar for cards */
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
    .amount {
        font-size: 42px;
        font-weight: 900;
        color: var(--brand-dark);
        line-height: 1;
        letter-spacing: -2px;
    }
    .period {
        font-size: 15px;
        font-weight: 700;
        color: var(--brand-dark);
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

    /* Mobile */
    /* Mobile */
    .mobile-header {
        display: none;
    }
    .mobile-cards-header {
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
            justify-content: space-between;
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
        .mobile-logo img {
            height: 24px;
            width: auto;
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

        /* Adjust Chat Area for Mobile Header */
        .messages-container {
            padding-top: 70px; /* Clear header */
        }

        /* Input Area Spacing */
        .input-area {
            padding: 12px;
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
            z-index: 2000;
            background: var(--bg);
            padding: 0;
            opacity: 1;
            /* Reset desktop styles if needed */
            justify-content: flex-start;
            align-items: stretch;
        }

        /* Mobile Cards Header inside Overlay */
        .mobile-cards-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid var(--border);
            background: var(--bg);
        }
        .mobile-cards-header h3 {
            margin: 0;
            font-size: 1.1rem;
        }
        .close-cards-btn {
            background: transparent;
            border: none;
            font-size: 1.5rem;
            color: var(--text);
            cursor: pointer;
            padding: 4px 12px;
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
