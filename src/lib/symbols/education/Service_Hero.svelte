<script lang="ts">  let { number, title, subtitle, hero_items, data_number, slot = null } = $props();</script>

<style>
.hero-service::before {
  content: attr(data-number);
  position: absolute;
  top: -50px;
  right: 10%;
  font-size: 20rem;
  font-weight: 700;
  opacity: 0.05;
  font-family: 'Segoe UI', sans-serif;
}
.hero-service-content {
  z-index: 1;
}
.service-label {
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--sage);
  margin-bottom: 1.5rem;
  font-family: 'Segoe UI', sans-serif;
}
.hero-service h1 {
  font-size: 4.5rem;
  margin-bottom: 2rem;
  color: var(--dark-text);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -2px;
}
.hero-service .subtitle {
  font-size: 1.4rem;
  line-height: 1.9;
  color: var(--dark-text);
  opacity: 0.85;
  margin-bottom: 2.5rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.tag {
  padding: 0.5rem 1.2rem;
  background: white;
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--dark-text);
  font-family: 'Segoe UI', sans-serif;
  letter-spacing: 0.5px;
}
@media (max-width: 1024px) {
  .hero-service::before {
    font-size: 14rem;
    top: -40px;
  }
  .hero-service h1 {
    font-size: 3.5rem;
  }
  .hero-service .subtitle {
    font-size: 1.2rem;
  }
}
@media (max-width: 768px) {
  .hero-service::before {
    font-size: 10rem;
    top: -30px;
    right: 5%;
  }
  .service-label {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
  .hero-service h1 {
    font-size: 2.8rem;
    letter-spacing: -1px;
  }
  .hero-service .subtitle {
    font-size: 1.1rem;
    line-height: 1.7;
  }
  .tags {
    gap: 0.7rem;
  }
  .tag {
    font-size: 0.8rem;
    padding: 0.45rem 1rem;
  }
}
@media (max-width: 480px) {
  .hero-service::before {
    font-size: 6rem;
    top: -20px;
    right: 0;
  }
  .service-label {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
  }
  .hero-service h1 {
    font-size: 2.1rem;
    line-height: 1.15;
  }
  .hero-service .subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .tags {
    gap: 0.6rem;
  }
  .tag {
    font-size: 0.75rem;
    padding: 0.4rem 0.9rem;
  }
}
</style>

<div class="section">
<div class="section-container">
<section class="hero-service" data-number={data_number}>
    <div class="hero-service-content">
        <div class="service-label">{number}</div>
        <h1>{title}</h1>
        <p class="subtitle">{subtitle}</p>
        <div class="tags">
          {#each hero_items as item}
            <span class="tag">{item.tag}</span>
          {/each}
        </div>
    </div>
</section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>