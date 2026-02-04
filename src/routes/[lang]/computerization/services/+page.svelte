<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Services_2_header = $derived(data.content.Services_2_header);
  let Services_2_items = $derived(data.content.Services_2_items);
  import Cursor from '$lib/symbols/computerization/Cursor.svelte';
  import Services from '$lib/symbols/computerization/Services.svelte';
  import Background from '$lib/symbols/computerization/Background.svelte';
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

<Background />
<Services header={Services_2_header} items={Services_2_items} />
<Cursor />
</div>