<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Services_2_title = $derived(data.content.Services_2_title);
  let Services_2_items = $derived(data.content.Services_2_items);
  let CTA_4_title2 = $derived(data.content.CTA_4_title2);
  let CTA_4_koumpi = $derived(data.content.CTA_4_koumpi);
  let CTA_4_parag6 = $derived(data.content.CTA_4_parag6);
  let CTA_4_parag7 = $derived(data.content.CTA_4_parag7);
  import CTA from '$lib/symbols/marketing/CTA.svelte';
  import Line from '$lib/symbols/marketing/Line.svelte';
  import Services from '$lib/symbols/marketing/Services.svelte';
  import FloatingCircles from '$lib/symbols/marketing/FloatingCircles.svelte';
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

<FloatingCircles />
<Services title={Services_2_title} items={Services_2_items} />
<Line />
<CTA title2={CTA_4_title2} koumpi={CTA_4_koumpi} parag6={CTA_4_parag6} parag7={CTA_4_parag7} />
<Line />
</div>