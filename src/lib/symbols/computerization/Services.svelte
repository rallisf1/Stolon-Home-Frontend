<script lang="ts">  let { header, items, slot = null } = $props();
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
  margin-bottom: 4rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 3px;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
.service-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 3rem 2rem;
  transition: all 0.3s;
  position: relative;
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
  box-shadow: 0 10px 40px rgba(0, 255, 136, 0.3);
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
@media (max-width: 992px) {
  .services {
    padding-top: 3rem;
  }
  .section-title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  .service-card {
    padding: 2.5rem 1.5rem;
  }
  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .service-card h3 {
    font-size: 1.5rem;
  }
  .service-card p {
    font-size: 1rem;
  }
}
@media (max-width: 576px) {
  .services {
    padding-top: 1rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .service-card {
    padding: 2rem 1rem;
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  .service-card h3 {
    font-size: 1.3rem;
  }
  .service-card p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  .service-card:hover::before {
    display: none;
  }
  .service-card::before {
    display: none;
  }
}
</style>

<div class="section">
<div class="section-container">
<section id="services" class="services">
    <h2 class="section-title">{header}</h2>
    <div class="services-grid">
      {#each items as item}
        <a href={item.link.url} class="service-card">
          <div class="service-icon">
            <Icon height="50" icon={item.icon}/>
          </div>
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