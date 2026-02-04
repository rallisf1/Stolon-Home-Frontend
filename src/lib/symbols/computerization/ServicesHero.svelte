<script lang="ts">  let { hero_title, parag, icon, slot = null } = $props();</script>

<style>
.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
}
.hero-icon {
  color: var(--color-primary);
  display: flex;
  justify-content: center;
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p {
  font-size: 1.3rem;
  color: #ffff;
  line-height: 1.8;
}
</style>

<div class="section">
<section class="hero">
        <div class="section-container">
            <div class="hero-content">
                <div class="hero-icon">{@html icon.html}</div>
                <h1>{hero_title}</h1>
                <p>{parag}</p>
            </div>
        </div>
    </section>

{#if slot}
  {@render slot()}
{/if}
</div>