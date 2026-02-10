<script lang="ts">
    import { page } from "$app/state";
    import { languages } from "$lib/constants";
    import Icon from "@iconify/svelte";
    import ChatArea from "$lib/ChatArea.svelte";

    let { data, children } = $props();

    // State
    let activeMenu = $state(false);
    let theme = $state("light");

    // Derived
    let language = $derived(data.lang);
    let translations = $derived((data as any).translations);
    const activeLanguages = languages.filter(l => Object.keys(translations).includes(l.key));
    
    let nextLanguage = $derived(activeLanguages.find(l => l.key != data.lang));
    let nextLanguageUrl = $derived.by(() => {
        if (!nextLanguage) return "#";
        const parts = page.url.pathname.split('/').filter(Boolean);
        parts.shift();
        parts.unshift(nextLanguage.key);
        return "/" + parts.join('/');
    });
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

    let chatView = $derived(page.route.id === "/[lang]/(general)" ? "full" : "floating");
    // Translations and chat service are already in layout's data or provided by sub-pages.
    // However, chatService is currently created in +page.ts for the home page.
    // I should move it to +layout.ts if I want it globally available.
    // Let's check if +layout.ts exists or create it.
</script>

<div class="layout-wrapper">
    <!-- Floating Burger Button -->
    <button
        class="burger-float"
        onclick={() => activeMenu = !activeMenu}
        aria-label="Toggle menu"
    >
        <Icon
            icon={activeMenu ? "ci:close-md" : "ci:hamburger-md"}
            width="32"
            height="32"
        />
    </button>
    
    <img class="logo-float" src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"} alt={translations[language].general.name} />

    <!-- Drawer / Sidebar -->
    <div class="drawer">
        <aside class="sidebar" class:active={activeMenu}>
            <ul class="menu">
                {#each menuItems as item}
                <li>
                    <a
                        href={item.nav_link.url}
                        class="menu-link"
                        onclick={() => (activeMenu = false)}
                    >
                        <div class="menu-item">
                            {#if item.nav_link.icon}
                                <Icon
                                    icon={item.nav_link.icon}
                                    width="24"
                                    height="24"
                                />
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
                    aria-label={translations[language].sidebar[`theme_${theme}`]}
                    title={translations[language].sidebar[`theme_${theme}`]}
                >
                    <Icon
                        icon={theme === "light" ? "material-symbols:moon-stars-outline" : "material-symbols:sunny-outline"}
                        width="24"
                        height="24"
                    />
                </button>

                <a href={nextLanguageUrl}
                    class="language-toggle"
                    aria-label={nextLanguage?.name}
                    title={nextLanguage?.name}
                >
                    <Icon icon={`circle-flags:${nextLanguage?.key}`} width="24" height="24" />
                </a>
            </div>
        </aside>
    </div>

    <!-- Main Content -->
    <main class="page-content">
        {@render children()}

        {#if page.route.id !== "/[lang]/(general)"}
            <footer class="simple-footer">
                <p>&copy; {footerCopyright}</p>
            </footer>
        {/if}

        {#if chatView === "floating"}
            <ChatArea 
                floating={true}
                chatService={data.chatService}
                translations={translations}
                lang={language}
                info={translations[language].chat.ai_name}
                button_title={translations[language].chat.new_chat}
                place_holder={translations[language].chat.placeholder}
            />
        {/if}
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
        height: 100dvh;
    }

    .layout-wrapper {
        position: relative;
        height: 100vh;
        height: 100dvh;
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

    .logo-float {
        position: fixed;
        top: 20px;
        left: 90px;
        z-index: 2000;
        height: 48px;
        width: auto;
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
    @media (max-width: 640px) {
        .burger-float {
            padding: 5px;
            top: 10px;
            left: 10px;
        }
        .burger-float :global(svg) {
            width: 24px;
            height: 24px;
        }
        .logo-float {
            top: 10px;
            left: 60px;
            height: 38px;
        }
    }
</style>
