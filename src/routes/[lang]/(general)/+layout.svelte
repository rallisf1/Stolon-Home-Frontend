<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { translations } from "$lib/translations";
    import Icon from '@iconify/svelte';

    let { data, children } = $props();

    // State
    let activeMenu = $state(false);
    let theme = $state("light");

    // Derived
    let language = $derived(data.lang === "el" ? "greek" : "english");
    let menuItems = $derived(data.menu?.nav_items || []);
    let footerCopyright = $derived(data.footer?.copyright || "");

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        theme = newTheme;
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    $effect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (theme !== savedTheme) {
            theme = savedTheme;
            document.documentElement.setAttribute("data-theme", theme);
        }
    });

    function toggleLanguage() {
        const newLang = data.lang === "en" ? "el" : "en";
        const url = new URL(window.location.href);
        // Basic replacement logic; for robust path handling we might need more
        // but since we are preserving structure, this usually works:
        const currentPath = url.pathname;
        let newPath = currentPath;
        if (currentPath.startsWith("/en")) {
            newPath = currentPath.replace("/en", "/el");
        } else if (currentPath.startsWith("/el")) {
            newPath = currentPath.replace("/el", "/en");
        }
        goto(`${newPath}${url.search}`, { replaceState: false });
    }
</script>

<div class="layout-wrapper">
    <!-- Floating Burger Button -->
    <button
        class="burger-float"
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

    <!-- Drawer / Sidebar -->
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
                            <!-- Home Icon -->
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                ><path
                                    fill="currentColor"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                /></svg
                            >
                            {translations[language]?.sidebar?.home || "Home"}
                        </div>
                    </a>
                </li>

                {#each menuItems as item}
                    <li>
                        <a
                            href={item.nav_link.url}
                            class="menu-link"
                            onclick={() => (activeMenu = false)}
                        >
                            <div class="menu-item">
                                {#if item.nav_link.icon}
                                    <Icon icon={item.nav_link.icon} width="24" height="24" class="menu-icon" />
                                {/if}
                                {item.nav_link.label}
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>

            <div class="drawer-footer">
                <button
                    class="theme-toggle"
                    onclick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {#if theme === "light"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
                            /></svg
                        >
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7t-.687.288t-.713-.288M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288M12 12"
                            /></svg
                        >
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
                            width="28"
                            height="21"
                            viewBox="0 0 32 24"
                            ><g fill="none"
                                ><path
                                    fill="#F7FCFF"
                                    fill-rule="evenodd"
                                    d="M0 0h32v24H0z"
                                    clip-rule="evenodd"
                                /><path
                                    fill="#4564F9"
                                    fill-rule="evenodd"
                                    d="M0 5.5h32v2.957H0zm0 5.315h32v2.957H0zm32 5.128H0V18.9h32zM0 0h32v3H0z"
                                    clip-rule="evenodd"
                                /><path fill="#4564F9" d="M0 21h32v3H0z" /><path
                                    fill="#4564F9"
                                    fill-rule="evenodd"
                                    d="M0 0h15v13.8H0z"
                                    clip-rule="evenodd"
                                /><path
                                    fill="#F7FCFF"
                                    fill-rule="evenodd"
                                    d="M6 0h3v5.504h6v2.935H9V14.5H6V8.439H0V5.504h6z"
                                    clip-rule="evenodd"
                                /></g
                            ></svg
                        >
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="21"
                            viewBox="0 0 32 24"
                            ><g fill="none"
                                ><path
                                    fill="#2E42A5"
                                    fill-rule="evenodd"
                                    d="M0 0v24h32V0z"
                                    clip-rule="evenodd"
                                /><mask
                                    id="SVGTrazyc7b"
                                    width="32"
                                    height="24"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                    style="mask-type:luminance"
                                    ><path
                                        fill="#fff"
                                        fill-rule="evenodd"
                                        d="M0 0v24h32V0z"
                                        clip-rule="evenodd"
                                    /></mask
                                ><g mask="url(#SVGTrazyc7b)"
                                    ><path
                                        fill="#fff"
                                        d="m-3.563 22.285l7.042 2.979l28.68-22.026l3.715-4.426l-7.53-.995l-11.698 9.491l-9.416 6.396z"
                                    /><path
                                        fill="#F50100"
                                        d="M-2.6 24.372L.989 26.1L34.54-1.599h-5.037z"
                                    /><path
                                        fill="#fff"
                                        d="m35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426l7.53-.995l11.698 9.491l9.416 6.396z"
                                    /><path
                                        fill="#F50100"
                                        d="m35.323 23.783l-3.588 1.728l-14.286-11.86l-4.236-1.324l-17.445-13.5H.806l17.434 13.18l4.631 1.588z"
                                    /><mask id="SVGOYc5edRg" fill="#fff"
                                        ><path
                                            fill-rule="evenodd"
                                            d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z"
                                            clip-rule="evenodd"
                                        /></mask
                                    ><path
                                        fill="#F50100"
                                        fill-rule="evenodd"
                                        d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z"
                                        clip-rule="evenodd"
                                    /><path
                                        fill="#fff"
                                        d="M12.222-2v-2h-2v2zm7.556 0h2v-2h-2zM12.222 8v2h2V8zM-1.972 8V6h-2v2zm0 8h-2v2h2zm14.194 0h2v-2h-2zm0 10h-2v2h2zm7.556 0v2h2v-2zm0-10v-2h-2v2zm14.25 0v2h2v-2zm0-8h2V6h-2zm-14.25 0h-2v2h2zm-7.556-8h7.556v-4h-7.556zm2 8V-2h-4V8zm-16.194 2h14.194V6H-1.972zm2 6V8h-4v8zm12.194-2H-1.972v4h14.194zm2 12V16h-4v10zm5.556-2h-7.556v4h7.556zm-2-8v10h4V16zm16.25-2h-14.25v4h14.25zm-2-6v8h4V8zm-12.25 2h14.25V6h-14.25zm-2-12V8h4V-2z"
                                        mask="url(#SVGOYc5edRg)"
                                    /></g
                                ></g
                            ></svg
                        >
                    {/if}
                </button>
            </div>
        </aside>
    </div>

    <!-- Main Content -->
    <main class="page-content">
        {@render children()}

        <!-- Simplified Footer -->
        <footer class="simple-footer">
            <p>{footerCopyright}</p>
        </footer>
    </main>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: var(--bg);
        color: var(--text);
        height: 100vh;
    }

    .layout-wrapper {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    /* Main Content */
    .page-content {
        flex: 1;
        width: 100%;
        box-sizing: border-box;
        padding-top: 0;
        display: flex;
        flex-direction: column;
    }

    /* Floating Burger */
    .burger-float {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 2000;
        background: var(--btn-bg);
        color: var(--text);
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.2s;
    }

    .burger-float:hover {
        transform: scale(1.1);
        background: var(--btn-hover);
        border-color: var(--brand);
    }

    /* Sidebar/Drawer */
    .sidebar {
        position: fixed;
        top: 0;
        left: -320px;
        width: 280px;
        height: 100%;
        background: var(--sidebar-bg);
        color: var(--text);
        padding: 80px 20px 20px; /* Space for burger */
        transition: left 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1500;
        border-right: 1px solid var(--border);
        display: flex;
        flex-direction: column;
    }

    .sidebar.active {
        left: 0;
        box-shadow: 2px 0 20px rgba(0, 0, 0, 0.2);
    }

    .menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1; /* Push footer down */
        overflow-y: auto;
    }

    .menu-link {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 8px;
        transition: all 0.2s;
        font-weight: 500;
        border: 1px solid transparent;
    }

    .menu-icon {
        display: inline-flex;
        width: 24px;
        height: 24px;
        color: currentColor;
        flex-shrink: 0;
    }

    .menu-item:hover {
        background: var(--btn-hover);
        color: var(--brand);
        border-color: var(--border);
    }

    .drawer-footer {
        margin-top: auto;
        padding-top: 20px;
        border-top: 1px solid var(--border);
        display: flex;
        gap: 15px;
        justify-content: center;
    }

    .theme-toggle,
    .language-toggle {
        background: var(--btn-bg);
        color: var(--text);
        padding: 10px;
        border-radius: 12px;
        cursor: pointer;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }

    .theme-toggle:hover,
    .language-toggle:hover {
        transform: translateY(-2px);
        background: var(--btn-hover);
        border-color: var(--brand);
    }

    /* Main Content */
    .page-content {
        flex: 1;
        width: 100%;
        box-sizing: border-box;
        padding-top: 0; /* No top bar */
        overflow-y: auto; /* Enable scroll for standard pages */
        overflow-x: hidden;
    }

    /* Footer */
    .simple-footer {
        padding: 20px;
        text-align: center;
        opacity: 0.6;
        font-size: 0.9rem;
        margin-top: 40px;
        border-top: 1px solid var(--border);
    }

    /* Responsive */
    @media (min-width: 1024px) {
        /* Optional: layout shifts if needed, but requirements said "Drawer" so keeping it simple */
    }
</style>
