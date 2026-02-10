<script lang="ts">  let { header, rep5, slot = null } = $props();
  import Icon from '@iconify/svelte';
</script>

<style>
.approach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
.approach-card {
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid var(--border-subtle);
  transition: all 0.4s ease;
  position: relative;
  display: grid;
  gap: 1.5rem;
}
.approach-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-purple), var(--primary-teal));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.approach-card:hover::after {
  opacity: 1;
}
.approach-card:hover {
  transform: translateY(-8px);
  background: var(--bg-card-darker);
  animation: shadowPulse 2s ease-in-out infinite;
}
@keyframes shadowPulse {
  0%,
  100% {
    box-shadow: 0 20px 40px rgba(157, 78, 221, 0.3);
  }
  50% {
    box-shadow: 0 20px 60px rgba(157, 78, 221, 0.6);
  }
}
.approach-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-purple));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
.approach-card h3 {
  font-size: 1.5rem;
  color: var(--primary-purple);
}
.approach-card p {
  color: var(--text-gray);
  line-height: 1.8;
  text-align: justify;
}
@media (max-width: 718px) {
  .approach-card {
    padding: 1.5rem;
    gap: 1rem;
    text-align: center;
  }
  .approach-card:hover {
    transform: none;
    background: var(--bg-card);
    animation: none;
  }
  .approach-card:hover::after {
    opacity: 0;
  }
  .approach-card h3 {
    line-height: 1.1;
  }
  .approach-card p {
    line-height: 1.25;
    text-align: center;
  }
  .approach-icon {
    justify-self: center;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="content-section">
        <div class="section-header">
            <h2>{header}</h2>
            <div class="accent-line"></div>
        </div>
        <div class="approach-grid">
          {#each rep5 as item}            
            <div class="approach-card">
                <div class="approach-icon">
                  <Icon height="35" icon={item.icon}/>
                </div>
                <h3>{item.head}</h3>
                <p>{item.desc2}</p>
            </div>
          {/each}
        </div>
    </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>