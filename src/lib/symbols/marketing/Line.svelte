<script lang="ts">
  let { slot = null } = $props();
</script>

<style>
.divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-orange), var(--primary-purple), var(--primary-teal), transparent);
  margin: 4rem 0;
}
@media (max-width:768px) {
  .divider {
    margin: 2rem 0;
  }
}
</style>

<div class="section">
  <div class="divider"></div>
{#if slot}
  {@render slot()}
{/if}
</div>