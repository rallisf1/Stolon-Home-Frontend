<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Hero_2_title = $derived(data.content.Hero_2_title);
  let Hero_2_subtitle = $derived(data.content.Hero_2_subtitle);
  let Hero_2_button = $derived(data.content.Hero_2_button);
  let Intro_3_tag = $derived(data.content.Intro_3_tag);
  let Intro_3_title1 = $derived(data.content.Intro_3_title1);
  let Intro_3_rep1 = $derived(data.content.Intro_3_rep1);
  let Process_6_tag4 = $derived(data.content.Process_6_tag4);
  let Process_6_header4 = $derived(data.content.Process_6_header4);
  let Process_6_rep4 = $derived(data.content.Process_6_rep4);
  let Content_7_tag5 = $derived(data.content.Content_7_tag5);
  let Content_7_header5 = $derived(data.content.Content_7_header5);
  let Content_7_rep5 = $derived(data.content.Content_7_rep5);
  let Step_8_title6 = $derived(data.content.Step_8_title6);
  let Step_8_text6 = $derived(data.content.Step_8_text6);
  let Step_8_button6 = $derived(data.content.Step_8_button6);
  import Step from '$lib/symbols/business/Step.svelte';
  import Content from '$lib/symbols/business/Content.svelte';
  import Process from '$lib/symbols/business/Process.svelte';
  import Background from '$lib/symbols/business/Background.svelte';
  import Grid_Background from '$lib/symbols/business/Grid_Background.svelte';
  import Intro from '$lib/symbols/business/Intro.svelte';
  import Hero from '$lib/symbols/business/Hero.svelte';
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

<Hero title={Hero_2_title} subtitle={Hero_2_subtitle} button={Hero_2_button} />
<Intro tag={Intro_3_tag} title1={Intro_3_title1} rep1={Intro_3_rep1} />
<Grid_Background />
<Background />
<Process tag4={Process_6_tag4} header4={Process_6_header4} rep4={Process_6_rep4} />
<Content tag5={Content_7_tag5} header5={Content_7_header5} rep5={Content_7_rep5} />
<Step title6={Step_8_title6} text6={Step_8_text6} button6={Step_8_button6} />
</div>