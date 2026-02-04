<script lang="ts">  let { rep1, slot = null } = $props();</script>

<style>
.content-section {
  z-index: 10;
}
.content-box {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 3rem;
  margin-bottom: 3rem;
  transition: all 0.3s;
}
.content-box:hover {
  border-color: var(--color-primary);
  box-shadow: 0 10px 40px rgba(0, 255, 136, 0.2);
}
.content-box h2 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.content-box p {
  font-size: 1.1rem;
  color: #ffff;
  margin-bottom: 1.5rem;
  line-height: 1.9;
}
.content-box p:last-child {
  margin-bottom: 0;
}
</style>

<div class="section">
<section class="content-section">
  <div class="section-container">
    {#each rep1 as item}
      <div class="content-box">
        <h2>{item.head}</h2>
        {#each item.repeater as item2}
          <p>{item2.par}</p>
        {/each}
      </div>
    {/each}
  </div>
</section>
{#if slot}
  {@render slot()}
{/if}
</div>