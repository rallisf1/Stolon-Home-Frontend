<script lang="ts">
  let { slot = null } = $props();
</script>

<style>
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  /* z-index: 2; */
}
.shape {
  position: fixed;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 20s infinite;
}
.shape1 {
  width: 400px;
  height: 400px;
  background: #6495ed;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.shape2 {
  width: 300px;
  height: 300px;
  background: #4169e1;
  bottom: 20%;
  right: 15%;
  animation-delay: 5s;
}
.shape3 {
  width: 250px;
  height: 250px;
  background: #6495ed;
  top: 60%;
  left: 50%;
  animation-delay: 10s;
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(50px, -50px) rotate(90deg);
  }
  50% {
    transform: translate(-30px, 30px) rotate(180deg);
  }
  75% {
    transform: translate(30px, 50px) rotate(270deg);
  }
}
</style>

<div class="section">

<div class="section-container">
<div class="floating-shapes">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
  </div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>