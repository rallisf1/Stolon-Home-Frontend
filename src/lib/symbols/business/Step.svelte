<script lang="ts">  let { title6, text6, button6, slot = null } = $props();</script>

<style>
.step-text {
  color: #c0c0c0;
  line-height: 1.8;
  font-size: 1.1rem;
}
.cta-section {
  /* background: linear-gradient(135deg, #1a2f4f 0%, #0a1628 100%); */
  text-align: center;
  padding: 8rem 2rem;
}
.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
}
.cta-text {
  font-size: 1.3rem;
  color: #c0c0c0;
  max-width: 800px;
  margin: 0 auto 3rem;
}
footer {
  background: #0a1628;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(100, 149, 237, 0.2);
}
.tags {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.tag {
  padding: 0.5rem 1rem;
  background: rgba(100, 149, 237, 0.1);
  border-radius: 20px;
  color: #6495ed;
  font-size: 0.9rem;
}
.cta-button {
  display: inline-block;
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
</style>

<div class="section">
<div class="section-container">
<section class="cta-section">
    <h2 class="cta-title">{title6}</h2>
    <p class="cta-text">{text6}</p>
    <a href="#contact" class="cta-button">{button6.label}</a>
</section>
</div>

{#if slot}
  {@render slot()}
{/if}
</div>