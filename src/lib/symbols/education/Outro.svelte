<script lang="ts">  let { outro, slot = null } = $props();</script>

<style>
h2 {
  font-size: 2.8rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  color: var(--dark-text);
  font-weight: 300;
  letter-spacing: -1px;
}
h2:first-of-type {
  margin-top: 0;
}
p {
  font-size: 1.15rem;
  line-height: 2;
  color: var(--dark-text);
  opacity: 0.8;
  margin-bottom: 1.8rem;
}
</style>

<div class="section">
<div class="section-container">
  <h2>{outro.title}</h2>
  
  <p>{outro.text}</p>
  
  <p>{outro.sub_text}</p>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>