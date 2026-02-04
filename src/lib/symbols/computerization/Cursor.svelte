<script lang="ts">
  let { slot = null } = $props();

  import { onMount } from "svelte";
let cursor;
let particlesContainer;
let trails = [];
let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;
onMount(() => {
  for (let i = 0; i < 8; i++) {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    document.body.appendChild(trail);
    trails.push({ element: trail, x: 0, y: 0 });
  }
  const moveHandler = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  document.addEventListener("mousemove", moveHandler);
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    trails.forEach((trail, index) => {
      const delay = (index + 1) * 0.1;
      trail.x += (mouseX - trail.x) * (0.2 - delay * 0.02);
      trail.y += (mouseY - trail.y) * (0.2 - delay * 0.02);
      trail.element.style.left = trail.x + "px";
      trail.element.style.top = trail.y + "px";
    });
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = 15 + Math.random() * 10 + "s";
    particlesContainer.appendChild(particle);
  }
  // Smooth Scroll for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  // Parallax effect on service cards
  const serviceCards = document.querySelectorAll(".service-card");
  const scrollHandler = () => {
    serviceCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
      if (scrollPercent > 0 && scrollPercent < 1) {
        const translateY = (scrollPercent - 0.5) * 20;
        card.style.transform = `translateY(${-translateY}px)`;
      }
    });
  };
  window.addEventListener("scroll", scrollHandler);
  return () => {
    document.removeEventListener("mousemove", moveHandler);
    window.removeEventListener("scroll", scrollHandler);
    trails.forEach((t) => t.element.remove());
  };
});
</script>

<style>
.cursor {
   width: 20px;
   height: 20px;
   border: 2px solid var(--color-primary);
   border-radius: 50%;
   position: fixed;
   pointer-events: none;
   z-index: 9999;
   transition: all 0.1s ease;
   transform: translate(-50%, -50%);
   mix-blend-mode: difference;
 }
 :global(.cursor-trail) {
   width: 6px;
   height: 6px;
   background: var(--color-primary);
   border-radius: 50%;
   position: fixed;
   pointer-events: none;
   transform: translate(-50%, -50%);
   z-index: 9998;
   opacity: 0.6;
 }
</style>

<div class="section">
<div bind:this={cursor} class="cursor"></div>
<div bind:this={particlesContainer} id="particles"></div>
{#if slot}
  {@render slot()}
{/if}
</div>