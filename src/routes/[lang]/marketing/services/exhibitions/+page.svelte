<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let ServiceHero_1_head1 = $derived(data.content.ServiceHero_1_head1);
  let ServiceHero_1_parag1 = $derived(data.content.ServiceHero_1_parag1);
  let ServiceHero_1_rep1 = $derived(data.content.ServiceHero_1_rep1);
  let ServiceHero_1_tag = $derived(data.content.ServiceHero_1_tag);
  let Section_3_rep3 = $derived(data.content.Section_3_rep3);
  let StatCard_5_rep4 = $derived(data.content.StatCard_5_rep4);
  let Cards_6_header = $derived(data.content.Cards_6_header);
  let Cards_6_rep5 = $derived(data.content.Cards_6_rep5);
  let Performance_7_title = $derived(data.content.Performance_7_title);
  let Performance_7_rep6 = $derived(data.content.Performance_7_rep6);
  let Performance_7_rep2 = $derived(data.content.Performance_7_rep2);
  let Why_8_title1 = $derived(data.content.Why_8_title1);
  let Why_8_rep7 = $derived(data.content.Why_8_rep7);
  let CTA_9_title2 = $derived(data.content.CTA_9_title2);
  let CTA_9_koumpi = $derived(data.content.CTA_9_koumpi);
  let CTA_9_parag6 = $derived(data.content.CTA_9_parag6);
  let CTA_9_parag7 = $derived(data.content.CTA_9_parag7);
  import CTA from '$lib/symbols/marketing/CTA.svelte';
  import Why from '$lib/symbols/marketing/Why.svelte';
  import Performance from '$lib/symbols/marketing/Performance.svelte';
  import Cards from '$lib/symbols/marketing/Cards.svelte';
  import StatCard from '$lib/symbols/marketing/StatCard.svelte';
  import Section from '$lib/symbols/marketing/Section.svelte';
  import Line from '$lib/symbols/marketing/Line.svelte';
  import ServiceHero from '$lib/symbols/marketing/ServiceHero.svelte';
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

<ServiceHero head1={ServiceHero_1_head1} parag1={ServiceHero_1_parag1} rep1={ServiceHero_1_rep1} tag={ServiceHero_1_tag} />
<Line />
<Section rep3={Section_3_rep3} />
<Line />
<StatCard rep4={StatCard_5_rep4} />
<Cards header={Cards_6_header} rep5={Cards_6_rep5} />
<Performance title={Performance_7_title} rep6={Performance_7_rep6} rep2={Performance_7_rep2} />
<Why title1={Why_8_title1} rep7={Why_8_rep7} />
<CTA title2={CTA_9_title2} koumpi={CTA_9_koumpi} parag6={CTA_9_parag6} parag7={CTA_9_parag7} />
<Line />
</div>