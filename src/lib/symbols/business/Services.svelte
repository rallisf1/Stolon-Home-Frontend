<script lang="ts">  let { headercopy, card, slot = null } = $props();
  import Icon from '@iconify/svelte';
</script>

<style>
.background {
  background: linear-gradient(180deg, var(--midnight) 0%, var(--navy) 100%);
}
.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  font-weight: 700;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.service-card {
  background: rgba(26, 47, 79, 0.4);
  border: 1px solid rgba(192, 192, 192, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 1.5rem;
}
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-bright), var(--accent));
  transform: scaleX(0);
  transition: transform 0.4s;
}
.service-card:hover::before {
  transform: scaleX(1);
}
.service-card:hover {
  transform: translateY(-10px);
  background: rgba(26, 47, 79, 0.6);
  border-color: var(--accent);
  box-shadow: 0 20px 60px rgba(100, 149, 237, 0.2);
}
.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-bright), var(--accent));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transform: rotate(0deg);
  transition: transform 0.4s;
}
.service-card:hover .service-icon {
  transform: rotate(360deg);
}
.service-card h3 {
  font-size: 1.5rem;
  color: var(--white);
}
.service-card p {
  color: var(--steel);
  line-height: 1.5;
}
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card {
    padding: 1.5rem;
    gap: 1rem;
    text-align: center;
  }
  .service-card:hover::before {
    display: none;
  }
  .service-card:hover {
    transform: none;
    box-shadow: none;
  }
  .service-card .service-icon {
    transform: none;
    justify-self: center;
  }
  .service-card:hover .service-icon {
    transform: none;
  }
}
</style>

<div class="section">

<div class="background">
  <div class="section-container">
    <section class="services" id="services">
      <h2 class="section-title">{headercopy}</h2>
      <div class="services-grid">
        {#each card as item}
        <div class="service-card">
          <div class="service-icon">
            <Icon height="52" icon={item.icon}/>
          </div> 
          <h3>{item.head}</h3>
          <p>{item.desc}</p>
        </div>
        {/each}
      </div>
    </section>
  </div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>