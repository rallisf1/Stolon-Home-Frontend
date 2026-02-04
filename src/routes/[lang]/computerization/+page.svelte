<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let HomeHero_1_title1 = $derived(data.content.HomeHero_1_title1);
  let HomeHero_1_description1 = $derived(data.content.HomeHero_1_description1);
  let HomeHero_1_cta = $derived(data.content.HomeHero_1_cta);
  let Services_2_header = $derived(data.content.Services_2_header);
  let Services_2_items = $derived(data.content.Services_2_items);
  let TheResult_3_h2 = $derived(data.content.TheResult_3_h2);
  let TheResult_3_par1 = $derived(data.content.TheResult_3_par1);
  let TheResult_3_par2 = $derived(data.content.TheResult_3_par2);
  let TheResult_3_repeater1 = $derived(data.content.TheResult_3_repeater1);
  let TheResult_3_btn = $derived(data.content.TheResult_3_btn);
  import Cursor from '$lib/symbols/computerization/Cursor.svelte';
  import TheResult from '$lib/symbols/computerization/TheResult.svelte';
  import Services from '$lib/symbols/computerization/Services.svelte';
  import HomeHero from '$lib/symbols/computerization/HomeHero.svelte';
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

<HomeHero title1={HomeHero_1_title1} description1={HomeHero_1_description1} cta={HomeHero_1_cta} />
<Services header={Services_2_header} items={Services_2_items} />
<TheResult h2={TheResult_3_h2} par1={TheResult_3_par1} par2={TheResult_3_par2} repeater1={TheResult_3_repeater1} btn={TheResult_3_btn} />
<Cursor />
</div>