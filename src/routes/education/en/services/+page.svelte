

    <script>
        /** @type {{ data: import('./$types').PageData }} */
        let { data } = $props();
    
    const data_section_e87efe15_0 = {
  "name": "Stolon Education",
  "items": [
    {
      "link": {
        "url": "/education/en",
        "label": "Home",
        "active": false
      }
    },
    {
      "link": {
        "url": "/education/en/services",
        "label": "Services",
        "active": false
      }
    },
    {
      "link": {
        "url": "",
        "label": "Contact",
        "active": false
      }
    }
  ]
};
    
    const data_section_b6370c71_1 = {
  "items": [
    {
      "cta": {
        "url": "/education/en/services/security-seminars",
        "label": "Learn More →",
        "active": false
      },
      "title": "Security Seminars",
      "number": "01",
      "description": "From cybersecurity awareness to GDPR compliance, we design seminars that turn your workforce into your first line of defense."
    },
    {
      "cta": {
        "url": "/education/en/services/process-documentation",
        "label": "Learn More →",
        "active": false
      },
      "title": "Process Documentation",
      "number": "02",
      "description": "Internal processes are common knowledge among old timers, but new hires or department transfers often struggle with them."
    },
    {
      "cta": {
        "url": "/education/en/services/digital-onboarding",
        "label": "Learn More →",
        "active": false
      },
      "title": "Digital Onboarding",
      "number": "03",
      "description": "Smooth employee integration with digital learning paths, ensuring new hires are productive from day one."
    }
  ],
  "title": "Thoughtfully designed pathways for growth",
  "description": " Each offering is carefully shaped around the belief that learning should feel natural, meaningful, and deeply human."
};
    
    const data_section_09a960fd_2 = {};
    
    const data_section_8ae4b708_3 = {
  "cta": {
    "url": "/contact",
    "label": "Schedule a Consultation",
    "active": false
  },
  "title": "Ready to strengthen your human firewall?",
  "description": "When you partner with STOLON, cybersecurity becomes everyone's job. You build not only technical resilience but also a security culture that strengthens your organization from within."
};
    
    const data_section_e606d2e6_4 = {
  "items": [
    {
      "title": "Services",
      "columns": [
        {
          "link": {
            "url": "/education/en/services/security-seminars",
            "label": "Security Seminars",
            "active": false
          }
        },
        {
          "link": {
            "url": "/education/en/services/process-documentation",
            "label": "Process Documentation",
            "active": false
          }
        },
        {
          "link": {
            "url": "/education/en/services/digital-onboarding",
            "label": "Digital Onboarding",
            "active": false
          }
        }
      ]
    },
    {
      "title": "stolon's branch",
      "columns": [
        {
          "link": {
            "url": "",
            "label": "Stolon Ai",
            "active": false
          }
        },
        {
          "link": {
            "url": "",
            "label": "Stolon Computerization",
            "active": false
          }
        },
        {
          "link": {
            "url": "",
            "label": "Stolon Business",
            "active": false
          }
        },
        {
          "link": {
            "url": "",
            "label": "Stolon Marketing",
            "active": false
          }
        }
      ]
    }
  ],
  "title": "Stolon Education",
  "copyright": "2025 Stolon all copyrights reserved",
  "description": "Process & security seminars that transform staff into your company's strongest defense line. Onboarding programs that integrate new hires smoothly and efficiently."
};
    </script>



