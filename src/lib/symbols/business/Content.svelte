<script lang="ts">  let { tag5, header5, rep5, slot = null } = $props();</script>

<style>
.section-container {
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
  .section-container {
    gap: 1rem;
  }
  .section-tag {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
  .section-title {
    font-size: 2rem;
    line-height: 1.3;
  }
  .section-content {
    font-size: 1rem;
    line-height: 1.5;
  }
}
</style>

<div class="section">
<div class="section-container">
  <span class="section-tag">{tag5}</span>
  <h2 class="section-title">{header5}</h2>
  {#each rep5 as item}
  <div class="section-content">
      <p>{item.text}</p>
  </div>
  {/each}
</div>
{#if slot}
  {@render slot()}
{/if}
</div>