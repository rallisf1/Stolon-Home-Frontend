<script lang="ts">  let { title6, text6, button6, slot = null } = $props();</script>

<style>
.cta-section {
  text-align: center;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
}
.cta-text {
  font-size: 1.3rem;
  color: #c0c0c0;
  max-width: 800px;
}
.cta-button {
  display: block;
  width: fit-content;
  padding: 1rem 3rem;
  background: linear-gradient(135deg, #6495ed 0%, #4169e1 100%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 1s ease 0.6s forwards;
  box-shadow: 0 10px 30px rgba(100, 149, 237, 0.3);
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(100, 149, 237, 0.5);
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(30px);
  }
}
@media (max-width: 768px) {
  .cta-section {
    padding: 3rem 15px;
  }
  .cta-title {
    font-size: 2rem;
    line-height: 1.5;
  }
  .cta-button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
  .cta-text {
    font-size: 1.1rem;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="cta-section">
    <h2 class="cta-title">{title6}</h2>
    <p class="cta-text">{text6}</p>
    <a href={button6.url} class="cta-button">{button6.label}</a>
  </section>
</div>

{#if slot}
  {@render slot()}
{/if}
</div>