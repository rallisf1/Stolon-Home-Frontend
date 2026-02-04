<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let MainHero_1_repeater = $derived(data.content.MainHero_1_repeater);
  let MainHero_1_parag1 = $derived(data.content.MainHero_1_parag1);
  let MainHero_1_but = $derived(data.content.MainHero_1_but);
  let Services_4_title = $derived(data.content.Services_4_title);
  let Services_4_items = $derived(data.content.Services_4_items);
  let CaseStudies_6_head = $derived(data.content.CaseStudies_6_head);
  let CaseStudies_6_rep1 = $derived(data.content.CaseStudies_6_rep1);
  import CaseStudies from '$lib/symbols/marketing/CaseStudies.svelte';
  import Services from '$lib/symbols/marketing/Services.svelte';
  import Line from '$lib/symbols/marketing/Line.svelte';
  import Shapes from '$lib/symbols/marketing/Shapes.svelte';
  import MainHero from '$lib/symbols/marketing/MainHero.svelte';
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

<MainHero repeater={MainHero_1_repeater} parag1={MainHero_1_parag1} but={MainHero_1_but} />
<Shapes />
<Line />
<Services title={Services_4_title} items={Services_4_items} />
<Line />
<CaseStudies head={CaseStudies_6_head} rep1={CaseStudies_6_rep1} />
<Line />
</div>