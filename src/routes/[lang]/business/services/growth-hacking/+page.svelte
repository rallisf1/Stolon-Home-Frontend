<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Hero_1_title = $derived(data.content.Hero_1_title);
  let Hero_1_subtitle = $derived(data.content.Hero_1_subtitle);
  let Hero_1_button = $derived(data.content.Hero_1_button);
  let Intro_4_tag = $derived(data.content.Intro_4_tag);
  let Intro_4_title1 = $derived(data.content.Intro_4_title1);
  let Intro_4_rep1 = $derived(data.content.Intro_4_rep1);
  let Cards_6_tag2 = $derived(data.content.Cards_6_tag2);
  let Cards_6_header3 = $derived(data.content.Cards_6_header3);
  let Cards_6_content3 = $derived(data.content.Cards_6_content3);
  let Cards_6_rep3 = $derived(data.content.Cards_6_rep3);
  let Process_7_tag4 = $derived(data.content.Process_7_tag4);
  let Process_7_header4 = $derived(data.content.Process_7_header4);
  let Process_7_rep4 = $derived(data.content.Process_7_rep4);
  let Content_8_tag5 = $derived(data.content.Content_8_tag5);
  let Content_8_header5 = $derived(data.content.Content_8_header5);
  let Content_8_rep5 = $derived(data.content.Content_8_rep5);
  let Step_9_title6 = $derived(data.content.Step_9_title6);
  let Step_9_text6 = $derived(data.content.Step_9_text6);
  let Step_9_button6 = $derived(data.content.Step_9_button6);
  import Step from '$lib/symbols/business/Step.svelte';
  import Content from '$lib/symbols/business/Content.svelte';
  import Process from '$lib/symbols/business/Process.svelte';
  import Cards from '$lib/symbols/business/Cards.svelte';
  import Background from '$lib/symbols/business/Background.svelte';
  import Intro from '$lib/symbols/business/Intro.svelte';
  import Grid_Background from '$lib/symbols/business/Grid_Background.svelte';
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

<Hero title={Hero_1_title} subtitle={Hero_1_subtitle} button={Hero_1_button} />
<Grid_Background />
<Intro tag={Intro_4_tag} title1={Intro_4_title1} rep1={Intro_4_rep1} />
<Background />
<Cards tag2={Cards_6_tag2} header3={Cards_6_header3} content3={Cards_6_content3} rep3={Cards_6_rep3} />
<Process tag4={Process_7_tag4} header4={Process_7_header4} rep4={Process_7_rep4} />
<Content tag5={Content_8_tag5} header5={Content_8_header5} rep5={Content_8_rep5} />
<Step title6={Step_9_title6} text6={Step_9_text6} button6={Step_9_button6} />
</div>