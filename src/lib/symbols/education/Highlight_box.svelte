<script lang="ts">  let { problem_items, problem_text, slot = null } = $props();</script>

<style>
p {
  font-size: 1.15rem;
  line-height: 2;
  color: var(--dark-text);
  opacity: 0.8;
  margin-bottom: 1.8rem;
}
.problem-solution {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin: 4rem 0;
}
.problem-box,
.solution-box {
  padding: 2.5rem;
  border-radius: 0;
}
.problem-box {
  background: linear-gradient(135deg, rgba(232, 149, 107, 0.1), rgba(232, 149, 107, 0.05));
  border-left: 4px solid var(--soft-orange);
}
.solution-box {
  background: linear-gradient(135deg, rgba(156, 175, 136, 0.1), rgba(156, 175, 136, 0.05));
  border-left: 4px solid var(--sage);
}
.problem-box h3,
.solution-box h3 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: var(--dark-text);
  font-weight: 400;
}
.problem-box p,
.solution-box p {
  font-size: 1.05rem;
  line-height: 1.9;
}
@media (max-width: 768px) {
  .problem-solution {
    gap: 2rem;
    margin: 1rem 0;
  }
  .problem-box,
  .solution-box {
    padding: 1.5rem;
  }
  .problem-box h3,
  .solution-box h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
}
</style>

<div class="section">
<div class="section-container">
  
  <div class="problem-solution">
    {#each problem_items as item}
      <div class="{item.style}">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
      </div>
    {/each}
  </div>
  <p>{problem_text}</p>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>