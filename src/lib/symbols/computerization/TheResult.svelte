<script lang="ts">  let { h2, par1, par2, repeater1, btn, slot = null } = $props();</script>

<style>
.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}
.tag {
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: all 0.3s;
}
.tag:hover {
  background: rgba(0, 255, 136, 0.2);
  border-color: var(--color-primary);
  cursor: pointer;
}
.cta-section {
  position: relative;
  z-index: 10;
  background: rgba(15, 15, 15, 0.8);
  text-align: center;
}
.cta-button {
  display: inline-block;
  padding: 1rem 3rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
}
.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  transition: left 0.3s;
  z-index: -1;
}
.cta-button:hover::before {
  left: 0;
}
.cta-button:hover {
  color: var(--color-bg);
}
.heading {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}
.parag1 {
  font-size: 1.2rem;
  color: #ffff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.9;
}
.parag2 {
  font-size: 1.2rem;
  color: #ffff;
  max-width: 800px;
  margin: 1.5rem auto;
  line-height: 1.9;
}
@media (max-width:576px) {
  .heading {
    line-height: 1.2;
  }
  .cta-button:hover::before {
    display: none;
  }
  .tag:hover::before {
    display: none;
  }
  .parag1,
  .parag2 {
    font-size: 0.95rem;
    max-width: 100%;
    line-height: 1.5;
    padding: 0 1rem;
  }
  .cta-button {
    width: 100%;
    max-width: 250px;
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }
}
</style>

<div class="section">
<section class="cta-section">
  <div class="section-container">
      <h2 class="heading">{h2}</h2>
      <p class="parag1">{par1}</p>
      <p class="parag2">{par2}</p>
       {#if repeater1}
            <div class="tags">
              {#each repeater1 as item}
                <span class="tag">{item.sp}</span>
              {/each} 
            </div>
       {/if}
      <a href={btn.url} class="cta-button">{btn.label}</a>
        
  </div>
  
</section>
{#if slot}
  {@render slot()}
{/if}
</div>