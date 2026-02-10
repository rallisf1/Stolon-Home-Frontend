<script lang="ts">  let { title, items, slot = null } = $props();
  import Icon from '@iconify/svelte';
</script>

<style>
.services {
  padding-top: 5rem;
  z-index: 10;
}
.section-title {
  text-align: center;
  font-size: 3rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 4rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(300px - 2rem), 1fr));
  gap: 3rem;
}
.service-card {
  background: var(--midnight);
  border: 1px solid var(--accent-bright);
  padding: 3rem 2rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  color: var(--color-primary);
}
.service-card h3 {
  font-size: 1.8rem;
  color: var(--color-primary);
}
.service-card p {
  line-height: 1.8;
  font-size: 1.05rem;
}
@media (max-width: 768px) {
  .services {
    padding-top: 3rem;
  }
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .service-card {
    padding: 2.5rem 1.5rem;
    gap: 1rem;
  }
  .service-card h3 {
    font-size: 1.5rem;
  }
  .service-card p {
    font-size: 1rem;
    line-height: 1.6;
  }
  .service-icon {
    font-size: 2.5rem;
  }
}
@media (max-width: 670px) {
  .services {
    padding: 2rem 0;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .services-grid {
    gap: 1.5rem;
  }
  .service-card {
    padding: 2rem 1rem;
    text-align: center;
  }
  .service-card h3 {
    font-size: 1.3rem;
  }
  .service-card p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .service-icon {
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
  .service-card:hover {
    transform: none;
    box-shadow: none;
    border-color: none;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section id="services" class="services">
    <h2 class="section-title">{title}</h2>
    <div class="services-grid">
      {#each items as item}
      <a href={item.link.url} class="service-card">
        {#if item.icon.length}
        <div class="service-icon">
          <Icon height="60" icon={item.icon}/>
        </div>
        {/if}
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