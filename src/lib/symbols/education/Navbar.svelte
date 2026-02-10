<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();
  let mobile_menu = $state(false);
</script>

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
  content: "";
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
.logo {
  position: relative;
  width: 180px;
}
.mobile-menu {
  display: none;
}
.mobile-icon {
  display: none;
  margin-top: 2rem;
}
@media (max-width: 650px) {
  .nav-links {
    display: none;
  }
  nav {
    width: 100%;
    justify-content: space-between;
  }
  .mobile-icon {
    display: block;
  }
  nav>.btn-quantum {
    display: none;
  }
  .mobile-menu li {
    width: 100%;
  }
  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 1.25rem;
    padding: 1.5rem;
    text-align: center;
    width: 100%;
    max-width: 100%;
    background: var(--beige);
  }
  .mobile-menu a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--silver);
    text-decoration: none;
    font-weight: 600;
  }
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
     <div class="mobile-icon">
        <button class="icon-button" onclick={() => mobile_menu = !mobile_menu}>
          {#if !mobile_menu}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/>
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/>
            </svg>
          {/if}
        </button>
      </div>
</nav>
  {#if mobile_menu}
    <nav>
      <ul class="mobile-menu">
        {#each nav_items as item}
          <li><a href={item.nav_link.url}>{item.nav_link.label}</a></li>
        {/each}
      </ul>
    </nav>
  {/if}
{#if slot}
  {@render slot()}
{/if}
</div>