<script lang="ts">
    import { translations } from "$lib/translations";

    let { data } = $props();

    // Derive language from the URL parameter (data.lang will be 'el' or 'en' from parent layout)
    let language = $derived(data.lang === "el" ? "greek" : "english");
</script>

<div class="contact-page-container">
    <div class="contact-form-wrapper">
        <div class="logo-area">
            <h1>Get in Touch</h1>
        </div>
        <p class="subtitle">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
        </p>

        <form method="POST" action="/submit-contact">
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
            </div>

            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit">Send Message</button>
        </form>
    </div>
</div>

<style>
    .contact-page-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        min-height: 100%;
        box-sizing: border-box;
    }

    .contact-form-wrapper {
        background: var(--bg-soft);
        border: 2px solid var(--brand-dark);
        border-radius: 12px;
        padding: 3rem;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .logo-area {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    h1 {
        margin: 0 0 0.5rem 0;
        font-size: 2rem;
        color: var(--text);
        text-align: center;
    }

    .subtitle {
        margin: 0 0 2rem 0;
        color: var(--text-muted);
        font-size: 0.95rem;
        text-align: center;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--text);
        font-size: 0.9rem;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid rgba(62, 155, 69, 0.2);
        border-radius: 6px;
        font-family: inherit;
        font-size: 1rem;
        transition:
            border-color 0.3s,
            box-shadow 0.3s;
        box-sizing: border-box;
        background-color:var(--input-border);
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: rgb(62, 155, 69);
        box-shadow: 0 0 0 3px rgba(62, 155, 69, 0.1);
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    button {
        width: 100%;
        padding: 0.875rem;
        background-color: rgb(62, 155, 69);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            background-color 0.3s,
            transform 0.1s;
    }

    button:hover {
        background-color: rgb(52, 135, 59);
    }

    button:active {
        transform: scale(0.98);
    }

    @media (max-width: 480px) {
        .contact-page-container {
            padding: 1rem;
        }
        .contact-form-wrapper {
            padding: 1.5rem 1rem;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
</style>
