<script lang="ts">
    import { translations } from "$lib/translations";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    let { data = { lang: "en" }, children } = $props();

    let activeMenu = $state(false);
    let theme = $state("light");

    // Derive language from the URL parameter (data.lang will be 'el' or 'en')
    let language = $derived(data.lang === "el" ? "greek" : "english");

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        theme = newTheme;
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    $effect(() => {
        // Sync theme with localStorage
        const savedTheme = localStorage.getItem("theme") || "light";
        if (theme !== savedTheme) {
            theme = savedTheme;
            document.documentElement.setAttribute("data-theme", theme);
        }
    });

    function toggleLanguage() {
        // Navigate to the other language route
        const newLang = data.lang === "en" ? "el" : "en";
        const url = new URL(window.location.href);
        // Replace /en/ with /el/ or vice versa
        const newPath = `/${newLang}${url.pathname.substring(3)}`;
        goto(`${newPath}${url.search}`, { replaceState: false });
    }
</script>

<div class="layout-wrapper">
    <header class="top-nav">
        <div class="nav-controls">
            <button
                class="burger"
                onclick={() => (activeMenu = !activeMenu)}
                aria-label="Toggle menu"
            >
                {#if activeMenu}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586z"
                        />
                    </svg>
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                        />
                    </svg>
                {/if}
            </button>

            <div class="toggles-group">
                <button
                    class="theme-toggle"
                    onclick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {#if theme === "light"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
                            />
                        </svg>
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7t-.687.288t-.713-.288M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288M12 12"
                            />
                        </svg>
                    {/if}
                </button>

                <button
                    class="language-toggle"
                    onclick={toggleLanguage}
                    aria-label="Toggle language"
                >
                    {#if language === "english"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="27"
                            viewBox="0 0 32 24"
                        >
                            <g fill="none">
                                <path
                                    fill="#F7FCFF"
                                    fill-rule="evenodd"
                                    d="M0 0h32v24H0z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill="#4564F9"
                                    fill-rule="evenodd"
                                    d="M0 5.5h32v2.957H0zm0 5.315h32v2.957H0zm32 5.128H0V18.9h32zM0 0h32v3H0z"
                                    clip-rule="evenodd"
                                />
                                <path fill="#4564F9" d="M0 21h32v3H0z" />
                                <path
                                    fill="#4564F9"
                                    fill-rule="evenodd"
                                    d="M0 0h15v13.8H0z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill="#F7FCFF"
                                    fill-rule="evenodd"
                                    d="M6 0h3v5.504h6v2.935H9V14.5H6V8.439H0V5.504h6z"
                                    clip-rule="evenodd"
                                />
                            </g>
                        </svg>
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="27"
                            viewBox="0 0 32 24"
                        >
                            <g fill="none">
                                <path
                                    fill="#2E42A5"
                                    fill-rule="evenodd"
                                    d="M0 0v24h32V0z"
                                    clip-rule="evenodd"
                                />
                                <mask
                                    id="SVGTrazyc7b"
                                    width="32"
                                    height="24"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                    style="mask-type:luminance"
                                >
                                    <path
                                        fill="#fff"
                                        fill-rule="evenodd"
                                        d="M0 0v24h32V0z"
                                        clip-rule="evenodd"
                                    />
                                </mask>
                                <g mask="url(#SVGTrazyc7b)">
                                    <path
                                        fill="#fff"
                                        d="m-3.563 22.285l7.042 2.979l28.68-22.026l3.715-4.426l-7.53-.995l-11.698 9.491l-9.416 6.396z"
                                    />
                                    <path
                                        fill="#F50100"
                                        d="M-2.6 24.372L.989 26.1L34.54-1.599h-5.037z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="m35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426l7.53-.995l11.698 9.491l9.416 6.396z"
                                    />
                                    <path
                                        fill="#F50100"
                                        d="m35.323 23.783l-3.588 1.728l-14.286-11.86l-4.236-1.324l-17.445-13.5H.806l17.434 13.18l4.631 1.588z"
                                    />
                                    <mask id="SVGOYc5edRg" fill="#fff">
                                        <path
                                            fill-rule="evenodd"
                                            d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z"
                                            clip-rule="evenodd"
                                        />
                                    </mask>
                                    <path
                                        fill="#F50100"
                                        fill-rule="evenodd"
                                        d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M12.222-2v-2h-2v2zm7.556 0h2v-2h-2zM12.222 8v2h2V8zM-1.972 8V6h-2v2zm0 8h-2v2h2zm14.194 0h2v-2h-2zm0 10h-2v2h2zm7.556 0v2h2v-2zm0-10v-2h-2v2zm14.25 0v2h2v-2zm0-8h2V6h-2zm-14.25 0h-2v2h2zm-7.556-8h7.556v-4h-7.556zm2 8V-2h-4V8zm-16.194 2h14.194V6H-1.972zm2 6V8h-4v8zm12.194-2H-1.972v4h14.194zm2 12V16h-4v10zm5.556-2h-7.556v4h7.556zm-2-8v10h4V16zm16.25-2h-14.25v4h14.25zm-2-6v8h4V8zm-12.25 2h14.25V6h-14.25zm-2-12V8h4V-2z"
                                        mask="url(#SVGOYc5edRg)"
                                    />
                                </g>
                            </g>
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </header>

    <div class="drawer">
        <aside class="sidebar" class:active={activeMenu}>
            <ul class="menu">
                <li>
                    <a
                        href="/{data.lang}/"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                />
                            </svg>
                            Home
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="/{data.lang}/ai"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none">
                                    <path
                                        d="M2 8.5L12 2l10 6.5l-4 2.6l-6 3.9l-6-3.9z"
                                    />
                                    <path
                                        d="M6 17.5v-6.4l6 3.9l6-3.9v6.4c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5"
                                    />
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="square"
                                        stroke-width="2"
                                        d="M21 9.15V15M6 11.1v6.4c0 1.933 2.686 3.5 6 3.5s6-1.567 6-3.5v-6.4L12 15zM12 2L2 8.5L12 15l10-6.5z"
                                    />
                                </g>
                            </svg>
                            {translations[language]?.sidebar?.edu}
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="/{data.lang}/marketing"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M9 17s7 1 10 4h1a1 1 0 0 0 1-1v-6.063a2 2 0 0 0 0-3.874V4a1 1 0 0 0-1-1h-1C16 6 9 7 9 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1l1 5h2zm2-8.339c.683-.146 1.527-.35 2.44-.617c1.678-.494 3.81-1.271 5.56-2.47v12.851c-1.75-1.198-3.883-1.975-5.56-2.469A34 34 0 0 0 11 15.34zM5 9h4v6H5z"
                                />
                            </svg>
                            {translations[language]?.sidebar?.marketing}
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="/{data.lang}/business"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                >
                                    <path
                                        d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"
                                    />
                                    <rect
                                        width="20"
                                        height="14"
                                        x="2"
                                        y="6"
                                        rx="2"
                                    />
                                </g>
                            </svg>
                            {translations[language]?.sidebar?.business}
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="/{data.lang}/computerization"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M1 20q-.425 0-.712-.288T0 19t.288-.712T1 18h1V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v13h1q.425 0 .713.288T24 19t-.288.713T23 20zm9.5-2h3q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15h-3q-.2 0-.35.15t-.15.35t.15.35t.35.15M4 15h16V5H4zm8-5"
                                />
                            </svg>
                            {translations[language]?.sidebar?.computerization}
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="/{data.lang}/ai"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 3h-2v3H5v-3H3v-1h2v-2c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5v2h2zM8.5 13.5l2.36 2.36l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18 1.18zm7 0l2.36 2.36l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18z"
                                />
                            </svg>
                            {translations[language]?.sidebar?.ai}
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="/{data.lang}/blog"
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M7 14.94l6.06-6.06l2.06 2.06L9.06 17H7z"
                                />
                            </svg>
                            {translations[language]?.sidebar?.blog}
                        </div>
                    </a>
                </li>
            </ul>
        </aside>
    </div>

    <div class="logo-wrapper" class:active={activeMenu}>
        {#if theme === "light"}
            <img
                src="/StolonLogo.png"
                alt={translations[language].chat.logo_alt}
                style="width: 120px; height: auto;"
            />
        {:else}
            <img
                src="/StolonDark.png"
                alt={translations[language].chat.logo_dark_alt}
                style="width: 120px; height: auto;"
            />
        {/if}
    </div>

    <main class="page-content">
        {@render children()}
    </main>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: var(--bg);
        color: var(--text);
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

    .layout-wrapper {
        display: grid;
        grid-template-columns: 280px 1fr;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
    }

    .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        z-index: 1001;
        background: var(--nav-bg);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        border-bottom: 1px solid var(--border);
    }

    .nav-controls {
        display: flex;
        align-items: center;
        gap: 15px;
        width: 100%;
    }

    .toggles-group {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: auto;
    }

    .burger,
    .theme-toggle,
    .language-toggle {
        background: var(--btn-bg);
        color: var(--text);
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    }

    .burger:hover,
    .theme-toggle:hover,
    .language-toggle:hover {
        background: var(--btn-hover);
        border-color: var(--brand);
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: -320px;
        width: 280px;
        height: 100%;
        background: var(--sidebar-bg);
        color: var(--text);
        padding: 80px 20px 20px;
        transition: left 0.35s ease;
        z-index: 1000;
        border-right: 1px solid var(--border);
    }

    .active {
        left: 0;
    }

    .menu {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 4rem;
        margin: 0;
    }

    .menu li {
        padding: 0;
        border-radius: 8px;
        cursor: pointer;
        color: var(--text);
        font-weight: 450;
        transition: all 0.2s;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border: 1px solid var(--border);
        border-radius: 8px;
        transition: all 0.2s;
    }

    .menu li:hover .menu-item {
        background: var(--btn-hover);
        color: var(--brand);
        border-color: var(--brand);
    }

    .menu-link {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .logo-wrapper {
        position: fixed;
        top: 90px;
        left: 100px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition:
            left 0.3s,
            top 0.3s;
        z-index: 1002;
    }

    .logo-wrapper.active {
        left: 320px;
    }

    .logo-wrapper img {
        width: 120px;
        height: auto;
    }

    .page-content {
        grid-column: 2;
        padding-top: 70px;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        .layout-wrapper {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }
        .sidebar {
            width: 80vw;
            padding-top: 70px;
            left: -100%;
        }
        .sidebar.active {
            left: 0;
        }
        .logo-wrapper {
            display: none;
        }
        .page-content {
            flex: 1;
            padding-top: 60px;
        }
    }
</style>
