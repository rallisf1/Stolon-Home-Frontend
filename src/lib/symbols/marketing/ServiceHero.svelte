<script lang="ts">  let { head1, parag1, rep1, tag, slot = null } = $props();</script>

<style>
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
}
.service-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-purple));
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease;
}
.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text-white), var(--text-gray));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease 0.2s both;
}
.hero-description {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease 0.4s both;
}
.tags-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 900px;
  animation: fadeInUp 0.8s ease 0.6s both;
}
.tag {
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-gray);
  transition: all 0.3s ease;
}
.tag:hover {
  border-color: var(--primary-teal);
  color: var(--primary-teal);
  transform: translateY(-2px);
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<div class="section">
<div class="section-contianer">
<section class="hero">
<div class="hero-background">
  <div class="animated-grid"></div>
  <div class="floating-elements">
      <div class="float-item"></div>
      <div class="float-item"></div>
      <div class="float-item"></div>
      <div class="float-item"></div>
  </div>
</div>
  <div class="hero-content">
      <span class="service-tag">{tag}</span>
      <h1 class="hero-title">{head1}</h1>
      <p class="hero-description">
          {parag1}
      </p>
  <div class="tags-container">
      {#each rep1 as item}
        <span class="tag">{item.sp}</span>
      {/each}
  </div>
</div>
</section>

</div>
{#if slot}
  {@render slot()}
{/if}
</div>