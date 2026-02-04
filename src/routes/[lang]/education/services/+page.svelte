<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Services_1_services_title = $derived(data.content.Services_1_services_title);
  let Services_1_services_desc = $derived(data.content.Services_1_services_desc);
  let Services_1_node = $derived(data.content.Services_1_node);
  let Cta_2_cta_title = $derived(data.content.Cta_2_cta_title);
  let Cta_2_cta_desc = $derived(data.content.Cta_2_cta_desc);
  let Cta_2_cta = $derived(data.content.Cta_2_cta);
  import Circles_Background from '$lib/symbols/education/Circles_Background.svelte';
  import Cta from '$lib/symbols/education/Cta.svelte';
  import Services from '$lib/symbols/education/Services.svelte';
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

<Services services_title={Services_1_services_title} services_desc={Services_1_services_desc} node={Services_1_node} />
<Cta cta_title={Cta_2_cta_title} cta_desc={Cta_2_cta_desc} cta={Cta_2_cta} />
<Circles_Background />
</div>