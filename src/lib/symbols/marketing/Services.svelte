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
  margin-bottom: 1.5rem;
  color: #9D4EDD;
  /* purple */
}
.service-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FF6B35, #9D4EDD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.service-card p {
  line-height: 1.8;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
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