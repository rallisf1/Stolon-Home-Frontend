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
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(135deg, #FF6B35, #9D4EDD, #06D6A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
.service-card {
  display: grid;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.04);
  /* soft glassy background */
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(157, 78, 221, 0.3);
  /* purple glow */
}
.service-card a {
  display: block;
  color: inherit;
  text-decoration: none;
}
.service-icon {
  font-size: 3rem;
  color: #9D4EDD;
  /* purple */
}
.service-card h3 {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #FF6B35, #9D4EDD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.service-card p {
  line-height: 1.8;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
}
@media (max-width: 768px) {
  .services {
    padding-top: 2rem;
  }
  .section-title {
    margin-bottom: 2rem;
  }
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .service-card {
    padding: 1.5rem 1rem;
    gap: 0;
    text-align: center;
  }
  .service-icon {
    display: flex;
    justify-content: center;
  }
  .service-card:hover {
    transform: none;
    box-shadow: none;
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
          <div class="service-icon">
            <Icon height="55" icon={item.icon}/>
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