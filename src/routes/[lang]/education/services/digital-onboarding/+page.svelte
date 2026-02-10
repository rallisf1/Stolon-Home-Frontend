<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Service_Hero_1_number = $derived(data.content.Service_Hero_1_number);
  let Service_Hero_1_title = $derived(data.content.Service_Hero_1_title);
  let Service_Hero_1_subtitle = $derived(data.content.Service_Hero_1_subtitle);
  let Service_Hero_1_hero_items = $derived(data.content.Service_Hero_1_hero_items);
  let Service_Hero_1_data_number = $derived(data.content.Service_Hero_1_data_number);
  let Intro_Box_2_intro = $derived(data.content.Intro_Box_2_intro);
  let Intro_Box_2_texts = $derived(data.content.Intro_Box_2_texts);
  let Feature_list_3_highlight_title = $derived(data.content.Feature_list_3_highlight_title);
  let Feature_list_3_box = $derived(data.content.Feature_list_3_box);
  let Feature_list_3_lists = $derived(data.content.Feature_list_3_lists);
  let Outro_4_outro = $derived(data.content.Outro_4_outro);
  let Cta_5_cta_title = $derived(data.content.Cta_5_cta_title);
  let Cta_5_cta_desc = $derived(data.content.Cta_5_cta_desc);
  let Cta_5_cta = $derived(data.content.Cta_5_cta);
  import Circles_Background from '$lib/symbols/education/Circles_Background.svelte';
  import Cta from '$lib/symbols/education/Cta.svelte';
  import Outro from '$lib/symbols/education/Outro.svelte';
  import Feature_list from '$lib/symbols/education/Feature_list.svelte';
  import Intro_Box from '$lib/symbols/education/Intro_Box.svelte';
  import Service_Hero from '$lib/symbols/education/Service_Hero.svelte';
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

<Service_Hero number={Service_Hero_1_number} title={Service_Hero_1_title} subtitle={Service_Hero_1_subtitle} hero_items={Service_Hero_1_hero_items} data_number={Service_Hero_1_data_number} />
<Intro_Box intro={Intro_Box_2_intro} texts={Intro_Box_2_texts} />
<Feature_list highlight_title={Feature_list_3_highlight_title} box={Feature_list_3_box} lists={Feature_list_3_lists} />
<Outro outro={Outro_4_outro} />
<Cta cta_title={Cta_5_cta_title} cta_desc={Cta_5_cta_desc} cta={Cta_5_cta} />
<Circles_Background />
</div>