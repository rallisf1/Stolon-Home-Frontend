<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();
  let mobile_menu = $state(false);
</script>

<style>
nav {
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(192, 192, 192, 0.1);
}
nav .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.background {
  /* background: rgba(10, 14, 39, 0.8); */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border-light);
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--color-primary-dark);
    gap: 1rem;
    padding: 1.5rem;
    text-transform: uppercase;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    color: #ffffff;
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