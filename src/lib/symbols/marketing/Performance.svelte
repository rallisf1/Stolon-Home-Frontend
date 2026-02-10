<script lang="ts">  let { title, rep6, rep2, slot = null } = $props();</script>

<style>
.performance-section {
  background: var(--bg-card);
  border-radius: 24px;
  padding: 3rem 2rem;
  border: 1px solid var(--border-subtle);
  display: grid;
  gap: 1.5rem;
}
.performance-grid {
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
}
.performance-item {
  text-align: center;
}
.performance-metric {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-teal), var(--accent-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.performance-label {
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 500;
}
.section-intro {
  text-align: center;
  text-wrap: balance;
  font-size: 1.2rem;
  color: var(--text-gray);
  line-height: 1.9;
  display: grid;
  gap: 1rem;
}
@media (max-width: 768px) {
  .performance-section {
    padding: 1.5rem 15px;
    border-radius: 16px;
    gap: 1rem;
  }
  .performance-grid {
    grid-template-columns: 1fr;
    /* stack vertically */
    gap: 1.5rem;
  }
  .performance-item {
    text-align: center;
    /* κεντράρισμα για κάθε στοιχείο */
  }
  .performance-metric {
    font-size: 2rem;
    /* μικρότερα νούμερα για mobile */
  }
  .performance-label {
    font-size: 0.95rem;
  }
  /* Intro paragraph */
  .section-intro p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (max-width: 440px) {
  .performance-metric {
    font-size: 1.5rem;
  }
}
</style>

<div class="section">
<section class="section-container">
  <div class="performance-section">
    <div class="section-header">
      <h2>{title}</h2>
      <div class="accent-line"></div>
    </div>
    <div class="section-intro">
      {#each rep6 as item}
      <p>{item.parag4}</p>
      {/each}
    </div>    
    <div class="performance-grid">
      {#each rep2 as it}
      <div class="performance-item">
          <div class="performance-metric">{it.color}</div>
      </div>
      {/each}
    </div>
  </div>
</section>
{#if slot}
  {@render slot()}
{/if}
</div>