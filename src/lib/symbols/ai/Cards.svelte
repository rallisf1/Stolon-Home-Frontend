<script lang="ts">  let { header, cards, slot = null } = $props();
  import Icon from '@iconify/svelte';
</script>

<style>
.solutions {
  position: relative;
  padding: 6rem 5%;
  z-index: 1;
}
.title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto 4rem;
}
.solution-card {
  position: relative;
  padding: 3rem 2rem;
  background: rgba(26, 31, 58, 0.6);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;
}
.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  transform: scaleX(0);
  transition: transform 0.3s;
}
.solution-card:hover::before {
  transform: scaleX(1);
}
.solution-card:hover {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.6);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}
.solution-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}
.solution-card h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
}
.solution-card p {
  color: #a0aec0;
  line-height: 1.7;
  font-size: 1.05rem;
}
@media (max-width: 992px) {
  .solutions {
    padding: 4rem 5%;
  }
  .title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .solution-card {
    padding: 2.5rem 1.5rem;
  }
  .solution-card h3 {
    font-size: 1.5rem;
  }
  .solution-card p {
    font-size: 1rem;
    line-height: 1.6;
  }
  .solution-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
}
@media (max-width: 576px) {
  .solutions {
    padding: 2rem 15px;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .solution-card {
    padding: 2rem 1rem;
  }
  .solution-card h3 {
    font-size: 1.3rem;
  }
  .solution-card p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .solution-icon {
    width: 60px;
    height: 60px;
    font-size: 1.7rem;
  }
  .solution-card:hover::before {
    display: none;
    transform: none;
  }
  .solution-card:hover {
    transform: none;
    border-color: none;
    box-shadow: none;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="solutions" id="solutions">
    <h2 class="title">{header}</h2>
    <div class="solutions-grid">
      {#each cards as card}
      <div class="solution-card">
        <div class="solution-icon">
          <Icon height="50" icon={card.icon}/>
        </div>
        <h2>{card.title}</h2>
        <p>{card.text}</p>
      </div>
      {/each}
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>