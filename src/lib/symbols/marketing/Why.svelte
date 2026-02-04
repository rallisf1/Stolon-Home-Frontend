<script lang="ts">  let { title1, rep7, slot = null } = $props();</script>

<style>
.section-intro p {
  text-align: center;
  text-wrap: balance;
  font-size: 1.2rem;
  color: var(--text-gray);
  line-height: 1.9;
  margin-bottom: 1.5rem;
}
.section-intro {
  text-wrap: balance;
  text-align: center;
}
</style>

<div class="section">
<section class="section-container content-section">
        <div class="section-header">
            <h2>{title1}</h2>
            <div class="accent-line"></div>
        </div>

        <div class="section-intro">
            {#each rep7 as item}
              <p>{item.parag5}</p>
            {/each}
        </div>
    </section>
{#if slot}
  {@render slot()}
{/if}
</div>