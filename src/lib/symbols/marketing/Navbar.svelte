<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();
  import Icon from '@iconify/svelte';
let mobile_menu;
</script>

<style>
nav {
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: rgba(10, 10, 10, 0.8);
   backdrop-filter: blur(10px);
   transition: all 0.3s ease;
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
   text-transform: uppercase;
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
   nav>.menu-button {
     display: none;
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
     justify-content: center;
     background-color: var(--color-primary-dark);
     text-transform: uppercase;
     box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
     transition: all 0.3s ease-in-out;
     color: #ffffff;
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
    <!-- <a class="menu-button" href={cta.url}>{cta.label}</a>
   
    <div class="mobile-icon">
      <button class="icon-button" onclick={() => mobile_menu = !mobile_menu} name="mobile-menu-button" aria-label="mobile-menu-button">
        {#if !mobile_menu}
          <Icon height={32} icon="ci:hamburger-lg" />
        {:else}
          <Icon height={28} icon="akar-icons:cross" />
        {/if}
      </button>
    </div> -->
  </nav>
</header>

  <!-- Mobile Menu Display: Toggle Based on mobile_menu state -->
{#if mobile_menu}
  <nav>
    <ul class="mobile-menu">
      {#each nav_items as item}
        <li><a href={item.navbar.url}>{item.navbar.label}</a></li>
      {/each}
       <!-- <li>
          <a class="btn-quantum mobile-btn" href={cta.url}>
            {cta.label}
        </a>
      </li> -->
    </ul>   
  </nav>
{/if}

{#if slot}
  {@render slot()}
{/if}
</div>