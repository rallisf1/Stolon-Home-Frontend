<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Services_Card_1_title = $derived(data.content.Services_Card_1_title);
  let Services_Card_1_items = $derived(data.content.Services_Card_1_items);
  let Contact_Cta_4_header6 = $derived(data.content.Contact_Cta_4_header6);
  let Contact_Cta_4_text6 = $derived(data.content.Contact_Cta_4_text6);
  let Contact_Cta_4_button6 = $derived(data.content.Contact_Cta_4_button6);
  import Contact_Cta from '$lib/symbols/business/Contact_Cta.svelte';
  import Grid_Background from '$lib/symbols/business/Grid_Background.svelte';
  import Background from '$lib/symbols/business/Background.svelte';
  import Services_Card from '$lib/symbols/business/Services_Card.svelte';
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

<Services_Card title={Services_Card_1_title} items={Services_Card_1_items} />
<Background />
<Grid_Background />
<Contact_Cta header6={Contact_Cta_4_header6} text6={Contact_Cta_4_text6} button6={Contact_Cta_4_button6} />
</div>