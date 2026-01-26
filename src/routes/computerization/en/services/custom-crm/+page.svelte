

    <script>
        /** @type {{ data: import('./$types').PageData }} */
        let { data } = $props();
    
    const data_section_0b1ebbfc_0 = {
  "logo": "Stolon ",
  "items": [
    {
      "link": {
        "url": "/services",
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
    
    const data_section_bca97aa1_1 = {
  "icon": {
    "html": "<p><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 13h2m4 0h2m-8 4h2m4 0h2\"/></g></svg></p>",
    "markdown": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 13h2m4 0h2m-8 4h2m4 0h2\"/></g></svg>"
  },
  "head1": "Custom CRMs",
  "parag": "Every business is unique. We design CRM systems that adapt to your processes, not the other way around."
};
    
    const data_section_06c4360d_2 = {
  "rep": [
    {
      "parragraph": "No two businesses are the same, so why force your team into a one-size-fits-all Customer Relationship Management system?"
    },
    {
      "parragraph": "At Computerization, we believe your CRM should adapt to your company's workflow, not the other way around. We design custom CRM solutions that reflect how your organization truly operates, integrating every process into one unified, intelligent platform."
    },
    {
      "parragraph": "A CRM should not be a database. It should be a living system that helps your team understand customers, manage relationships, and make better decisions every day. Our approach transforms your CRM from a static tool into the central nervous system of your business."
    }
  ]
};
    
    const data_section_1a8dce31_3 = {
  "rep": [
    {
      "head": "Our Approach",
      "repeater": [
        {
          "par": "We begin by understanding your structure, goals, and customer journey. Together, we identify the key touchpoints that drive value: sales stages, lead scoring criteria, pipeline visibility, and reporting needs. We then design custom modules, dashboards, and automations that fit perfectly within your business ecosystem."
        },
        {
          "par": "Our team handles every technical and operational step. This includes data migration, CRM architecture design, user training, and full integration with your existing tools such as ERP systems, marketing platforms, email services, and accounting software. Whether you use cloud-based or on-premise solutions, we ensure seamless interoperability and secure data flow across departments."
        }
      ]
    },
    {
      "head": "Why Customization Matters",
      "repeater": [
        {
          "par": "Most off-the-shelf CRM systems claim flexibility but quickly become frustrating. They are either too complex or too limited, forcing teams to adapt their workflow around software limitations. A custom CRM removes that friction. You get a system designed specifically for your reality — intuitive, efficient, and scalable."
        },
        {
          "par": "By aligning your CRM structure with your sales and service strategy, we increase adoption rates, shorten deal cycles, and improve visibility across the organization. Managers gain real-time insights into performance, while teams spend less time entering data and more time nurturing relationships."
        }
      ]
    },
    {
      "head": "Our Expertise",
      "repeater": [
        {
          "par": "Computerization's credibility comes from years of hands-on experience designing and implementing CRM systems for both small teams and multinational organizations. We understand the difference between simplicity and sophistication."
        },
        {
          "par": "For startups and SMEs, we build lean, user-friendly environments that encourage adoption. For large enterprises, we develop advanced CRMs with segmentation, automation, analytics, and AI-driven forecasting capabilities."
        },
        {
          "par": "Our developers and consultants combine technical skill with business insight. They do not just build systems; they create solutions that align with your strategy and scale with your growth. Every CRM we deliver is modular, secure, and easy to maintain."
        }
      ]
    }
  ],
  "par3": "Our developers and consultants combine technical skill with business insight. They do not just build systems; they create solutions that align with your strategy and scale with your growth. Every CRM we deliver is modular, secure, and easy to maintain."
};
    
    const data_section_bf7478b7_4 = {
  "h2": "The Result",
  "cta": {
    "url": "",
    "label": "Start Your CRM Journey",
    "active": false
  },
  "rep": [
    {
      "sp": "Custom CRM Solutions"
    },
    {
      "sp": "CRM Development"
    },
    {
      "sp": "Business Automation"
    },
    {
      "sp": "Customer Relationship Management"
    },
    {
      "sp": "CRM Integration"
    }
  ],
  "par2": "Your team will no longer wrestle with tools or duplicate tasks. Instead, they will focus on what truly matters: building relationships, closing deals, and driving sustainable growth. With Computerization, your CRM becomes more than software. It becomes strategy in motion.",
  "par3": "r",
  "paragraph": "When you choose Computerization, you gain more than a CRM — you gain clarity. You will have a system that connects sales, marketing, and customer service into one seamless experience. The result is faster sales cycles, improved collaboration, and complete visibility of your customer data."
};
    
    const data_section_6baad2c3_5 = {};
    
    const data_section_3e8f9920_6 = {
  "footer": "2025 Stolon. Building the future of business automation."
};
    </script>



{#snippet section_0b1ebbfc_0( { logo, items } )}
<!-- Symbol: NavBar -->
<section id="0b1ebbfc-bdef-43c5-afbf-3e1012f19a29">
<header class="section-container">
  <div class="bar">
    <div class="logo">{logo}</div>
    <nav>
      <ul class="nav-links">
      {#each items as item}
        <a href={item.link.url}>{item.link.label}</a>
      {/each}
      </ul>
      <div class="mobile-icon">
        <button class="icon-button" on:click={() => mobile_menu = !mobile_menu}>
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
    {#each items as item}
      <li><a href={item.link.url}>{item.link.label}</a></li>
    {/each}
   </ul>
 </nav>
{/if}
</section>
{/snippet}

{@render section_0b1ebbfc_0(data_section_0b1ebbfc_0)}

{#snippet section_bca97aa1_1( { icon, head1, parag } )}
<!-- Symbol: Hero -->
<section id="bca97aa1-359c-44e3-8adb-eb9e62660582">
<section class="hero">
        <div class="section-container">
            <div class="hero-content">
                <div class="hero-icon">{@html icon.html}</div>
                <h1>{head1}</h1>
                <p>{parag}</p>
            </div>
        </div>
    </section>

</section>
{/snippet}

{@render section_bca97aa1_1(data_section_bca97aa1_1)}

{#snippet section_06c4360d_2( { rep } )}
<!-- Symbol: Intro -->
<section id="06c4360d-e8aa-47cb-bd6e-5c3266aa3081">
   <section class="intro">
        <div class="section-container">
            <div class="intro-content">
                {#each rep as item}
                  <p>{item.parragraph}</p>
                {/each}
            </div>
        </div>
    </section>


</section>
{/snippet}

{@render section_06c4360d_2(data_section_06c4360d_2)}

{#snippet section_1a8dce31_3( { rep, par3 } )}
<!-- Symbol: Content -->
<section id="1a8dce31-dc98-4e48-a77d-97a6760be87a">
<section class="content-section">
  <div class="section-container">
    {#each rep as item}
      <div class="content-box">
        <h2>{item.head}</h2>
        {#each item.repeater as item2}
          <p>{item2.par}</p>
        {/each}
      </div>
    {/each}
  </div>
</section>
</section>
{/snippet}

{@render section_1a8dce31_3(data_section_1a8dce31_3)}

{#snippet section_bf7478b7_4( { h2, cta, rep, par2, par3, paragraph } )}
<!-- Symbol: TheResult -->
<section id="bf7478b7-b5ee-43aa-a02c-63985b3cb196">
<section class="cta-section">
  <div class="section-container">
      <h2 class="heading">{h2}</h2>
      <p class="parag1">{paragraph}</p>
      <p class="parag2">{par2}</p>
       {#if rep}
            <div class="tags">
              {#each rep as item}
                <span class="tag">{item.sp}</span>
              {/each} 
            </div>
       {/if}
      <a href="#contact" class="cta-button">{cta.label}</a>
        
  </div>
  
</section>
</section>
{/snippet}

{@render section_bf7478b7_4(data_section_bf7478b7_4)}

{#snippet section_6baad2c3_5( _ )}
<!-- Symbol: Cursor -->
<section id="6baad2c3-a439-4419-9eaa-87cd402df1cb">
<div bind:this={cursor} class="cursor"></div>
<div bind:this={particlesContainer} id="particles"></div>
</section>
{/snippet}

{@render section_6baad2c3_5(data_section_6baad2c3_5)}

{#snippet section_3e8f9920_6( { footer } )}
<!-- Symbol: Footer -->
<section id="3e8f9920-186e-4c85-b182-5e3d9f075b68">
<footer id="contact">
    <div class="section-container">
        <p>&copy;{footer}</p>
    </div>
</footer>
</section>
{/snippet}

{@render section_3e8f9920_6(data_section_3e8f9920_6)}


<style>

/* Site Global CSS */

@import url("https://unpkg.com/@primo-app/primo@1.3.64/reset.css");

/* #page {
  font-family: system-ui, sans-serif;
  line-height: 1.6; 
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
  
} */
#page {
  position: relative;
  font-family: system-ui, sans-serif;
  line-height: 1.6; 
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
  overflow: hidden;
}

#page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px),
    linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  animation: gridScroll 20s linear infinite;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

:root {
  --color-bg: #0a0a0a;
  --color-bg-dark: #000000;
  --color-bg-card: rgba(20, 20, 20, 0.6);
  --color-text: #e0e0e0;
  --color-text-dim: #a0a0a0;
  --color-text-muted: #808080;
  --color-primary: #00ff88;
  --color-primary-dark: #00cc99;
  --color-border: rgba(0, 255, 136, 0.2);
  --color-border-hover: rgba(0, 255, 136, 0.5);
  --max-width: 1400px;
}
.section-container {
  max-width: var(--max-width, 1400px);
  margin: 0 auto;
  padding: 3rem var(--padding, 1rem); 
}


.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s;
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
  background: var(--color-primary);
  transition: left 0.3s;
  z-index: -1;
}

.cta-button:hover::before {
  left: 0;
}

.cta-button:hover {
  color: var(--color-bg);
}


/* Symbol: NavBar */
.bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  z-index: 100;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
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


.mobile-menu{
  display:none;
}

.mobile-icon{
  display:none;
}

@media (max-width: 650px){
       .nav-links{
    display:none;
  }
  .mobile-icon{
    display:block;
  }
     nav >.cta-button{
    display:none;
  }
      
  .mobile-menu{
     display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      gap: 1.25rem;
      padding: 1.5rem;
      text-align: center;
      width: 100%;
      max-width: 100%;
      justify-content:center;
      background-color: rgb(0,0,0);
      text-transform: uppercase;
      box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
      color:#fffff;
  }
}
/* Symbol: Hero */
.hero {
    position: relative;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 10;
    max-width: 900px;
}

.hero-icon {
    color:var(--color-primary);
    display: flex;
    justify-content: center;
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 1.3rem;
    color: #ffff;
    line-height: 1.8;
}


/* Symbol: Intro */
.intro {
  position: relative;
  z-index: 10;
  background: rgba(15, 15, 15, 0.6);
}

.intro-content {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:justify;
  max-width: 900px;
  margin: 0 auto;
}

.intro p {
  font-size: 1.15rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.9;
}

.intro p:first-child {
  font-size: 1.3rem;
  color: var(--color-primary);
  font-weight: 500;
}



/* Symbol: Content */
.content-section {
  z-index: 10;
}

.content-box {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 3rem;
  margin-bottom: 3rem;
  transition: all 0.3s;
}

.content-box:hover {
  border-color: var(--color-primary);
  box-shadow: 0 10px 40px rgba(0, 255, 136, 0.2);
}

.content-box h2 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.content-box p {
  font-size: 1.1rem;
  color: #ffff;
  margin-bottom: 1.5rem;
  line-height: 1.9;
}

.content-box p:last-child {
  margin-bottom: 0;
}



/* Symbol: TheResult */

.tags {
    display: flex;
justify-content:center;
/* align-items:center; */
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
}

.tag {
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid var(--color-border);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: var(--color-primary);
    font-size: 0.9rem;
    transition: all 0.3s;
}

.tag:hover {
    background: rgba(0, 255, 136, 0.2);
    border-color: var(--color-primary);
    cursor:pointer;
}

/* CTA Section */
.cta-section {
    position: relative;
    z-index: 10;
    background: rgba(15, 15, 15, 0.8);
    text-align: center;
}

.cta-button {
    display: inline-block;
    padding: 1rem 3rem;
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    margin-top: 2rem;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    transition: left 0.3s;
    z-index: -1;
}

.cta-button:hover::before {
    left: 0;
}

.cta-button:hover {
    color: var(--color-bg);
}

.heading{
  font-size: 2.5rem; 
  color: var(--color-primary); 
  margin-bottom: 1rem;
}
.parag1{
  font-size: 1.2rem; 
  color: #ffff; 
  max-width: 800px; margin: 0 auto;
  line-height: 1.9;
}
.parag2{
  font-size: 1.2rem;
  color: #ffff; 
  max-width: 800px; margin: 1.5rem auto; 
  line-height: 1.9;
}
/* Symbol: Cursor */
 .cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--color-primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            mix-blend-mode: difference;
        }

        .cursor-trail {
            width: 6px;
            height: 6px;
            background: var(--color-primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.6;
        }
/* Symbol: Footer */
footer {
  position: relative;
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
  background: rgba(10, 10, 10, 0.9);
  z-index: 10;
}

footer p {
  color: var(--color-text-muted);
}
</style>
