<script lang="ts">  let { repeater, h2, desc, slot = null } = $props();</script>

<style>
.cta-section {
  position: relative;
  padding: 6rem 5%;
  text-align: center;
  z-index: 1;
}
.background {
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.1),
      rgba(118, 75, 162, 0.1));
}
.cta-section h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-primary-1) 0%, var(--color-primary-3) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cta-section p {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.btn-holo {
  position: relative;
  padding: 1rem 2.5rem;
  background: rgba(26, 31, 58, 0.8);
  border: 2px solid transparent;
  border-radius: 50px;
  color: var(--color-text-main);
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  background-clip: padding-box;
}
.btn-holo::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50px;
  background: var(--gradient-holo);
  background-size: 300% 300%;
  z-index: -1;
  animation: gradient-shift 3s ease infinite;
}
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.btn-holo:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px var(--color-glow-primary);
}
.cta-section nav {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 992px) {
  .cta-section {
    padding: 4rem 5%;
  }
  .cta-section h2 {
    font-size: 2.5rem;
  }
  .cta-section p {
    font-size: 1.1rem;
    max-width: 600px;
  }
  .btn-holo {
    padding: 0.8rem 2rem;
    font-size: 0.95rem;
  }
}
@media (max-width: 576px) {
  .cta-section {
    padding: 2rem 15px;
  }
  .cta-section h2 {
    font-size: 2rem;
  }
  .cta-section p {
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 100%;
    padding: 0 1rem;
  }
  .cta-section nav {
    gap: 1rem;
  }
  .btn-holo {
    width: 100%;
    max-width: 250px;
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
}
</style>

<div class="section">
<div class="background">
<div class="section-container">
<section class="cta-section" id="contact">
        <h2>{h2}</h2>
        <p>{desc}</p>
         <div class="cta-buttons">
          <nav>
          {#each repeater as item}
            <a href={item.link1.url} class="btn-holo">{item.link1.label}</a>
          {/each}
          </nav>
        </div>
</section>
</div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>