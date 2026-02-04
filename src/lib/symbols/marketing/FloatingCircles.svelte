<script lang="ts">
  let { slot = null } = $props();
</script>

<style>
.hero-background {
  position: fixed;
  /* top: 0;
    left: 0; */
  width: 100%;
  height: 100%;
  z-index: -1;
}
.animated-grid {
  position: fixed;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px),
    linear-gradient(0deg, var(--border-subtle) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  opacity: 0.3;
}
@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}
.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}
.float-item {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: float 15s infinite ease-in-out;
}
.float-item:nth-child(1) {
  background: var(--primary-orange);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}
.float-item:nth-child(2) {
  background: var(--primary-purple);
  top: 60%;
  left: 80%;
  animation-delay: 2s;
}
.float-item:nth-child(3) {
  background: var(--primary-teal);
  top: 40%;
  left: 30%;
  animation-delay: 4s;
}
.float-item:nth-child(4) {
  background: var(--accent-yellow);
  top: 70%;
  left: 60%;
  animation-delay: 6s;
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(50px, -50px) scale(2);
    opacity: 0.8;
  }
  50% {
    transform: translate(-30px, 40px) scale(1.5);
    opacity: 0.5;
  }
  75% {
    transform: translate(40px, 30px) scale(2.5);
    opacity: 0.9;
  }
}
</style>

<div class="section">
<div class="hero-background">
  <div class="animated-grid"></div>
  <div class="floating-elements">
      <div class="float-item"></div>
      <div class="float-item"></div>
      <div class="float-item"></div>
      <div class="float-item"></div>
  </div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>