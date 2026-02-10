<script lang="ts">  let { services_title, services_desc, node, slot = null } = $props();</script>

<style>
.services {
  padding: 8rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.section-header {
  margin-bottom: 5rem;
}
.section-title {
  font-size: 3.5rem;
  color: var(--dark-text);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.section-description {
  font-size: 1.1rem;
  color: var(--dark-text);
  opacity: 0.7;
  line-height: 2;
}
.service-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}
.service-card {
  background: white;
  padding: 3rem;
  border-radius: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 3px solid transparent;
  position: relative;
  min-height: 320px;
  display: flex;
  flex-direction: column;
}
.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(135deg, var(--beige), var(--off-white));
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
.service-card:hover::after {
  width: 100%;
}
.service-card:nth-child(1) {
  border-left-color: var(--sage);
}
.service-card:nth-child(2) {
  border-left-color: var(--soft-orange);
}
.service-card:nth-child(3) {
  border-left-color: var(--beige);
}
.service-card:nth-child(4) {
  border-left-color: #C4A77D;
}
.service-card:hover {
  transform: translateX(10px);
  border-left-width: 6px;
}
.service-number {
  font-size: 4rem;
  opacity: 0.1;
  font-weight: 700;
  margin-bottom: -2rem;
  font-family: 'Segoe UI', sans-serif;
}
.service-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--dark-text);
  font-weight: 400;
}
.service-card p {
  color: var(--dark-text);
  opacity: 0.75;
  line-height: 1.9;
  flex-grow: 1;
}
.service-link {
  color: var(--soft-orange);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-top: 1.5rem;
  display: inline-block;
  transition: all 0.3s ease;
}
.service-link:hover {
  transform: translateX(5px);
}
@media (max-width: 992px) {
  .services {
    padding: 3rem 5%;
  }
  .section-header {
    margin-bottom: 2rem;
  }
  .section-title {
    font-size: 2.8rem;
  }
  .section-description {
    font-size: 1rem;
  }
  .service-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .service-card {
    padding: 2.5rem;
  }
  .service-card h3 {
    font-size: 1.6rem;
  }
  .service-number {
    font-size: 3.5rem;
  }
}
@media (max-width: 576px) {
  .services {
    padding: 2rem 5%;
  }
  .section-header {
    margin-bottom: 2rem;
  }
  .section-title {
    font-size: 2rem;
    text-align: center;
  }
  .section-description {
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.6;
  }
  .service-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .service-card {
    padding: 1.5rem;
  }
  .service-card h3 {
    font-size: 1.4rem;
    text-align: center;
  }
  .service-number {
    font-size: 3rem;
    margin-bottom: -1.5rem;
    text-align: center;
  }
  .service-link {
    text-align: center;
    display: block;
  }
  .service-card::after {
    display: none;
  }
  .service-card:hover::after {
    display: none;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section id="services" class="services">
    <div class="section-header">
      <h2 class="section-title">{services_title}</h2>
      <p class="section-description">{services_desc}</p>
    </div>
  
    <div class="service-layout">
      {#each node as item}
        <div class="service-card">
          <div class="service-number">{item.number}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.cta.url} class="service-link">{item.cta.label}</a>
        </div>
      {/each}
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>