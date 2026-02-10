<script lang="ts">  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let title = $derived(data.content.title);
  let description = $derived(data.content.description);
  let Main_Hero_Johnny_1_header = $derived(data.content.Main_Hero_Johnny_1_header);
  let Main_Hero_Johnny_1_text = $derived(data.content.Main_Hero_Johnny_1_text);
  let Main_Hero_Johnny_1_button = $derived(data.content.Main_Hero_Johnny_1_button);
  let Main_Hero_Johnny_1_rep = $derived(data.content.Main_Hero_Johnny_1_rep);
  let Main_Hero_Johnny_1_header3 = $derived(data.content.Main_Hero_Johnny_1_header3);
  let Main_Hero_Johnny_1_header2 = $derived(data.content.Main_Hero_Johnny_1_header2);
  let Services_3_headercopy = $derived(data.content.Services_3_headercopy);
  let Services_3_card = $derived(data.content.Services_3_card);
  let Stats_Card_5_rep3 = $derived(data.content.Stats_Card_5_rep3);
  let Testimonial_Cards_6_card2 = $derived(data.content.Testimonial_Cards_6_card2);
  let Testimonial_Cards_6_header5 = $derived(data.content.Testimonial_Cards_6_header5);
  let Testimonial_Cards_6_text5 = $derived(data.content.Testimonial_Cards_6_text5);
  let Contact_Cta_7_header6 = $derived(data.content.Contact_Cta_7_header6);
  let Contact_Cta_7_text6 = $derived(data.content.Contact_Cta_7_text6);
  let Contact_Cta_7_button6 = $derived(data.content.Contact_Cta_7_button6);
  import Contact_Cta from '$lib/symbols/business/Contact_Cta.svelte';
  import Testimonial_Cards from '$lib/symbols/business/Testimonial_Cards.svelte';
  import Stats_Card from '$lib/symbols/business/Stats_Card.svelte';
  import Services from '$lib/symbols/business/Services.svelte';
  import Grid_Background from '$lib/symbols/business/Grid_Background.svelte';
  import Main_Hero_Johnny from '$lib/symbols/business/Main_Hero_Johnny.svelte';
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

<Main_Hero_Johnny header={Main_Hero_Johnny_1_header} text={Main_Hero_Johnny_1_text} button={Main_Hero_Johnny_1_button} rep={Main_Hero_Johnny_1_rep} header3={Main_Hero_Johnny_1_header3} header2={Main_Hero_Johnny_1_header2} />
<Grid_Background />
<Services headercopy={Services_3_headercopy} card={Services_3_card} />
<Stats_Card rep3={Stats_Card_5_rep3} />
<Testimonial_Cards card2={Testimonial_Cards_6_card2} header5={Testimonial_Cards_6_header5} text5={Testimonial_Cards_6_text5} />
<Contact_Cta header6={Contact_Cta_7_header6} text6={Contact_Cta_7_text6} button6={Contact_Cta_7_button6} />
</div>