<script lang="ts">
  let { slot = null } = $props();
</script>

<style>
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(100, 149, 237, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 149, 237, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 1;
  animation: gridPulse 4s ease-in-out infinite;
}
@keyframes gridPulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}
</style>

<div class="section">
<div class="grid-overlay"></div>
{#if slot}
  {@render slot()}
{/if}
</div>