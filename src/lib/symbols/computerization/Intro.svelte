<script lang="ts">  let { rep, slot = null } = $props();</script>

<style>
.intro {
  position: relative;
  z-index: 10;
  background: rgba(15, 15, 15, 0.6);
}
.intro-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  max-width: 900px;
  margin: 0 auto;
}
.intro p {
  font-size: 1.15rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.9;
}
.intro p:first-child {
  font-size: 1.3rem;
  color: var(--color-primary);
  font-weight: 500;
}
</style>

<div class="section">
   <section class="intro">
        <div class="section-container">
            <div class="intro-content">
                {#each rep as item}
                  <p>{item.parragraph}</p>
                {/each}
            </div>
        </div>
    </section>


{#if slot}
  {@render slot()}
{/if}
</div>