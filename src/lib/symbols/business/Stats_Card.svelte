<script lang="ts">  let { rep3, slot = null } = $props();</script>

<style>
.stats {
  padding: 3rem 0;
  background: var(--navy);
}
.background {
  background: var(--navy);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  text-align: center;
}
.stat-item {
  position: relative;
}
.stat-number {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--silver));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 1.1rem;
  color: var(--steel);
  letter-spacing: 2px;
}
@media (max-width: 992px) {
  .stats {
    padding: 2rem 15px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .stat-number {
    font-size: 3rem;
  }
  .stat-label {
    font-size: 1rem;
  }
}
@media (max-width: 576px) {
  .stats {
    padding: 1rem 15px;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .stat-number {
    font-size: 3rem;
  }
  .stat-label {
    font-size: 0.95rem;
    letter-spacing: 1.5px;
  }
}
</style>

<div class="section">
<div class="background">
<div class="section-container"> 
  <section class="stats" id="about"> 
    <div class="section-container"> 
      <div class="stats-grid">
        {#each rep3 as item} 
          <div class="stat-item"> 
            <div class="stat-number">{item.target}</div> 
            <div class="stat-label">{item.text}</div> 
          </div> 
        {/each} 
      </div> 
    </div> 
  </section> 
</div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>