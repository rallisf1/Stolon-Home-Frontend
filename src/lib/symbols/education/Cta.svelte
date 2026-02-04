<script lang="ts">  let { cta_title, cta_desc, cta, slot = null } = $props();</script>

<style>
.cta-section {
  text-align: center;
}
.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--dark-text);
  font-weight: 300;
}
.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: var(--dark-text);
  opacity: 0.8;
}
.cta-button {
  display: inline-block;
  padding: 1.2rem 3rem;
  background: transparent;
  color: var(--dark-text);
  text-decoration: none;
  border: 2px solid var(--dark-text);
  font-weight: 400;
  transition: all 0.4s ease;
  letter-spacing: 1px;
  font-size: 1rem;
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
  color: black;
  border-color: var(--soft-orange);
}
@media (max-width: 1024px) {
  .cta-section h2 {
    font-size: 2.1rem;
  }
  .cta-section p {
    font-size: 1.1rem;
  }
  .cta-button {
    padding: 1.1rem 2.5rem;
    font-size: 0.95rem;
  }
}
@media (max-width: 768px) {
  .cta-section h2 {
    font-size: 1.8rem;
  }
  .cta-section p {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }
  .cta-button {
    padding: 1rem 2.2rem;
    font-size: 0.9rem;
  }
}
@media (max-width: 480px) {
  .cta-section h2 {
    font-size: 1.6rem;
    line-height: 1.25;
  }
  .cta-section p {
    font-size: 1rem;
  }
  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 0.85rem;
    letter-spacing: 0.8px;
  }
}
</style>

<div class="section">
<div class="section-container">
<section class="cta-section">
    <h2>{cta_title}</h2>
    <p>{cta_desc}</p>
    <a href={cta.url} class="cta-button">{cta.label}</a>
</section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>