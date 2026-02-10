<script lang="ts">  let { approach_title, approach_items, approach_text, slot = null } = $props();</script>

<style>
h2 {
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: var(--dark-text);
  font-weight: 300;
  letter-spacing: -1px;
}
.coverage-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
}
p {
  font-size: 1.15rem;
  line-height: 2;
  color: var(--dark-text);
  opacity: 0.8;
  margin-bottom: 1.8rem;
}
.coverage-item {
  background: white;
  padding: 2rem;
  border-left: 3px solid var(--sage);
  transition: all 0.3s ease;
}
.coverage-item:hover {
  transform: translateX(5px);
  border-left-width: 6px;
}
.coverage-item h4 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--dark-text);
  font-weight: 400;
}
.coverage-item p {
  font-size: 1rem;
  line-height: 1.8;
}
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: -0.5px;
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.4rem;
  }
  .coverage-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .coverage-item {
    padding: 1.5rem;
    border-left-width: 4px;
  }
  /* Disable horizontal movement on mobile */
  .coverage-item:hover {
    transform: none;
    border-left-width: 4px;
  }
  .coverage-item h4 {
    font-size: 1.15rem;
    margin-bottom: 0.6rem;
  }
  .coverage-item p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>

<div class="section">
<div class="section-container">
<h2>{approach_title}</h2>
  <div class="coverage-grid">
    {#each approach_items as item}
      <div class="coverage-item">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
      </div>
    {/each}
  </div>
  <p>{approach_text}</p>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>