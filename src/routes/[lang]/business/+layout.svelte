<script lang="ts">  import type { LayoutProps } from './$types';
  let { data, children }: LayoutProps = $props();
  let favicon = $derived(data.content.favicon);
  let menu = $derived(data.menu);
  let lang = $derived(data.lang);
  let footer = $derived(data.footer);
  import Footer from '$lib/symbols/business/Footer.svelte';
  import NavBar from '$lib/symbols/business/NavBar.svelte';
  import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<style>
:root {
  --midnight: #0a1628;
  --navy: #1a2f4f;
  --silver: #c0c0c0;
  --steel: #8b9dc3;
  --accent: #6495ed;
  --accent-bright: #4169e1;
  --white: #ffffff;
  --max-width: 1400px;
  --padding: 1rem;
}
#page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--midnight);
  color: var(--white);
  overflow-x: hidden;
}
#page :global { .section-container {
  max-width: var(--max-width, 1400px);
  margin: 0 auto;
  padding: 3rem var(--padding, 1rem);
}}
#page :global { a.link {
  line-height: 1.3;
  border-bottom: 2px solid var(--color-accent);
  transform: translateY(-2px);
  /* move link back into place */
  transition: var(--transition, 0.1s border);
  &:hover {
    border-color: transparent;
  }
}}
#page :global { .heading {
  font-size: clamp(2rem, 10vw, 3rem);
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.15rem;
}}
#page :global { .button {
  color: white;
  background: var(--color-accent, rebeccapurple);
  border-radius: 0;
  padding: 1px 24px;
  transition: var(--transition, 0.1s box-shadow);
  border: 0;
  /* reset */
  border-radius: 0.25rem;
  font-size: 1rem;
  &:hover {
    box-shadow: 0 0 0 2px var(--color-accent, rebeccapurple);
  }
  &.inverted {
    background: transparent;
    color: var(--color-accent, rebeccapurple);
  }
}}
#page :global { @media (max-width: 768px) {
  .logo {
    font-size: 2.5rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
  .process-line {
    display: none;
  }
  .process-step {
    flex-direction: column;
  }
  .cta-title {
    font-size: 2rem;
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