<script lang="ts">  let { card2, header5, text5, slot = null } = $props();</script>

<style>
.testimonials {
  background-color: var(--primary-blue);
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}
.testimonial-card {
  background: rgba(10, 22, 40, 0.6);
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid rgba(192, 192, 192, 0.1);
  position: relative;
  transition: all 0.3s;
}
.testimonial-card::after {
  content: '"';
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 6rem;
  color: rgba(100, 149, 237, 0.1);
  font-family: Georgia, serif;
  line-height: 1;
}
.testimonial-card:hover {
  border-color: rgba(100, 149, 237, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 149, 237, 0.15);
}
.testimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
.testimonial-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-cornflower) 0%, rgba(100, 149, 237, 0.7) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  color: var(--text-light);
  box-shadow: 0 4px 15px rgba(100, 149, 237, 0.3);
  position: relative;
  z-index: 1;
}
.testimonial-info h4 {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}
.testimonial-info p {
  color: var(--accent-silver);
  font-size: 0.9rem;
}
.testimonial-text {
  color: var(--accent-silver);
  font-style: italic;
  line-height: 1.8;
  font-size: 1.05rem;
  position: relative;
  z-index: 1;
}
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-light);
}
.section-subtitle {
  text-align: center;
  color: var(--accent-silver);
  font-size: 1.1rem;
  margin-bottom: 3rem;
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
<section class="testimonials" id="testimonials">
    <div class="section-container">
      <h2 class="section-title">{header5}</h2>
      <p class="section-subtitle">{text5}</p>
        <div class="testimonials-grid">
          {#each card2 as item}
            <div class="testimonial-card">            
                <div class="testimonial-header">
                  <div class="testimonial-avatar">{item.avatar}</div>
                    <div class="testimonial-info">
                      <h4>{item.name}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                <p class="testimonial-text">{item.quotes}</p>            
            </div>
          {/each}
        </div>
    </div>
</section>

{#if slot}
  {@render slot()}
{/if}
</div>