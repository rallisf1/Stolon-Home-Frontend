<script lang="ts">  let { h1, description, reps, slot = null } = $props();</script>

<style>
.hero-buttons .btn-quantum {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.5rem;
  background: var(--btn-bg-quantum);
  border: none;
  border-radius: 50px;
  color: var(--color-text-main);
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 8px 30px var(--color-glow-primary);
}
.hero-buttons .btn-quantum::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-btn-sweep);
  transition: left 0.5s;
}
.hero-buttons .btn-quantum:hover::before {
  left: 100%;
}
.hero-buttons .btn-quantum::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 2px;
  background: var(--gradient-primary-wide);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
}
.hero-buttons .btn-quantum:hover::after {
  opacity: 1;
  animation: rotate-border 2s linear infinite;
}
@keyframes rotate-border {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.hero-buttons .btn-quantum:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 50px var(--color-glow-strong);
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
.hero-buttons a {
  position: relative;
  z-index: 10;
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
.btn-neon {
  padding: 1rem 2.5rem;
  background: transparent;
  border: 3px solid var(--color-primary-1);
  border-radius: 50px;
  color: var(--color-primary-1);
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  text-shadow: 0 0 10px var(--color-glow-primary);
}
.btn-neon:hover {
  color: var(--color-text-main);
  border-color: var(--color-primary-2);
  box-shadow:
    0 0 20px var(--color-glow-primary),
    0 0 40px var(--color-glow-purple),
    inset 0 0 20px var(--transparent-purple-20);
}
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: var(--gradient-primary-wide);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease-out;
}
.hero p {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out 0.2s backwards;
}
.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.4s backwards;
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
.ai-brain {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;
}
.brain-node {
  position: absolute;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.8);
  animation: pulse 3s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}
.brain-connection {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
  transform-origin: left center;
  animation: dataFlow 2s linear infinite;
}
@keyframes dataFlow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<div class="section">

<div class="section-container">
<section class="hero">
        <div class="ai-brain" id="aiBrain"></div>
        <div class="hero-content">
            <h1>{h1}</h1>
            <p>{description}</p> 
            <div class="hero-buttons">
                {#each reps as item}
                <a class="{item.class}" href="{item.button.url}">
                  {item.button.label}
                </a>
                {/each}
            </div>
        </div>
    </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>