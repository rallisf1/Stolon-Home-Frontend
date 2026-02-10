<script lang="ts">  let { header6, text6, button6, slot = null } = $props();</script>

<style>
.contact {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--navy) 0%, var(--midnight) 100%);
}
.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  gap: 2rem;
}
.contact-content h2 {
  font-size: 2.5rem;
}
.contact-content p {
  font-size: 1.2rem;
  color: var(--steel);
}
.cta-btn {
  width: fit-content;
  display: block;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--accent-bright), var(--accent));
  color: var(--white);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.4s;
  box-shadow: 0 10px 30px rgba(100, 149, 237, 0.3);
  position: relative;
  overflow: hidden;
}
.cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}
.cta-btn:hover::before {
  left: 100%;
}
.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(100, 149, 237, 0.5);
}
@media (max-width: 768px) {
  .contact {
    padding: 3rem 15px;
  }
  .contact-content h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
  .contact-content p {
    font-size: 1.2rem;
    line-height: 1.2;
  }
  .cta-btn {
    padding: 0.75rem 1.5rem;
  }
}
</style>

<div class="section">
<section class="contact" id="contact">
        <div class="section-container">
            <div class="contact-content">
                <h2>{header6}</h2>
                <p>{text6}</p>
                <a href={button6.url} class="cta-btn">{button6.label}</a>
            </div>
        </div>
    </section>
{#if slot}
  {@render slot()}
{/if}
</div>