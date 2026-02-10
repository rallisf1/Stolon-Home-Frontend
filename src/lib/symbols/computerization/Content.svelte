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
@media (max-width: 992px) {
  .content-box {
    padding: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .content-box h2 {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  .content-box p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }
}
@media (max-width: 576px) {
  .content-box {
    padding: 1.8rem;
    margin-bottom: 2rem;
  }
  .content-box h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .content-box p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    text-align: center;
  }
  .content-box:hover {
    box-shadow: none;
    border-color: none;
  }
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