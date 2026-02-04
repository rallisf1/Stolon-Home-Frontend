<script lang="ts">
  let { slot = null } = $props();
</script>

<div class="section">
<br><br>
<p>fgrfrf</p>
{#if slot}
  {@render slot()}
{/if}
</div>