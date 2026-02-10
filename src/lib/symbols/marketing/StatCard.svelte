<script lang="ts">  let { rep4, slot = null } = $props();</script>

<style>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
.stat-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-subtle);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-orange), var(--primary-purple), var(--primary-teal));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.stat-card:hover::before {
  transform: scaleX(1);
}
.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-teal);
}
.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 0.95rem;
  color: var(--text-gray);
}
@media (max-width: 768px) {
  .stat-card:hover {
    transform: none;
    border-color: var(--border-subtle);
  }
  .stat-card:hover::before {
    transform: scaleX(0);
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="content-section">
    <div class="stats-grid">
      {#each rep4 as it}
      <div class="stat-card">
        <div class="stat-number">{it.num}</div>
        <div class="stat-label">{it.desc1}</div>
      </div>
      {/each}
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>