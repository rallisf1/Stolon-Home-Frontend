<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();
  let mobile_menu = $state(false);
</script>

<style>
nav {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(192, 192, 192, 0.12);
}
nav .wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  width: 180px;
}
.logo img {
  display: block;
  max-height: 4.5rem;
  width: auto;
}
.logo img {
  filter: drop-shadow(0 0 6px rgba(0, 255, 136, 0.25));
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}
.nav-links a {
  color: var(--silver);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--white);
  transition: width 0.3s;
}
.nav-links a:hover {
  color: var(--white);
}
.nav-links a:hover::after {
  width: 100%;
  color: white;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--primary);
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
  .mobile-menu {
    display: flex;
  }
}
</style>

<div class="section">
<header class="background">
  <div class="section-container">
    <nav>
      <div class="wrapper">
        <div class="logo"><img src={nav_logo} alt="Stolon" /></div>          
        <ul class="nav-links">
          {#each nav_items as item}
            <li><a href={item.nav_link.url}>{item.nav_link.label}</a></li>
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
      </div>
      
      </nav>
    </div>
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