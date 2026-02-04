<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();</script>

<style>
header {
  background: var(--off-white);
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
}
header.scrolled {
  background: rgba(232, 220, 196, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}
.nav-links {
  display: flex;
  gap: 3rem;
}
img {
  position: absolute;
  bottom: -3rem;
  left: 0;
  max-height: 6rem;
}
.logo {
  position: relative;
  width: 180px;
}
.nav-links a {
  text-decoration: none;
  color: var(--dark-text);
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
}
.nav-links a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--soft-orange);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.nav-links a:hover::before {
  width: 100%;
}
</style>

<div class="section">
<nav id="header" class="section-container">
    <div class="logo"><img src={nav_logo} alt="Stolon" /></div>
    <ul class="nav-links">
      {#each nav_items as item}
        <li><a href={item.nav_link.url}>{item.nav_link.label}</a></li>
      {/each}
    </ul>
</nav>
{#if slot}
  {@render slot()}
{/if}
</div>