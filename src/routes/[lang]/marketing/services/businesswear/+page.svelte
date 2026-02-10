<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let ServiceHero_2_head1 = $derived(data.content.ServiceHero_2_head1);
  let ServiceHero_2_parag1 = $derived(data.content.ServiceHero_2_parag1);
  let ServiceHero_2_rep1 = $derived(data.content.ServiceHero_2_rep1);
  let ServiceHero_2_tag = $derived(data.content.ServiceHero_2_tag);
  let Section_5_rep3 = $derived(data.content.Section_5_rep3);
  let StatCard_7_rep4 = $derived(data.content.StatCard_7_rep4);
  let Cards_8_header = $derived(data.content.Cards_8_header);
  let Cards_8_rep5 = $derived(data.content.Cards_8_rep5);
  let Performance_9_title = $derived(data.content.Performance_9_title);
  let Performance_9_rep6 = $derived(data.content.Performance_9_rep6);
  let Performance_9_rep2 = $derived(data.content.Performance_9_rep2);
  let Why_10_title1 = $derived(data.content.Why_10_title1);
  let Why_10_rep7 = $derived(data.content.Why_10_rep7);
  let CTA_11_title2 = $derived(data.content.CTA_11_title2);
  let CTA_11_koumpi = $derived(data.content.CTA_11_koumpi);
  let CTA_11_parag6 = $derived(data.content.CTA_11_parag6);
  let CTA_11_parag7 = $derived(data.content.CTA_11_parag7);
  import CTA from '$lib/symbols/marketing/CTA.svelte';
  import Why from '$lib/symbols/marketing/Why.svelte';
  import Performance from '$lib/symbols/marketing/Performance.svelte';
  import Cards from '$lib/symbols/marketing/Cards.svelte';
  import StatCard from '$lib/symbols/marketing/StatCard.svelte';
  import Section from '$lib/symbols/marketing/Section.svelte';
  import Line from '$lib/symbols/marketing/Line.svelte';
  import Shapes from '$lib/symbols/marketing/Shapes.svelte';
  import ServiceHero from '$lib/symbols/marketing/ServiceHero.svelte';
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
<ServiceHero head1={ServiceHero_2_head1} parag1={ServiceHero_2_parag1} rep1={ServiceHero_2_rep1} tag={ServiceHero_2_tag} />
<Shapes />
<Line />
<Section rep3={Section_5_rep3} />
<Line />
<StatCard rep4={StatCard_7_rep4} />
<Cards header={Cards_8_header} rep5={Cards_8_rep5} />
<Performance title={Performance_9_title} rep6={Performance_9_rep6} rep2={Performance_9_rep2} />
<Why title1={Why_10_title1} rep7={Why_10_rep7} />
<CTA title2={CTA_11_title2} koumpi={CTA_11_koumpi} parag6={CTA_11_parag6} parag7={CTA_11_parag7} />
</div>