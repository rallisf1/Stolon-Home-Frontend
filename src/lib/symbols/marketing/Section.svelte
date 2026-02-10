<script lang="ts">  let { rep3, slot = null } = $props();</script>

<style>
.content-section {
  animation: fadeIn 1s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.section-intro {
  text-align: center;
  text-wrap: balance;
}
.section-intro p {
  font-size: 1.2rem;
  line-height: 1.9;
  margin-bottom: 1.25rem;
}
@media (max-width: 768px) {
  /* Content Section animation παραμένει */
  .content-section {
    animation: fadeIn 1s ease;
  }
  /* Section intro */
  .section-intro {
    text-align: justify;
    /* justify alignment */
    text-justify: inter-word;
    /* σωστή διανομή κενών */
  }
  .section-intro p {
    font-size: 1rem;
    /* μικρότερο font για mobile */
    line-height: 1.6;
    /* καλύτερο spacing */
    margin-bottom: 1rem;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="content-section">
    <div class="section-intro">
      {#each rep3 as item}
      <p>{item.parag3}</p>
      {/each}
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>