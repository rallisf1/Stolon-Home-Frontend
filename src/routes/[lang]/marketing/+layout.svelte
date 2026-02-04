<script lang="ts">  import type { LayoutProps } from './$types';
  let { data, children }: LayoutProps = $props();
  let menu = $derived(data.menu);
  let lang = $derived(data.lang);
  let footer = $derived(data.footer);
  import Footer from '$lib/symbols/marketing/Footer.svelte';
  import Navbar from '$lib/symbols/marketing/Navbar.svelte';
  import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<style>
:root {
  --primary-orange: #FF6B35;
  --primary-purple: #9D4EDD;
  --primary-teal: #06D6A0;
  --secondary-orange: #F7931E;
  --secondary-purple: #C77DFF;
  --secondary-teal: #0B7A75;
  --accent-yellow: #FCA311;
  --bg-dark: #0a0a0a;
  --bg-card: #1a1a1a;
  --bg-card-darker: #0f0f0f;
  --text-white: #ffffff;
  --text-gray: #b0b0b0;
  --border-subtle: rgba(255, 255, 255, 0.05);
}
#page {
  font-family: 'Space Grotesk', sans-serif;
  background: var(--bg-dark);
  color: var(--text-white);
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
#page :global { .section-header {
  text-align: center;
  margin-bottom: 4rem;
}}
#page :global { .section-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-white), var(--text-gray));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}}
#page :global { .section-header .accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-orange), var(--primary-purple), var(--primary-teal));
  margin: 1rem auto;
  border-radius: 2px;
}}
</style>

<div id="page">
<Navbar {...menu}>
  {#snippet slot()}
    <LanguageSwitcher {lang} list={["el","en"]} />
  {/snippet}
</Navbar>


{@render children()}

<Footer {...footer} />

</div>