{#snippet section_e87efe15_0( { name, items } )}
<!-- Symbol: Navbar -->
<section id="e87efe15-d139-490f-b0d6-dcf9fef5c9c2">
<nav id="header" class="section-container">
    <div class="logo">{name}</div>
    <ul class="nav-links">
      {#each items as item}
        <li><a href={item.link.url}>{item.link.label}</a></li>
      {/each}
    </ul>
</nav>
</section>
{/snippet}

{@render section_e87efe15_0(data_section_e87efe15_0)}

{#snippet section_b6370c71_1( { items, title, description } )}
<!-- Symbol: Services -->
<section id="b6370c71-7a65-4ba7-8f04-e8d2e858e2c9">
<div class="section-container">
  <section id="services" class="services">
    <div class="section-header">
      <h2 class="section-title">{title}</h2>
      <p class="section-description">{description}</p>
    </div>
  
    <div class="service-layout">
      {#each items as item}
        <div class="service-card">
          <div class="service-number">{item.number}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.cta.url} class="service-link">{item.cta.label}</a>
        </div>
      {/each}
    </div>
  </section>
</div>
</section>
{/snippet}

{@render section_b6370c71_1(data_section_b6370c71_1)}

{#snippet section_09a960fd_2( _ )}
<!-- Symbol: circles -->
<section id="09a960fd-3017-41aa-ac63-b3d17e3baad5">
<div class="floating-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
</div>
</section>
{/snippet}

{@render section_09a960fd_2(data_section_09a960fd_2)}

{#snippet section_8ae4b708_3( { cta, title, description } )}
<!-- Symbol: Cta -->
<section id="8ae4b708-3923-4a71-8120-3741fc91832c">
<div class="section-container">
<section class="cta-section">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={cta.url} class="cta-button">{cta.label}</a>
</section>
</div>
</section>
{/snippet}

{@render section_8ae4b708_3(data_section_8ae4b708_3)}

{#snippet section_e606d2e6_4( { items, title, copyright, description } )}
<!-- Symbol: Footer -->
<section id="e606d2e6-4556-42dc-8746-68c4466a8469">
<footer id="contact">
  <nav>
  <div class="footer-content">
    <div class="footer-brand">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    {#each items as item}
        <div class="footer-links">
         <h4>{item.title}</h4> 
          {#each item.columns as column}
        
          <a href={column.link.url}>{column.link.label}</a>
          {/each}
        </div>
    {/each}
  </div>

  <div class="footer-bottom">
    <p>&copy;{copyright}</p>
  </div>
    </nav>
</footer>
</section>
{/snippet}

{@render section_e606d2e6_4(data_section_e606d2e6_4)}


<style>

/* Site Global CSS */

@import url("https://unpkg.com/@primo-app/primo@1.3.64/reset.css");


#page {
  font-family: 'Georgia', serif;
  color: var(--dark-text);
  line-height: 1.8; 
  font-size: 1rem;
  background-color: var(--off-white);
}

:root {
  --beige: #E8DCC4;
  --sage: #9CAF88;
  --off-white: #F5F5F0;
  --soft-orange: #E8956B;
  --dark-text: #3A3A3A;
}

.section-container {
  max-width: var(--max-width, 1450px);
  margin: 0 auto;
  padding: 3rem var(--padding, 1rem); 
}

.heading {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  margin: 0;
}

.button {
  color: white;
  background: var(--color-accent);
  border-radius: 5px;
  padding: 8px 20px;
  transition: var(--transition);

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  } 

  &.inverted {
    background: transparent; 
    color: var(--color-accent); 
    border: 2px solid var(--color-accent);
  }
}


/* Symbol: Navbar */
header {
  background: var(--off-white);
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
}

header.scrolled {
  background: rgba(232, 220, 196, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.logo {
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--dark-text);
  letter-spacing: 2px;
  font-style: italic;
}

.nav-links {
  display: flex;
  gap: 3rem;
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
/* Symbol: Services */
.services {
  padding: 8rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  margin-bottom: 5rem;
}

.section-title {
  font-size: 3.5rem;
  color: var(--dark-text);
  font-weight: 300;
  line-height: 1.2;
}

.section-description {
  font-size: 1.1rem;
  color: var(--dark-text);
  opacity: 0.7;
  line-height: 2;
}

.service-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.service-card {
  background: white;
  padding: 3rem;
  border-radius: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 3px solid transparent;
  position: relative;
  min-height: 320px;
  display: flex;
  flex-direction: column;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(135deg, var(--beige), var(--off-white));
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.service-card:hover::after {
  width: 100%;
}

.service-card:nth-child(1) { border-left-color: var(--sage); }
.service-card:nth-child(2) { border-left-color: var(--soft-orange); }
.service-card:nth-child(3) { border-left-color: var(--beige); }
.service-card:nth-child(4) { border-left-color: #C4A77D; }

.service-card:hover {
  transform: translateX(10px);
  border-left-width: 6px;
}

.service-number {
  font-size: 4rem;
  opacity: 0.1;
  font-weight: 700;
  margin-bottom: -2rem;
  font-family: 'Segoe UI', sans-serif;
}

.service-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--dark-text);
  font-weight: 400;
}

.service-card p {
  color: var(--dark-text);
  opacity: 0.75;
  line-height: 1.9;
  flex-grow: 1;
}

.service-link {
  color: var(--soft-orange);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-top: 1.5rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.service-link:hover {
  transform: translateX(5px);
}

/* Symbol: circles */
.floating-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
}

.shape {
    position: absolute;
    opacity: 0.15;
    animation: float 20s infinite ease-in-out;
}

.shape-1 {
    width: 300px;
    height: 300px;
    background: var(--sage);
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    top: 10%;
    left: -100px;
    animation-delay: 0s;
}

.shape-2 {
    width: 250px;
    height: 250px;
    background: var(--soft-orange);
    border-radius: 41% 59% 42% 58% / 45% 60% 40% 55%;
    top: 60%;
    right: -80px;
    animation-delay: 5s;
}

.shape-3 {
    width: 200px;
    height: 200px;
    background: var(--beige);
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    top: 80%;
    left: 10%;
    animation-delay: 10s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(120deg); }
    66% { transform: translate(-20px, 20px) rotate(240deg); }
}

/* Symbol: Cta */
.cta-section {
    text-align: center;
}

.cta-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--dark-text);
    font-weight: 300;
}

.cta-section p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    color: var(--dark-text);
    opacity: 0.8;
}

.cta-button {
    display: inline-block;
    padding: 1.2rem 3rem;
    background: transparent;
    color: var(--dark-text);
    text-decoration: none;
    border: 2px solid var(--dark-text);
    font-weight: 400;
    transition: all 0.4s ease;
    letter-spacing: 1px;
    font-size: 1rem;
    position: relative;
    overflow: hidden;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--soft-orange);
    transition: all 0.4s ease;
    z-index: -1;
}

.cta-button:hover::before {
    left: 0;
}

.cta-button:hover {
    color: white;
    border-color: var(--soft-orange);
}
@media (max-width: 1024px) {
  .cta-section h2 {
    font-size: 2.1rem;
  }

  .cta-section p {
    font-size: 1.1rem;
  }

  .cta-button {
    padding: 1.1rem 2.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-section p {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }

  .cta-button {
    padding: 1rem 2.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .cta-section h2 {
    font-size: 1.6rem;
    line-height: 1.25;
  }

  .cta-section p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 0.85rem;
    letter-spacing: 0.8px;
  }
}

/* Symbol: Footer */
footer {
    background-color: var(--dark-text);
    color: var(--off-white);
    padding: 5rem 5% 3rem;
    position: relative;
    z-index: 1;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 400;
    font-style: italic;
}

.footer-brand p {
    opacity: 0.7;
    line-height: 1.9;
}

.footer-links h4 {
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-weight: 400;
}

.footer-links a {
    display: block;
    color: var(--off-white);
    text-decoration: none;
    opacity: 0.7;
    margin-bottom: 0.8rem;
    transition: all 0.3s ease;
}

.footer-links a:hover {
    opacity: 1;
    transform: translateX(5px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    opacity: 0.6;
}

@media (max-width: 1024px) {
  footer {
    padding: 4rem 5% 2.5rem;
  }

  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 3rem;
  }

  .footer-brand h3 {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  footer {
    padding: 3.5rem 6% 2.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .footer-brand {
    grid-column: span 2;
  }

  .footer-brand h3 {
    font-size: 1.5rem;
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
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand h3 {
    font-size: 1.4rem;
  }

  .footer-links a {
    margin-bottom: 0.7rem;
  }

  .footer-bottom {
    font-size: 0.85rem;
  }
}

</style>
