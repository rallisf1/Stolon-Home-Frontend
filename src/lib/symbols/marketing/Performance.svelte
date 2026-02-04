<script lang="ts">  let { title, rep6, rep2, slot = null } = $props();</script>

<style>
.performance-section {
  background: var(--bg-card);
  border-radius: 24px;
  padding: 4rem 2rem;
  border: 1px solid var(--border-subtle);
}
.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
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
  margin-bottom: 0.5rem;
}
.performance-label {
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 500;
}
.section-intro p {
  text-align: center;
  text-wrap: balance;
  font-size: 1.2rem;
  color: var(--text-gray);
  line-height: 1.9;
  margin-bottom: 1.5rem;
}
</style>

<div class="section">
<!-- Performance & ROI -->
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
            <div class="performance-label">{it.desc}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
{#if slot}
  {@render slot()}
{/if}
</div>