<script lang="ts">
  let { slot = null } = $props();
</script>

<div class="section">

{#if slot}
  {@render slot()}
{/if}
</div>