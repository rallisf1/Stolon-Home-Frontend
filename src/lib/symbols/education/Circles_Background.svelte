<script lang="ts">
  let { slot = null } = $props();
</script>

<style>
.floating-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.shape {
  position: absolute;
  opacity: 0.15;
  animation: float 20s infinite ease-in-out;
}
.shape-1 {
  width: 300px;
  height: 300px;
  background: var(--sage);
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  top: 10%;
  left: -100px;
  animation-delay: 0s;
}
.shape-2 {
  width: 250px;
  height: 250px;
  background: var(--soft-orange);
  border-radius: 41% 59% 42% 58% / 45% 60% 40% 55%;
  top: 60%;
  right: -80px;
  animation-delay: 5s;
}
.shape-3 {
  width: 200px;
  height: 200px;
  background: var(--beige);
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  top: 80%;
  left: 10%;
  animation-delay: 10s;
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}
</style>

<div class="section">
<div class="floating-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>