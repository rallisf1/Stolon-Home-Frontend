<script lang="ts">  import type { LayoutProps } from './$types';
  let { data, children }: LayoutProps = $props();
  let menu = $derived(data.menu);
  let lang = $derived(data.lang);
  let footer = $derived(data.footer);
  import Footer from '$lib/symbols/ai/Footer.svelte';
  import NavBar from '$lib/symbols/ai/NavBar.svelte';
  import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<style>
:root {
  /* ---------- Primary Brand Colors ---------- */
  --color-primary-1: #667eea;
  --color-primary-2: #764ba2;
  --color-primary-3: #f093fb;
  --color-primary-4: #4facfe;
  /* ---------- Background Colors ---------- */
  --color-bg-main: #0a0e27;
  --color-bg-dark: #1a1f3a;
  --color-bg-darker: #1a1f3a;
  --color-bg-card: rgba(26, 31, 58, 0.6);
  /* ---------- Text Colors ---------- */
  --color-text-main: #ffffff;
  --color-text-muted: #a0aec0;
  /* ---------- Borders & Lines ---------- */
  --color-border-light: rgba(124, 58, 237, 0.2);
  --color-border-primary: rgba(102, 126, 234, 0.5);
  /* ---------- Glows & Shadows ---------- */
  --color-glow-primary: rgba(102, 126, 234, 0.4);
  --color-glow-strong: rgba(102, 126, 234, 0.6);
  --color-glow-purple: rgba(118, 75, 162, 0.4);
  /* ---------- Gradients ---------- */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-primary-wide: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  --gradient-holo: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #4facfe);
  --gradient-btn-sweep: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  --gradient-connection: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
  --gradient-topbar: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
  /* ---------- Special FX Colors ---------- */
  --color-particle: rgba(124, 58, 237, 0.6);
  --color-glitch-red: #ff006e;
  --color-glitch-blue: #00f5ff;
  /* ---------- Button Colors ---------- */
  --btn-bg-quantum: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --btn-bg-liquid: linear-gradient(135deg, #667eea, #764ba2);
  --btn-bg-3d-shadow: linear-gradient(135deg, #4d5eb9 0%, #5a3a7a 100%);
  /* ---------- Transparency & Utility ---------- */
  --transparent-white-10: rgba(255, 255, 255, 0.1);
  --transparent-white-30: rgba(255, 255, 255, 0.3);
  --transparent-purple-20: rgba(102, 126, 234, 0.2);
  --transparent-purple-40: rgba(102, 126, 234, 0.4);
}
#page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #0a0e27;
  color: #ffffff;
  overflow-x: hidden;
}
#page :global { .section-container {
  max-width: var(--max-width, 1400px);
  margin: 0 auto;
  padding: 3rem var(--padding, 1rem);
}}
#page :global { .heading {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  margin: 0;
}}
#page :global { .button {
  color: white;
  background: var(--color-accent);
  border-radius: 5px;
  padding: 8px 20px;
  transition: var(--transition);
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
  &.inverted {
    background: transparent;
    color: var(--color-accent);
    border: 2px solid var(--color-accent);
  }
}}
</style>

<div id="page">
<NavBar {...menu}>
  {#snippet slot()}
    <LanguageSwitcher {lang} list={["el","en"]} />
  {/snippet}
</NavBar>


{@render children()}

<Footer {...footer} />

</div>