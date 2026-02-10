<script lang="ts">  let { footer_logo, footer_node, copyright, socials, logo_dark, slot = null } = $props();
  import Icon from '@iconify/svelte';
</script>

<style>
footer {
  background-color: black;
  color: var(--off-white);
  padding: 5rem 5% 3rem;
  position: relative;
  z-index: 1;
}
.footer-links {
  max-width: 200px;
  height: auto;
  margin-bottom: 1.5rem;
}
.footer-links img {
  max-width: 120px;
  margin-bottom: 1rem;
}
.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  margin-bottom: 3rem;
}
.footer-links h4 {
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 400;
}
.footer-links a,
.footer-links span {
  display: block;
  color: var(--off-white);
  text-decoration: none;
  opacity: 0.7;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
}
.footer-links a:hover {
  opacity: 1;
  transform: translateY(-3px);
}
.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.6;
}
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
@media (max-width: 1024px) {
  footer {
    padding: 4rem 5% 2.5rem;
  }
  .footer-content {
    gap: 3rem;
  }
}
@media (max-width: 768px) {
  footer {
    padding: 3.5rem 6% 2.5rem;
  }
  .footer-content {
    flex-wrap: wrap;
    gap: 2rem;
  }
  .footer-links h4 {
    font-size: 0.95rem;
  }
}
@media (max-width: 480px) {
  footer {
    padding: 3rem 7% 2rem;
  }
  .footer-content {
    flex-direction: column;
  }
  .footer-brand h3 {
    font-size: 1.4rem;
  }
  .footer-links a {
    margin-bottom: 0.7rem;
  }
  .footer-bottom {
    font-size: 0.85rem;
    text-align: left;
  }
}
</style>

<div class="section">
<footer id="contact">
  <nav>
  <div class="footer-content">
    {#each footer_node as item, i}
        <div class="footer-links">
          {#if i === 0}
          <img src={footer_logo} alt={footer_logo} />
          {:else}
          <h4>{item.title}</h4>
          {/if}
          {#each item.columns as column}
            {#if column.link.url !== ""}
          <a href={column.link.url} target={i === 0 ? "_blank" : undefined}>{column.link.label}</a>
            {:else}
          <span>{column.link.label}</span>
            {/if}  
          {/each}
          {#if i === 0}
          <div class="socials">
            {#each socials as { social} }
            <a href={social.link.url} target="_blank" title={social.link.label}>
              <Icon icon={social.icon} />
            </a>
            {/each}
          </div>
          {/if}
        </div>
    {/each}
  </div>

  <div class="footer-bottom">
    <p>&copy;{copyright}</p>
  </div>
    </nav>
</footer>
{#if slot}
  {@render slot()}
{/if}
</div>