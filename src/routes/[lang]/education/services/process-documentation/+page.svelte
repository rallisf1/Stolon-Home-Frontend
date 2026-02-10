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
  let Highlight_box_3_problem_items = $derived(data.content.Highlight_box_3_problem_items);
  let Highlight_box_3_problem_text = $derived(data.content.Highlight_box_3_problem_text);
  let Quote_Text_4_quote = $derived(data.content.Quote_Text_4_quote);
  let Quote_Text_4_quote_text = $derived(data.content.Quote_Text_4_quote_text);
  let Feature_list_5_highlight_title = $derived(data.content.Feature_list_5_highlight_title);
  let Feature_list_5_box = $derived(data.content.Feature_list_5_box);
  let Feature_list_5_lists = $derived(data.content.Feature_list_5_lists);
  let Grid_box_6_approach_title = $derived(data.content.Grid_box_6_approach_title);
  let Grid_box_6_approach_items = $derived(data.content.Grid_box_6_approach_items);
  let Grid_box_6_approach_text = $derived(data.content.Grid_box_6_approach_text);
  let Outro_7_outro = $derived(data.content.Outro_7_outro);
  let Cta_8_cta_title = $derived(data.content.Cta_8_cta_title);
  let Cta_8_cta_desc = $derived(data.content.Cta_8_cta_desc);
  let Cta_8_cta = $derived(data.content.Cta_8_cta);
  import Circles_Background from '$lib/symbols/education/Circles_Background.svelte';
  import Cta from '$lib/symbols/education/Cta.svelte';
  import Outro from '$lib/symbols/education/Outro.svelte';
  import Grid_box from '$lib/symbols/education/Grid_box.svelte';
  import Feature_list from '$lib/symbols/education/Feature_list.svelte';
  import Quote_Text from '$lib/symbols/education/Quote_Text.svelte';
  import Highlight_box from '$lib/symbols/education/Highlight_box.svelte';
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
<Highlight_box problem_items={Highlight_box_3_problem_items} problem_text={Highlight_box_3_problem_text} />
<Quote_Text quote={Quote_Text_4_quote} quote_text={Quote_Text_4_quote_text} />
<Feature_list highlight_title={Feature_list_5_highlight_title} box={Feature_list_5_box} lists={Feature_list_5_lists} />
<Grid_box approach_title={Grid_box_6_approach_title} approach_items={Grid_box_6_approach_items} approach_text={Grid_box_6_approach_text} />
<Outro outro={Outro_7_outro} />
<Cta cta_title={Cta_8_cta_title} cta_desc={Cta_8_cta_desc} cta={Cta_8_cta} />
<Circles_Background />
</div>