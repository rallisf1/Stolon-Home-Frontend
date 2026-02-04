<script lang="ts">  let { rep3, slot = null } = $props();</script>

<style>
.stats {
  padding: 6rem 0;
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
  text-transform: uppercase;
  letter-spacing: 2px;
}
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  .hero-text h1 {
    font-size: 2.5rem;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .nav-links {
    display: none;
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