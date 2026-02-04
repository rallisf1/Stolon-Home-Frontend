<script lang="ts">  let { nav_logo, nav_items, logo_dark, slot = null } = $props();
  let mobile_menu = $state(false);
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.background {
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border-light);
}
nav {
  display: flex;
  gap: 2rem;
  align-items: center;
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
.btn-quantum {
  position: relative;
  padding: 1rem 2.5rem;
  background: var(--btn-bg-quantum);
  border: none;
  border-radius: 50px;
  color: var(--color-text-main);
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 8px 30px var(--color-glow-primary);
}
.btn-quantum {
  position: relative;
  padding: 1rem 2.5rem;
  background: var(--btn-bg-quantum);
  border: none;
  border-radius: 50px;
  color: var(--color-text-main);
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 8px 30px var(--color-glow-primary);
}
.btn-quantum:hover::before {
  left: 100%;
}
.btn-quantum::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 2px;
  background: var(--gradient-primary-wide);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
}
.btn-quantum:hover::after {
  opacity: 1;
  animation: rotate-border 2s linear infinite;
}
@keyframes rotate-border {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.btn-quantum:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 50px var(--color-glow-strong);
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
  nav {
    width: 100%;
    justify-content: flex-end;
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
<header>
  <div class="background section-container">
   <div class="header">
       <div class="logo"><img src={nav_logo} alt="Stolon" /></div>
        <nav>
          <ul class="nav-links">
          {#each nav_items as item}
            <a href={item.nav_link.url}>{item.nav_link.label}</a>
          {/each}
          </ul>
          <!-- <a class="btn-quantum" href={cta.url}>{cta.label}</a> -->
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
  </div>
   {#if mobile_menu}
     <nav>
       <ul class="mobile-menu">
        {#each nav_items  as item}
          <li><a href={item.link.url}>{item.link.label}</a></li>
        {/each}
        <!-- <li>
          <a class="btn-quantum mobile-btn" href={cta.url}>
            {cta.label}
        </a>
      </li> -->
       </ul>
     </nav>
   {/if}
</header>


{#if slot}
  {@render slot()}
{/if}
</div>