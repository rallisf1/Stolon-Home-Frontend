<script lang="ts">  let { nav_logo, logo_dark, nav_items, slot = null } = $props();
  let mobile_menu = $state(false);
</script>

<style>
.bar {
  position: sticky;
  top: 1rem;
  margin: 0 auto;
  width: calc(100% - 2rem);
  max-width: 1400px;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(15, 15, 15, 0.75);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
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
nav a {
  color: var(--color-text);
  text-decoration: none;
  margin-left: 2rem;
  transition: all 0.3s;
  position: relative;
}
nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s;
}
nav a:hover::after {
  width: 100%;
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
  justify-content: center;
  background-color: rgb(0, 0, 0);
  text-transform: uppercase;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  margin-top: -2.5rem;
}
.mobile-icon {
  display: none;
}
@media (max-width: 650px) {
  .nav-links {
    display: none;
  }
  .mobile-icon {
    display: block;
  }
  nav>.cta-button {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>

<div class="section">
<header class="section-container">
  <div class="bar">
    <div class="logo"><img src={nav_logo} alt="Stolon" /></div>
    <nav>
      <ul class="nav-links">
       
          {#each nav_items as item}
            <a href={item.nav_link.url}>{item.nav_link.label}</a>
          {/each}
    
      </ul>
      <div class="mobile-icon">
        <button class="icon-button" onclick={() => mobile_menu = !mobile_menu}>
          {#if !mobile_menu}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from coolicons by Kryston Schwarze - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/></svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Akar Icons by Arturo Wibawa - https://github.com/artcoholic/akar-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>
          {/if}
        </button>
      </div>
    </nav>
  </div>
</header>
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