<script lang="ts">  let { title, items, slot = null } = $props();</script>

<style>
.services {
  padding-top: 5rem;
  z-index: 10;
}
.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 3px;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
.service-card {
  background: var(--midnight);
  border: 1px solid var(--accent-bright);
  padding: 3rem 2rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-primary-dark), var(--color-primary));
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  filter: blur(10px);
}
.service-card:hover::before {
  opacity: 0.4;
}
.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 40px var(--accent);
}
.service-card a {
  display: block;
  color: inherit;
  text-decoration: none;
}
.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}
.service-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.service-card p {
  line-height: 1.8;
  font-size: 1.05rem;
}
</style>

<div class="section">
<div class="section-container">
<section id="services" class="services">
    <h2 class="section-title">{title}</h2>
    <div class="services-grid">
      {#each items as item}
        <a href={item.link.url} class="service-card">
          <div class="service-icon">{@html item.icon.html}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </a>
      {/each}
    </div>
</section>
</div>

{#if slot}
  {@render slot()}
{/if}
</div>