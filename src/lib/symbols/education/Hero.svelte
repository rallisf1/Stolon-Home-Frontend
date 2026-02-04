<script lang="ts">  let { title, text, cta_1, cta_2, header, slot = null } = $props();</script>

<style>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 5%;
  position: relative;
  z-index: 1;
}
.hero-content {
  text-align: left;
}
.hero-subtitle {
  font-size: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--sage);
  margin-bottom: 1.5rem;
  font-family: 'Segoe UI', sans-serif;
}
.hero h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
  color: var(--dark-text);
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -2px;
}
.hero h1 .highlight {
  font-style: italic;
  color: var(--soft-orange);
  position: relative;
  display: inline-block;
}
.hero h1 .highlight::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--soft-orange);
  opacity: 0.3;
}
.hero p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  color: var(--dark-text);
  opacity: 0.8;
  max-width: 700px;
  line-height: 2;
}
.cta-group {
  display: flex;
  gap: 1.5rem;
}
.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: transparent;
  color: var(--dark-text);
  text-decoration: none;
  border: 2px solid var(--dark-text);
  font-weight: 400;
  transition: all 0.4s ease;
  letter-spacing: 1px;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}
.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--soft-orange);
  transition: all 0.4s ease;
  z-index: -1;
}
.cta-button:hover::before {
  left: 0;
}
.cta-button:hover {
  color: white;
  border-color: var(--soft-orange);
}
.cta-button.secondary {
  border-color: var(--sage);
}
.cta-button.secondary::before {
  background: var(--sage);
}
.cta-button.secondary:hover {
  border-color: var(--sage);
}
</style>

<div class="section">
<div class="section-container">
<section id="home" class="hero">
  <!-- <div class="floating-container">
    <div class="floating-shape shape-1"></div>
    <div class="floating-shape shape-2"></div>
    <div class="floating-shape shape-3"></div>
  </div> -->
    <div class="hero-content">
      <div class="hero-subtitle">{title}</div>
      <h1>
       {header}
      </h1>
      <p>
       {text}
      </p>
      <div class="cta-group">
        <a href={cta_1.url} class="cta-button">{cta_1.label}</a>
        <a href={cta_2.url} class="cta-button secondary">{cta_2.label}</a>
      </div>
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>