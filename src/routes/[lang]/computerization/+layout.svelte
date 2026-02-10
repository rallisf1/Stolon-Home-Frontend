<script lang="ts">  import type { LayoutProps } from './$types';
  let { data, children }: LayoutProps = $props();
  let menu = $derived(data.menu);
  let lang = $derived(data.lang);
  let footer = $derived(data.footer);
  import Footer from '$lib/symbols/computerization/Footer.svelte';
  import NavBar from '$lib/symbols/computerization/NavBar.svelte';
  import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<style>
#page {
  position: relative;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
}
#page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  animation: gridScroll 20s linear infinite;
}
#page :global { @keyframes gridScroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}}
:root {
  --color-bg: #0a0a0a;
  --color-bg-dark: #000000;
  --color-bg-card: rgba(20, 20, 20, 0.6);
  --color-text: #e0e0e0;
  --color-text-dim: #a0a0a0;
  --color-text-muted: #808080;
  --color-primary: #00ff88;
  --color-primary-dark: #00cc99;
  --color-border: rgba(0, 255, 136, 0.2);
  --color-border-hover: rgba(0, 255, 136, 0.5);
  --max-width: 1400px;
}
#page :global { .section-container {
  max-width: var(--max-width, 1400px);
  margin: 0 auto;
  padding: 3rem var(--padding, 1rem);
}}
#page :global { .cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}}
#page :global { .cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  transition: left 0.3s;
  z-index: -1;
}}
#page :global { .cta-button:hover::before {
  left: 0;
}}
#page :global { .cta-button:hover {
  color: var(--color-bg);
}}
</style>

<div id="page">
<NavBar {...menu} nav_logo={data.logos.dark}>
  {#snippet slot()}
    <LanguageSwitcher {lang} list={["el","en"]} />
  {/snippet}
</NavBar>


{@render children()}

<Footer {...footer} footer_logo={data.logos.dark} />

</div>