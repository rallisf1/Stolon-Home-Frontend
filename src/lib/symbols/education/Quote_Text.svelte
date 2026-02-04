<script lang="ts">  let { quote, quote_text, slot = null } = $props();</script>

<style>
p {
   font-size: 1.15rem;
   line-height: 2;
   color: var(--dark-text);
   opacity: 0.8;
   margin-bottom: 1.8rem;
 }
 .quote-block {
   background: white;
   padding: 3rem;
   margin-bottom: 3rem;
   border-left: 6px solid var(--soft-orange);
   position: relative;
 }
 .quote-block::before {
   content: '"';
   position: absolute;
   top: 1rem;
   left: 1rem;
   font-size: 6rem;
   color: var(--soft-orange);
   opacity: 0.15;
   font-family: Georgia, serif;
   line-height: 1;
 }
 .quote-block p {
   font-size: 1.5rem;
   line-height: 1.8;
   font-style: italic;
   margin: 0;
   position: relative;
   z-index: 1;
 }
</style>

<div class="section">
<div class="section-container">

<div class="quote-block">
  <p>{quote}</p>
</div>
<p>{quote_text}</p>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>