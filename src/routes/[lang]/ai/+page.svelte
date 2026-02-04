<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Hero_1_h1 = $derived(data.content.Hero_1_h1);
  let Hero_1_description = $derived(data.content.Hero_1_description);
  let Hero_1_reps = $derived(data.content.Hero_1_reps);
  let Cards_2_header = $derived(data.content.Cards_2_header);
  let Cards_2_cards = $derived(data.content.Cards_2_cards);
  let Cta_3_repeater = $derived(data.content.Cta_3_repeater);
  let Cta_3_h2 = $derived(data.content.Cta_3_h2);
  let Cta_3_desc = $derived(data.content.Cta_3_desc);
  import Cta from '$lib/symbols/ai/Cta.svelte';
  import Cards from '$lib/symbols/ai/Cards.svelte';
  import Hero from '$lib/symbols/ai/Hero.svelte';
</script>

<svelte:head>
<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
</svelte:head>

<div id="inner">

<Hero h1={Hero_1_h1} description={Hero_1_description} reps={Hero_1_reps} />
<Cards header={Cards_2_header} cards={Cards_2_cards} />
<Cta repeater={Cta_3_repeater} h2={Cta_3_h2} desc={Cta_3_desc} />
</div>