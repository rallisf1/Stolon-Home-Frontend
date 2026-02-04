<script lang="ts">  import type { LayoutProps } from './$types';
  let { data, children }: LayoutProps = $props();
  let menu = $derived(data.menu);
  let lang = $derived(data.lang);
  let footer = $derived(data.footer);
  import Footer from '$lib/symbols/education/Footer.svelte';
  import Navbar from '$lib/symbols/education/Navbar.svelte';
  import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<style>
#page {
  font-family: 'Georgia', serif;
  color: var(--dark-text);
  line-height: 1.8;
  font-size: 1rem;
  background-color: var(--off-white);
}
:root {
  --beige: #E8DCC4;
  --sage: #9CAF88;
  --off-white: #F5F5F0;
  --soft-orange: #E8956B;
  --dark-text: #3A3A3A;
}
#page :global { .section-container {
  max-width: var(--max-width, 1450px);
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
<Navbar {...menu}>
  {#snippet slot()}
    <LanguageSwitcher {lang} list={["el","en"]} />
  {/snippet}
</Navbar>


{@render children()}

<Footer {...footer} />

</div>