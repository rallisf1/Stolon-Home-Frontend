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
@media (max-width: 992px) {
  .intro-content {
    max-width: 700px;
    padding: 0 1rem;
  }
  .intro p {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.3rem;
  }
  .intro p:first-child {
    font-size: 1.2rem;
  }
}
@media (max-width: 576px) {
  .intro-content {
    max-width: 100%;
    padding: 0 1rem;
    text-align: center;
  }
  .intro p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  .intro p:first-child {
    font-size: 1.1rem;
  }
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