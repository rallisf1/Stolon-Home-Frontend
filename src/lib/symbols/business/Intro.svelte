<script lang="ts">  let { tag, title1, rep1, slot = null } = $props();</script>

<style>
.intro-section {
  display: grid;
  gap: 2rem;
}
.section-tag {
  display: block;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  background: rgba(100, 149, 237, 0.1);
  border: 1px solid #6495ed;
  border-radius: 30px;
  color: #6495ed;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}
.section-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #c0c0c0;
  text-align: justify;
}
@media (max-width: 768px) {
  .intro-section {
    gap: 1rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .section-content {
    font-size: 1.1rem;
    line-height: 1.5;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section id="intro" class="intro-section">
    <span class="section-tag">{tag}</span>
    <h2 class="section-title">{title1}</h2>
    <div class="section-content">
      {#each rep1 as item}
      <p>{item.text}</p>
      {/each}
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>