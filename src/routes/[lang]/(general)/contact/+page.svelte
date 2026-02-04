<script lang="ts">
    import { goto } from "$app/navigation";
    import { previousUrl } from "$lib/stores";
    import { translations } from "$lib/constants";

    let { data } = $props();

    let language = $derived(data.lang);

    const goBack = () => {
        if($previousUrl === '') {
            goto(`/${language}`);
        } else {
            goto($previousUrl);
        }
    }
</script>

<div class="contact-page-container">
    <div class="contact-form-wrapper">
        <div class="logo-area">
            <h1>{translations[language].contact.logo_area}</h1>
        </div>
        <p class="subtitle">
            {translations[language].contact.subtitle}
        </p>

        <form method="POST" action="/submit-contact">
            <div class="form-group">
                <label for="name">{translations[language].contact.name}</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div class="form-group">
                <label for="email">{translations[language].contact.email}</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
                <label for="subject">{translations[language].contact.subject}</label>
                <input type="text" id="subject" name="subject" />
            </div>

            <div class="form-group">
                <label for="message">{translations[language].contact.message}</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit">Send Message</button>
        </form>
            <button onclick={goBack}>{$previousUrl === '' ? translations[language].general.go_home : translations[language].general.back}</button>
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
        background-color: var(--avatar-user);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            opacity 0.3s,
            transform 0.1s;
    }

    form + button {
        margin-top: 2rem;
    }

    button[type="submit"] {
        background-color: var(--brand-dark);
    }

    button:hover {
        opacity: 0.8;
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
