

    <script>
        /** @type {{ data: import('./$types').PageData }} */
        let { data } = $props();
    
    const data_section_8a5f23c4_0 = {
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
    
    const data_section_4a7fae25_1 = {
  "icon": {
    "html": "<p><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\"><!-- Icon from Sharp free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" d=\"M20 16.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM13.5 23v-1.5s1.5-1 4-1s4 1 4 1V23m-11-3H5v-5.5m14-5V4h-5.5M9 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM2.5 11V9.5s1.5-1 4-1s4 1 4 1V11\"/></svg></p>",
    "markdown": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\"><!-- Icon from Sharp free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" d=\"M20 16.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM13.5 23v-1.5s1.5-1 4-1s4 1 4 1V23m-11-3H5v-5.5m14-5V4h-5.5M9 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM2.5 11V9.5s1.5-1 4-1s4 1 4 1V11\"/></svg>"
  },
  "head1": "Collaboration",
  "parag": "Secure file sharing, communication, and teamwork hosted on your own cloud. Flexible, scalable, and fully under your control."
};
    
    const data_section_bec2caeb_2 = {
  "rep": [
    {
      "parragraph": "Collaboration is the backbone of every modern organization, yet many companies depend on third-party cloud platforms that compromise privacy, flexibility, or long-term cost control. At STOLON, we provide a better way. Our Nextcloud-based collaboration environments give you full control of your data, communication, and teamwork tools, all hosted securely on your own infrastructure."
    },
    {
      "parragraph": "Nextcloud is an open-source, enterprise-grade collaboration platform that integrates file sharing, communication, and project management into a single ecosystem. With STOLON’s implementation, your team gains the power of the cloud without sacrificing ownership or compliance. You control who accesses your data, where it is stored, and how it is used."
    }
  ]
};
    
    const data_section_cca66def_3 = {
  "rep": [
    {
      "head": "Why Nextcloud",
      "repeater": [
        {
          "par": "Unlike mainstream cloud services that store data on external servers, Nextcloud keeps everything under your direct supervision. Your files, messages, and meeting records never leave your own environment. This guarantees complete privacy, GDPR compliance, and full regulatory alignment."
        },
        {
          "par": "The platform provides everything your team needs to collaborate in real time. It supports secure file sharing, real-time co-editing of documents, group chat, video conferencing, and integrated calendar management. Teams can work together from any location, on any device, while keeping communication centralized and protected."
        }
      ]
    },
    {
      "head": "Our Approach",
      "repeater": [
        {
          "par": "STOLON manages every aspect of your Nextcloud deployment. We handle installation, configuration, user management, and ongoing maintenance. Our engineers implement security policies, backups, mobile access, and integration with existing IT systems, ensuring seamless operation."
        },
        {
          "par": "We design collaboration infrastructures that grow with you. Whether you are a small team or a multinational organization, we scale resources and permissions to match your evolution. For additional customization, we integrate Nextcloud with your ERP, CRM, and project management systems, creating a unified digital workspace."
        },
        {
          "par": "To help your team make the most of the platform, we also provide training sessions and onboarding material. Employees learn how to collaborate effectively while following security best practices, ensuring adoption and consistency across departments."
        }
      ]
    },
    {
      "head": "The Benefits",
      "repeater": [
        {
          "par": "The advantages of Nextcloud collaboration go far beyond storage. You gain independence, privacy, and scalability while reducing dependence on external providers. Your organization saves on recurring licensing fees, avoids vendor lock-in, and retains full control over sensitive information."
        },
        {
          "par": "Security and compliance are embedded in every layer. Nextcloud supports end-to-end encryption, two-factor authentication, and advanced access control, protecting data against unauthorized access and external threats. All activity is logged for transparency and auditability, making it ideal for industries that handle confidential or regulated information."
        }
      ]
    }
  ],
  "par3": "Our developers and consultants combine technical skill with business insight. They do not just build systems; they create solutions that align with your strategy and scale with your growth. Every CRM we deliver is modular, secure, and easy to maintain."
};
    
    const data_section_8f280abd_4 = {
  "h2": "Why STOLON",
  "cta": {
    "url": "",
    "label": "Start Your Collaboration",
    "active": false
  },
  "rep": [
    {
      "sp": "Nextcloud Collaboration"
    },
    {
      "sp": "Self-Hosted Collaboration Solutions"
    },
    {
      "sp": "Secure Cloud Collaboration"
    },
    {
      "sp": "Enterprise File Sharing"
    },
    {
      "sp": "Data Privacy Cloud Solutions"
    }
  ],
  "par2": "Our team combines IT engineering expertise with a deep understanding of data governance and compliance. We do not simply install software; we build ecosystems that reflect your culture and goals.",
  "par3": "r",
  "paragraph": "STOLON’s credibility comes from delivering reliable, enterprise-grade cloud infrastructures for businesses that prioritize both innovation and integrity."
};
    
    const data_section_5b3891f3_5 = {};
    
    const data_section_fcf718ec_6 = {
  "footer": "2025 Stolon. Building the future of business automation."
};
    </script>



{#snippet section_8a5f23c4_0( { logo, items } )}
<!-- Symbol: NavBar -->
<section id="8a5f23c4-057f-4dd1-9d4c-90c3298280ee">
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

{@render section_8a5f23c4_0(data_section_8a5f23c4_0)}

{#snippet section_4a7fae25_1( { icon, head1, parag } )}
<!-- Symbol: Hero -->
<section id="4a7fae25-f438-4f4c-b574-a41706a2eb80">
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

{@render section_4a7fae25_1(data_section_4a7fae25_1)}

{#snippet section_bec2caeb_2( { rep } )}
<!-- Symbol: Intro -->
<section id="bec2caeb-3528-44d6-811e-91e36aabf82a">
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

{@render section_bec2caeb_2(data_section_bec2caeb_2)}

{#snippet section_cca66def_3( { rep, par3 } )}
<!-- Symbol: Content -->
<section id="cca66def-d8ad-4cd6-945f-388ef10a3fd2">
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

{@render section_cca66def_3(data_section_cca66def_3)}

{#snippet section_8f280abd_4( { h2, cta, rep, par2, par3, paragraph } )}
<!-- Symbol: TheResult -->
<section id="8f280abd-9404-480f-a03e-130514fe815a">
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

{@render section_8f280abd_4(data_section_8f280abd_4)}

{#snippet section_5b3891f3_5( _ )}
<!-- Symbol: Cursor -->
<section id="5b3891f3-bf4f-4660-af10-7ff333a732a1">
<div bind:this={cursor} class="cursor"></div>
<div bind:this={particlesContainer} id="particles"></div>
</section>
{/snippet}

{@render section_5b3891f3_5(data_section_5b3891f3_5)}

{#snippet section_fcf718ec_6( { footer } )}
<!-- Symbol: Footer -->
<section id="fcf718ec-0904-4740-9556-e356b373eca3">
<footer id="contact">
    <div class="section-container">
        <p>&copy;{footer}</p>
    </div>
</footer>
</section>
{/snippet}

{@render section_fcf718ec_6(data_section_fcf718ec_6)}


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
