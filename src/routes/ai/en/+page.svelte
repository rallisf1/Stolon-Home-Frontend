

    <script>
        /** @type {{ data: import('./$types').PageData }} */
        let { data } = $props();
    
    const data_section_dac0ca3f_0 = {
  "cta": {
    "url": "",
    "label": "Get Started",
    "active": false
  },
  "logo": "STOLON",
  "items": [
    {
      "link": {
        "url": "#solutions",
        "label": "Solutions",
        "active": false
      }
    },
    {
      "link": {
        "url": "#demo",
        "label": "Demo",
        "active": false
      }
    }
  ]
};
    
    const data_section_067f21d2_1 = {
  "items": [
    {
      "class": "btn-quantum",
      "button": {
        "url": "",
        "label": "Schedule a Demo",
        "active": false
      }
    },
    {
      "class": "btn-holo",
      "button": {
        "url": "",
        "label": "Explore Solutions",
        "active": false
      }
    },
    {
      "class": "btn-neon",
      "button": {
        "url": "",
        "label": "Watch Video",
        "active": false
      }
    }
  ],
  "title": "Transform Your Business with AI",
  "description": "Business automations, chatbots, and virtual phone agents reduce costs and improve efficiency. Virtual influencers boost engagement in emerging digital spaces."
};
    
    const data_section_a112e9f0_2 = {
  "cards": [
    {
      "icon": "material-symbols:business-center-rounded",
      "text": "We leverage AI to optimize workflows, predict outcomes, and reduce human error.",
      "title": "Business Automations"
    },
    {
      "icon": "mdi:chat-processing-outline",
      "text": "Conversational AI that understands context and delivers human-like interaction 24/7.",
      "title": "Chatbots"
    },
    {
      "icon": "ic:round-phone",
      "text": "AI-powered phone agents that handle customer calls, freeing up your staff while improving client satisfaction.",
      "title": "Phone Virtual Agent"
    },
    {
      "icon": "heroicons:sparkles",
      "text": "Next-generation brand ambassadors, designed to engage digital natives and boost brand visibility in emerging channels.",
      "title": "Virtual Influencers"
    }
  ],
  "header": "Our AI Solutions"
};
    
    const data_section_8d644b8e_3 = {
  "text": "Companies using AI to reduce costs, improve efficiency, and engage customers in innovative ways.",
  "items": [
    {
      "link": {
        "url": "",
        "label": "Schedule Your Consultation",
        "active": false
      }
    },
    {
      "link": {
        "url": "",
        "label": "Download Brochure",
        "active": false
      }
    }
  ],
  "title": "Ready to Automate Your Business?"
};
    
    const data_section_fedaeb3d_4 = {
  "content": {
    "html": "<p>©2025 Στόλων Ε.Ε.</p>",
    "markdown": "©2025 Στόλων Ε.Ε.\n\n"
  }
};
    </script>



