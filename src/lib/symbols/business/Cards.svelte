<script lang="ts">  let { tag2, header3, content3, rep3, slot = null } = $props();
  import Icon from '@iconify/svelte';
export function tilt(node) {
  function handleMove(e) {
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    node.style.transform =
      `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  function handleLeave() {
    node.style.transform =
      'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
  }
  node.addEventListener('mousemove', handleMove);
  node.addEventListener('mouseleave', handleLeave);
  return {
    destroy() {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    }
  };
}
</script>

<style>
#approach {
  display: grid;
  gap: 3rem;
}
.section-tag {
  display: block;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  background: rgba(100, 149, 237, 0.1);
  border: 1px solid #6495ed;
  border-radius: 30px;
  color: #6495ed;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}
.section-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #c0c0c0;
}
.intro-section {
  background: linear-gradient(135deg, #1a2f4f 0%, #0a1628 100%);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
.feature-card {
  background: rgba(26, 47, 79, 0.5);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid rgba(100, 149, 237, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 1.5rem;
}
.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(100, 149, 237, 0.1) 0%, rgba(65, 105, 225, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-10px);
  border-color: #6495ed;
  box-shadow: 0 20px 60px rgba(100, 149, 237, 0.2);
}
.feature-card:hover::before {
  opacity: 1;
}
.feature-icon {
  font-size: 3rem;
  position: relative;
  z-index: 1;
}
.feature-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  position: relative;
  z-index: 1;
}
.feature-text {
  color: #c0c0c0;
  line-height: 1.7;
  position: relative;
  z-index: 1;
  text-wrap: balance;
}
@media (max-width: 992px) {
  #approach {
    gap: 2rem;
  }
  .section-tag {
    font-size: 0.85rem;
    padding: 0.4rem 1.2rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .section-content {
    font-size: 1.1rem;
  }
  .features-grid {
    gap: 2rem;
  }
  .feature-card {
    padding: 2rem;
    gap: 1rem;
  }
  .feature-title {
    font-size: 1.5rem;
  }
  .feature-text {
    font-size: 1rem;
    line-height: 1.6;
  }
  .feature-icon {
    font-size: 2.5rem;
  }
}
@media (max-width: 576px) {
  #approach {
    gap: 1rem;
  }
  .section-tag {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
  }
  .section-title {
    font-size: 2rem;
    text-align: center;
  }
  .section-content {
    font-size: 0.95rem;
    line-height: 1.4;
    text-align: center;
  }
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .feature-card {
    padding: 1rem;
    text-align: center;
  }
  .feature-title {
    font-size: 1.3rem;
  }
  .feature-text {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  .feature-icon {
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
  .feature-card:hover {
    trasform: none;
    border-color: none;
    box-shadow: none;
  }
  .feature-card {
    transform: none !important;
    pointer-events: auto;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section id="approach">
    <span class="section-tag">{tag2}</span>
    <h2 class="section-title">{header3}</h2>
    <div class="section-content">
        <p>{content3}</p>
    </div>
    <div class="features-grid">
      {#each rep3 as item} 
      <div class="feature-card" use:tilt>
        <div class="feature-icon"><Icon height="60" icon={item.icon}/></div>
        <h3 class="feature-title">{item.title}</h3>
        <p class="feature-text">{item.text}</p>
      </div>
     {/each}
    </div>
  </section>
</div>

{#if slot}
  {@render slot()}
{/if}
</div>