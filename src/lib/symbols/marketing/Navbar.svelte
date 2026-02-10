<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();
  import Icon from '@iconify/svelte';
let mobile_menu = $state(false);
</script>

<style>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--primary-orange);
  z-index: 100;
}
img {
  position: static;
  max-height: 4.5rem;
  width: auto;
  display: block;
}
.logo {
  position: relative;
  width: 180px;
}
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
}
.nav-links a {
  color: var(--color-accent-silver);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
  transition: all 0.3s;
  position: relative;
}
.menu-button {
  padding: 12px 28px;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-orange));
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}
.logo {
  display: flex;
  align-items: center;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 1.25rem;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  max-width: 100%;
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
.mobile-icon {
  display: none;
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
  }
}
</style>

<div class="section">
<header class="section-container">
  <nav id="navbar">
    <div class="logo"><img src={nav_logo} alt="Stolon" /></div>
    <ul class="nav-links" id="navLinks">
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
</header>
{#if slot}
  {@render slot()}
{/if}
</div>