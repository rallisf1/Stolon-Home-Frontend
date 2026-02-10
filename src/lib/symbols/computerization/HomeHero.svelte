<script lang="ts">  let { title1, description1, cta, slot = null } = $props();</script>

<style>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}
.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glitchText 3s infinite;
}
@keyframes glitchText {
  0%,
  90%,
  100% {
    transform: translate(0);
  }
  92% {
    transform: translate(-2px, 2px);
  }
  94% {
    transform: translate(2px, -2px);
  }
  96% {
    transform: translate(-2px, -2px);
  }
  98% {
    transform: translate(2px, 2px);
  }
}
.hero p {
  font-size: 1.3rem;
  color: var(--color-text-dim);
  margin-bottom: 2rem;
  line-height: 1.8;
}
.data-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: float 15s infinite;
  opacity: 0.3;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  50% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-200vh) translateX(0);
    opacity: 0;
  }
}
@media (max-width: 992px) {
  .hero h1 {
    font-size: 2.8rem;
  }
  .hero p {
    font-size: 1.15rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}
@media (max-width: 576px) {
  .hero {
    padding: 2rem 15px;
  }
  .hero h1 {
    font-size: 3rem;
    line-height: 1.2;
  }
  .hero p {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  .cta-button {
    width: 100%;
    max-width: 250px;
    text-align: center;
    padding: 0.5rem 1rem;
  }
  .particle {
    width: 3px;
    height: 3px;
    opacity: 0.2;
  }
  @keyframes glitchText {
    display: none;
  }
  .cta-button::before {
    display: none;
  }
}
</style>

<div class="section">
<div class="section-container">

<section class="hero">
        <div class="data-particles" id="particles"></div>
        <div class="hero-content">
            <h1>{title1}</h1>
            <p>{description1}</p>
            <a href={cta.url} class="cta-button">{cta.label}</a>
        </div>
    </section>

</div>
{#if slot}
  {@render slot()}
{/if}
</div>