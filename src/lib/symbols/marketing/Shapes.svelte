<script lang="ts">
  let { slot = null } = $props();
</script>

<style>
.shape {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.5;
  animation: float 20s infinite ease-in-out;
}
.shape1 {
  width: 400px;
  height: 400px;
  background: #FF6B35;
  top: 10%;
  left: 10%;
  animation-delay: 1s;
}
.shape2 {
  width: 300px;
  height: 300px;
  background: #9D4EDD;
  bottom: 20%;
  right: 15%;
  animation-delay: 5s;
}
.shape3 {
  width: 350px;
  height: 350px;
  background: #06D6A0;
  top: 50%;
  left: 30%;
  animation-delay: 3s;
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
  <div class="shape shape1"></div>
  <div class="shape shape2"></div>
  <div class="shape shape3"></div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>