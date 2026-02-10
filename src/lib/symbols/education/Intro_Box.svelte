<script lang="ts">  let { intro, texts, slot = null } = $props();</script>

<style>
.intro-text {
  font-size: 1.3rem;
  line-height: 2.1;
  color: var(--dark-text);
  opacity: 0.85;
  margin-bottom: 3rem;
  padding: 3rem;
  background: white;
  border-left: 4px solid var(--sage);
}
.content-section p {
  font-size: 1.15rem;
  line-height: 2;
  color: var(--dark-text);
  opacity: 0.8;
  margin-bottom: 1.8rem;
}
@media (max-width: 1024px) {
  .intro-text {
    padding: 2.2rem;
  }
}
@media (max-width: 768px) {
  .intro-text {
    font-size: 1.15rem;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .content-section p {
    font-size: 1.05rem;
    line-height: 1.9;
  }
}
@media (max-width: 480px) {
  .intro-text {
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="content-section">
    <div class="intro-text">
      {intro}
    </div>
    {#each texts as text}
      <p>{text.intro_text}</p>
    {/each}
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>