<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Hero_1_title = $derived(data.content.Hero_1_title);
  let Hero_1_text = $derived(data.content.Hero_1_text);
  let Hero_1_cta_1 = $derived(data.content.Hero_1_cta_1);
  let Hero_1_cta_2 = $derived(data.content.Hero_1_cta_2);
  let Hero_1_header = $derived(data.content.Hero_1_header);
  let Services_3_services_title = $derived(data.content.Services_3_services_title);
  let Services_3_services_desc = $derived(data.content.Services_3_services_desc);
  let Services_3_node = $derived(data.content.Services_3_node);
  let Stats_4_philosophy_title = $derived(data.content.Stats_4_philosophy_title);
  let Stats_4_philosophy_desc = $derived(data.content.Stats_4_philosophy_desc);
  let Stats_4_philosophy_items = $derived(data.content.Stats_4_philosophy_items);
  let Cta_5_cta_title = $derived(data.content.Cta_5_cta_title);
  let Cta_5_cta_desc = $derived(data.content.Cta_5_cta_desc);
  let Cta_5_cta = $derived(data.content.Cta_5_cta);
  import Cta from '$lib/symbols/education/Cta.svelte';
  import Stats from '$lib/symbols/education/Stats.svelte';
  import Services from '$lib/symbols/education/Services.svelte';
  import Circles_Background from '$lib/symbols/education/Circles_Background.svelte';
  import Hero from '$lib/symbols/education/Hero.svelte';
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

<Hero title={Hero_1_title} text={Hero_1_text} cta_1={Hero_1_cta_1} cta_2={Hero_1_cta_2} header={Hero_1_header} />
<Circles_Background />
<Services services_title={Services_3_services_title} services_desc={Services_3_services_desc} node={Services_3_node} />
<Stats philosophy_title={Stats_4_philosophy_title} philosophy_desc={Stats_4_philosophy_desc} philosophy_items={Stats_4_philosophy_items} />
<Cta cta_title={Cta_5_cta_title} cta_desc={Cta_5_cta_desc} cta={Cta_5_cta} />
</div>