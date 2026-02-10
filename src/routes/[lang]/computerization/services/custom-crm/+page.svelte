<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let ServicesHero_1_hero_title = $derived(data.content.ServicesHero_1_hero_title);
  let ServicesHero_1_parag = $derived(data.content.ServicesHero_1_parag);
  let ServicesHero_1_icon = $derived(data.content.ServicesHero_1_icon);
  let Intro_2_rep = $derived(data.content.Intro_2_rep);
  let Content_3_rep1 = $derived(data.content.Content_3_rep1);
  let TheResult_4_h2 = $derived(data.content.TheResult_4_h2);
  let TheResult_4_par1 = $derived(data.content.TheResult_4_par1);
  let TheResult_4_par2 = $derived(data.content.TheResult_4_par2);
  let TheResult_4_repeater1 = $derived(data.content.TheResult_4_repeater1);
  let TheResult_4_btn = $derived(data.content.TheResult_4_btn);
  import Cursor from '$lib/symbols/computerization/Cursor.svelte';
  import TheResult from '$lib/symbols/computerization/TheResult.svelte';
  import Content from '$lib/symbols/computerization/Content.svelte';
  import Intro from '$lib/symbols/computerization/Intro.svelte';
  import ServicesHero from '$lib/symbols/computerization/ServicesHero.svelte';
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

<ServicesHero hero_title={ServicesHero_1_hero_title} parag={ServicesHero_1_parag} icon={ServicesHero_1_icon} />
<Intro rep={Intro_2_rep} />
<Content rep1={Content_3_rep1} />
<TheResult h2={TheResult_4_h2} par1={TheResult_4_par1} par2={TheResult_4_par2} repeater1={TheResult_4_repeater1} btn={TheResult_4_btn} />
<Cursor />
</div>