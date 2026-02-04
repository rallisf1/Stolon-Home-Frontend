<script lang="ts">  let { tag, title1, rep1, slot = null } = $props();</script>

<style>
section {
  transform: translateY(50px);
  transition: all 0.8s ease;
}
section.visible {
  transform: translateY(0);
}
.section-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(100, 149, 237, 0.1);
  border: 1px solid #6495ed;
  border-radius: 30px;
  color: #6495ed;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
}
.section-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #c0c0c0;
  margin-bottom: 3rem;
  text-align: justify;
}
.intro-section {
  background: linear-gradient(135deg, 0%, #1a2f4f 100%);
}
@media (min-width: 768px) {
  .hero-content {
    padding: 3rem;
  }
  .logo {
    font-size: 5rem;
  }
  .hero-title {
    font-size: 3.5rem;
  }
  .hero-subtitle {
    font-size: 1.5rem;
    max-width: 700px;
  }
  .cta-button {
    padding: 1.2rem 3.5rem;
    font-size: 1.2rem;
  }
  .shape1 {
    width: 450px;
    height: 450px;
  }
  .shape2 {
    width: 350px;
    height: 350px;
  }
  .shape3 {
    width: 300px;
    height: 300px;
  }
}
@media (min-width: 1025px) {
  .hero-content {
    padding: 4rem;
  }
  .logo {
    font-size: 6rem;
  }
  .hero-title {
    font-size: 4rem;
  }
  .hero-subtitle {
    font-size: 1.6rem;
    max-width: 800px;
  }
  .cta-button {
    padding: 1.5rem 4rem;
    font-size: 1.3rem;
  }
  .shape1 {
    width: 500px;
    height: 500px;
  }
  .shape2 {
    width: 400px;
    height: 400px;
  }
  .shape3 {
    width: 350px;
    height: 350px;
  }
}
</style>

<div class="section">
<div class="section-container">
    <section id="intro" class="intro-section">
        <span class="section-tag">{tag}</span>
        <h2 class="section-title">{title1}</h2>
        <div class="section-content">
          {#each rep1 as item}
            <p>{item.text}</p>
          {/each}
        </div>
    </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>