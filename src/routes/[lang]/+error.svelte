<script lang="ts">
    import { page } from '$app/stores';
    import { previousUrl } from '$lib/stores';
    import { goto } from '$app/navigation';

    let status = $derived($page.status);
    let message = $derived($page.error?.message || 'Page not found');
    
    async function goBack() {
        if ($previousUrl) {
            await goto($previousUrl);
        } else {
            await goto('/');
        }
    }
</script>

<div class="error-container">
    <div class="content">
        <div class="glitch-wrapper">
            <h1 class="glitch" data-glitch={status}>{status}</h1>
        </div>
        <p class="message">{message}</p>
        <p class="sub-message">
            The link you followed might be broken, or the page may have been removed.
        </p>
        <div class="actions">
            <button onclick={goBack} class="btn-primary">
                <span class="icon">←</span> Go Back
            </button>
            <a href="/" class="btn-secondary">
                Home Page
            </a>
        </div>
    </div>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        padding: 2rem;
        text-align: center;
        position: relative;
    }

    .content {
        max-width: 600px;
        width: 100%;
        padding: 3rem;
        transition: transform 0.3s ease;
    }

    .glitch-wrapper {
        position: relative;
        margin-bottom: 1rem;
    }

    h1.glitch {
        font-size: clamp(6rem, 15vw, 10rem);
        font-weight: 900;
        margin: 0;
        line-height: 1;
        background: linear-gradient(135deg, var(--brand), var(--brand-dark));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        display: inline-block;
    }

    /* Subtle glitch animation for premium feel */
    h1.glitch::before,
    h1.glitch::after {
        content: attr(data-glitch);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        z-index: -1;
    }

    h1.glitch::before {
        color: var(--brand);
        animation: glitch-anim 3s infinite linear alternate-reverse;
    }

    h1.glitch::after {
        color: #ff4d4d;
        animation: glitch-anim2 2s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }

    @keyframes glitch-anim2 {
        0% { transform: translate(0); }
        20% { transform: translate(2px, -2px); }
        40% { transform: translate(2px, 2px); }
        60% { transform: translate(-2px, -2px); }
        80% { transform: translate(-2px, 2px); }
        100% { transform: translate(0); }
    }

    .message {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text);
        margin: 0;
        letter-spacing: -0.02em;
    }

    .sub-message {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin: 1rem 0 3rem;
        line-height: 1.6;
    }

    .actions {
        display: flex;
        gap: 1.25rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-primary {
        background: var(--brand);
        color: white;
        border: none;
        padding: 1rem 2.5rem;
        border-radius: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 10px 15px -3px var(--brand-glow), 0 4px 6px -2px var(--brand-glow);
    }

    .btn-primary:hover {
        background: var(--brand-dark);
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px var(--brand-glow), 0 10px 10px -5px var(--brand-glow);
    }

    .btn-primary:active {
        transform: translateY(-1px);
    }

    .btn-secondary {
        background: var(--bg-muted);
        color: var(--text);
        text-decoration: none;
        padding: 1rem 2.5rem;
        border-radius: 1rem;
        font-weight: 700;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid var(--border);
    }

    .btn-secondary:hover {
        background: var(--btn-hover);
        transform: translateY(-4px);
        border-color: var(--brand);
    }

    .btn-secondary:active {
        transform: translateY(-1px);
    }

    .icon {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }

    .btn-primary:hover .icon {
        transform: translateX(-4px);
    }

    @media (max-width: 640px) {
        .content {
            padding: 1.5rem;
        }
        .actions {
            flex-direction: column;
        }
        .btn-primary, .btn-secondary {
            width: 100%;
        }
    }
</style>