{#snippet section_dac0ca3f_0( { cta, logo, items } )}
<!-- Symbol: NavBar -->
<section id="dac0ca3f-9d42-42c1-8cdf-ff947825e030">
<header>
  <div class="background section-container">
   <div class="header">
        <div class="logo">{logo}</div>
        <nav>
          <ul class="nav-links">
          {#each items as item}
            <a href={item.link.url}>{item.link.label}</a>
          {/each}
          </ul>
          <a class="btn-quantum" href={cta.url}>{cta.label}</a>
            <div class="mobile-icon">
              <button class="icon-button" on:click={() => mobile_menu = !mobile_menu}>
                {#if !mobile_menu}
                  <Icon height={32} icon="ci:hamburger-lg" />
                {:else}
                  <Icon height={28} icon="akar-icons:cross" />
                {/if}
              </button>
            </div>
        </nav>
    </div>
  </div>
   {#if mobile_menu}
     <nav>
       <ul class="mobile-menu">
        {#each items as item}
          <li><a href={item.link.url}>{item.link.label}</a></li>
        {/each}
        <li>
          <a class="btn-quantum mobile-btn" href={cta.url}>
            {cta.label}
        </a>
      </li>
       </ul>
     </nav>
   {/if}
</header>


</section>
{/snippet}

{@render section_dac0ca3f_0(data_section_dac0ca3f_0)}

{#snippet section_067f21d2_1( { items, title, description } )}
<!-- Symbol: Hero -->
<section id="067f21d2-7353-403c-8dec-be1a773eefe9">

<div class="section-container">
<section class="hero">
        <div class="ai-brain" id="aiBrain"></div>
        <div class="hero-content">
            <h1>{title}</h1>
            <p>{description}</p> 
            <div class="hero-buttons">
                {#each items as item}
                <a class="{item.class}" href="{item.button.url}">
                  {item.button.label}
                </a>
                {/each}
            </div>
        </div>
    </section>
</div>
</section>
{/snippet}

{@render section_067f21d2_1(data_section_067f21d2_1)}

{#snippet section_a112e9f0_2( { cards, header } )}
<!-- Symbol: Cards -->
<section id="a112e9f0-b92b-4b04-b7bc-731602e5e7e2">
<div class="section-container">
  <section class="solutions" id="solutions">
        <h2 class="title">{header}</h2>
        <div class="solutions-grid">
            {#each cards as card}
              <div class="solution-card">
                <div class="solution-icon"><Icon height="50" icon={card.icon}/> </div>   
                 <h2>{card.title}</h2>
                  <p>{card.text}</p>
              </div>
            {/each}
        </div>
    </section>
</div>
</section>
{/snippet}

{@render section_a112e9f0_2(data_section_a112e9f0_2)}

{#snippet section_8d644b8e_3( { text, items, title } )}
<!-- Symbol: Cta -->
<section id="8d644b8e-f6a2-48ae-8053-e744568a04f4">
<div class="background">
<div class="section-container">
<section class="cta-section" id="contact">
        <h2>{title}</h2>
        <p>{text}</p>
         <div class="cta-buttons">
          <nav>
          {#each items as item}
            <a href={item.link.url} class="btn-holo">{item.link.label}</a>
          {/each}
          </nav>
        </div>
</section>
</div>
</div>
</section>
{/snippet}

{@render section_8d644b8e_3(data_section_8d644b8e_3)}

{#snippet section_fedaeb3d_4( { content } )}
<!-- Symbol: Footer -->
<section id="fedaeb3d-6b7e-4f11-891b-321a80840e2e">
<footer>
  <nav>
    <div class="section-container">
      <div class="content">
        {@html content.html}
      </div>
    </div>
  </nav>
</footer>
</section>
{/snippet}

{@render section_fedaeb3d_4(data_section_fedaeb3d_4)}


<style>

/* Site Global CSS */

@import url("https://unpkg.com/@primo-app/primo@1.3.64/reset.css");

:root {
    /* ---------- Primary Brand Colors ---------- */
    --color-primary-1: #667eea;
    --color-primary-2: #764ba2;
    --color-primary-3: #f093fb;
    --color-primary-4: #4facfe;

    /* ---------- Background Colors ---------- */
    --color-bg-main: #0a0e27;
    --color-bg-dark: #1a1f3a;
    --color-bg-darker: #1a1f3a;
    --color-bg-card: rgba(26, 31, 58, 0.6);

    /* ---------- Text Colors ---------- */
    --color-text-main: #ffffff;
    --color-text-muted: #a0aec0;

    /* ---------- Borders & Lines ---------- */
    --color-border-light: rgba(124, 58, 237, 0.2);
    --color-border-primary: rgba(102, 126, 234, 0.5);

    /* ---------- Glows & Shadows ---------- */
    --color-glow-primary: rgba(102, 126, 234, 0.4);
    --color-glow-strong: rgba(102, 126, 234, 0.6);
    --color-glow-purple: rgba(118, 75, 162, 0.4);

    /* ---------- Gradients ---------- */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-primary-wide: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    --gradient-holo: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #4facfe);
    --gradient-btn-sweep: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    --gradient-connection: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
    --gradient-topbar: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);

    /* ---------- Special FX Colors ---------- */
    --color-particle: rgba(124, 58, 237, 0.6);
    --color-glitch-red: #ff006e;
    --color-glitch-blue: #00f5ff;

    /* ---------- Button Colors ---------- */
    --btn-bg-quantum: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --btn-bg-liquid: linear-gradient(135deg, #667eea, #764ba2);
    --btn-bg-3d-shadow: linear-gradient(135deg, #4d5eb9 0%, #5a3a7a 100%);

    /* ---------- Transparency & Utility ---------- */
    --transparent-white-10: rgba(255, 255, 255, 0.1);
    --transparent-white-30: rgba(255, 255, 255, 0.3);
    --transparent-purple-20: rgba(102, 126, 234, 0.2);
    --transparent-purple-40: rgba(102, 126, 234, 0.4);
}


#page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #0a0e27;
  color: #ffffff;
  overflow-x: hidden;
}

.section-container {
  max-width: var(--max-width, 1400px);
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

/* Symbol: NavBar */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.background{
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
    gap:1.5rem;
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
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
.btn-quantum:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px var(--color-glow-strong);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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


   nav {
    width: 100%;
    justify-content: flex-end;
  }
      .mobile-icon{
        display:block;
      }
      nav > .btn-quantum {
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
/* Symbol: Hero */
.hero-buttons .btn-quantum {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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

.hero-buttons .btn-quantum::before{
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--gradient-btn-sweep);
    transition: left 0.5s;
}

.hero-buttons .btn-quantum:hover::before {
    left: 100%;
}

.hero-buttons .btn-quantum::after {
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

.hero-buttons .btn-quantum:hover::after {
    opacity: 1;
    animation: rotate-border 2s linear infinite;
}

@keyframes rotate-border {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

.hero-buttons .btn-quantum:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px var(--color-glow-strong);
}


.btn-holo {
    position: relative;
    padding: 1rem 2.5rem;
    background: rgba(26, 31, 58, 0.8);
    border: 2px solid transparent;
    border-radius: 50px;
    color: var(--color-text-main);
    font-weight: 700;
    cursor: pointer;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    background-clip: padding-box;
}

.hero-buttons a {
    position: relative;
    z-index: 10;
}

.btn-holo::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50px;
    background: var(--gradient-holo);
    background-size: 300% 300%;
    z-index: -1;
    animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.btn-holo:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px var(--color-glow-primary);
}


.btn-neon {
    padding: 1rem 2.5rem;
    background: transparent;
    border: 3px solid var(--color-primary-1);
    border-radius: 50px;
    color: var(--color-primary-1);
    font-weight: 700;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s ease;
    text-shadow: 0 0 10px var(--color-glow-primary);
}

.btn-neon:hover {
    color: var(--color-text-main);
    border-color: var(--color-primary-2);
    box-shadow:
        0 0 20px var(--color-glow-primary),
        0 0 40px var(--color-glow-purple),
        inset 0 0 20px var(--transparent-purple-20);
}

.hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.hero h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: var(--gradient-primary-wide);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInUp 1s ease-out;
}

.hero p {
    font-size: 1.5rem;
    color: var(--color-text-muted);
    margin-bottom: 3rem;
    line-height: 1.6;
    animation: fadeInUp 1s ease-out 0.2s backwards;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 1s ease-out 0.4s backwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.ai-brain {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    opacity: 0.1;
    z-index:0;
    pointer-events: none;
}

.brain-node {
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.8);
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.5);
        opacity: 0.7;
    }
}

.brain-connection {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
    transform-origin: left center;
    animation: dataFlow 2s linear infinite;
}

@keyframes dataFlow {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}



/* Symbol: Cards */
.solutions {
  position: relative;
  padding: 8rem 5%;
  z-index: 1;
}

.title{
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto 4rem;
}

.solution-card {
  position: relative;
  padding: 3rem 2rem;
  background: rgba(26, 31, 58, 0.6);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.solution-card:hover::before {
  transform: scaleX(1);
}

.solution-card:hover {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.6);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.solution-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.solution-card h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
}

.solution-card p {
  color: #a0aec0;
  line-height: 1.7;
  font-size: 1.05rem;
}

/* Symbol: Cta */
.cta-section {
    position: relative;
    padding: 8rem 5%;
    text-align: center;
    z-index: 1;
    
}

.background{
  background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.1),
        rgba(118, 75, 162, 0.1)
    );
  
}

.cta-section h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--color-primary-1) 0%, var(--color-primary-3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.cta-section p {
    font-size: 1.25rem;
    color: var(--color-text-muted);
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.btn-holo {
    position: relative;
    padding: 1rem 2.5rem;
    background: rgba(26, 31, 58, 0.8);
    border: 2px solid transparent;
    border-radius: 50px;
    color: var(--color-text-main);
    font-weight: 700;
    cursor: pointer;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    background-clip: padding-box;
}

.btn-holo::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50px;
    background: var(--gradient-holo);
    background-size: 300% 300%;
    z-index: -1;
    animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.btn-holo:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px var(--color-glow-primary);
}

.cta-section nav {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}
/* Symbol: Footer */
.content{
  text-align:center;
}
</style>
