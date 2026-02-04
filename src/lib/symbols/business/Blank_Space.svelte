<script lang="ts">
  let { slot = null } = $props();
</script>

<div class="section">
<div>
  <p></p>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>