<script lang="ts">  let { headercopy, card, slot = null } = $props();
  import Icon from '@iconify/svelte';
</script>

<style>
.services {
  /* padding: 6rem 0;
  */
}
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
  margin-bottom: 1.5rem;
  font-size: 2rem;
  transform: rotate(0deg);
  transition: transform 0.4s;
}
.service-card:hover .service-icon {
  transform: rotate(360deg);
}
.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--white);
}
.service-card p {
  color: var(--steel);
  line-height: 1.6;
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
<section class="services" id="services">
    <div class="section-container">
        <h2 class="section-title">{headercopy}</h2>
        <div class="services-grid">
          {#each card as item}
            <div class="service-card">
                <div class="service-icon">{@html item.icon.html}</div> 
                <h3>{item.head}</h3>
                <p>{item.desc}</p>
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