<script lang="ts">  let { philosophy_title, philosophy_desc, philosophy_items, slot = null } = $props();</script>

<style>
.philosophy-section {
  background: linear-gradient(135deg, var(--sage), var(--beige));
  padding: 10rem 5%;
  position: relative;
  overflow: hidden;
}
.philosophy-content {
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.philosophy-section h2 {
  font-size: 3.5rem;
  color: var(--dark-text);
  font-weight: 300;
  line-height: 1.3;
}
.philosophy-section p {
  font-size: 1.3rem;
  line-height: 2.2;
  color: var(--dark-text);
  opacity: 0.85;
  margin: 2rem 0;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 5rem;
}
.stat-item {
  text-align: center;
}
.stat-number {
  font-size: 3.5rem;
  font-weight: 300;
  color: var(--dark-text);
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--dark-text);
  opacity: 0.7;
}
@media (max-width: 1024px) {
  .philosophy-section {
    padding: 3rem 5%;
  }
  .stats {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 576px) {
  .philosophy-section {
    padding: 2rem 15px;
  }
  .philosophy-section h2 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  .philosophy-section p {
    font-size: 1rem;
    line-height: 1.6;
  }
  .stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .stat-number {
    font-size: 2.5rem;
  }
  .stat-label {
    font-size: 1rem;
    letter-spacing: 1px;
  }
}
</style>

<div class="section">

<section class="philosophy-section" id="philosophy">
    <div class="section-container">
  <div class="philosophy-content">
        <h2>{philosophy_title}</h2>
        <p>{philosophy_desc}</p>
        <div class="stats">
          {#each philosophy_items as item}
            <div class="stat-item">
                <div class="stat-number">{item.number}</div>
                <div class="stat-label">{item.title}</div>
            </div>
          {/each}
        </div>
    </div>
</div>
</section>

{#if slot}
  {@render slot()}
{/if}
</div>