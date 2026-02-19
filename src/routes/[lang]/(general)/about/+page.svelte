<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { previousUrl } from "$lib/stores";

    let { data } = $props();

    let language = $derived(data.lang);
    let translations = $derived((data as any).translations);

    onMount(() => {
        import("altcha");
    });

    const goBack = () => {
        if($previousUrl === '') {
            goto(`/${language}`);
        } else {
            goto($previousUrl);
        }
    }
</script>

<svelte:head>
<title>{translations[language].about.title}</title>
<meta name="description" content={translations[language].about.description} />
<meta property="og:title" content={translations[language].about.title}>
<meta property="og:description" content={translations[language].about.description}>
<meta name="twitter:title" content={translations[language].about.title}>
<meta name="twitter:description" content={translations[language].about.description}>
</svelte:head>

<div class="hero">
    <div class="hero-inner">
        <div>
        <div class="hero-kicker">{translations[language].about.kicker}</div>
        <h2>{translations[language].about.head1}<br><span class="gradient-text">{translations[language].about.head2}<br>{translations[language].about.head3}</span><br>{translations[language].about.head4}</h2>
        <p class="hero-body">{translations[language].about.body}</p>
        </div>
        <div class="hero-stats">
        <div class="hero-stat">
            <div class="stat-val">{translations[language].about.statval1}</div>
            <div class="stat-desc">{translations[language].about.statdesc1}</div>
        </div>
        <div class="hero-stat">
            <div class="stat-val">100%</div>
            <div class="stat-desc">{translations[language].about.statdesc2}</div>
        </div>
        <div class="hero-stat">
            <div class="stat-val">0</div>
            <div class="stat-desc">{translations[language].about.statdesc3}</div>
        </div>
        </div>
    </div>
</div>
<main>
    <div class="section reveal">
        <div class="section-label">{translations[language].about.label1}</div>
        <div class="sec-grid">
        <div class="sec-title">{translations[language].about.title1}<small>{translations[language].about.titlesmall1}</small></div>
        <div class="field">{translations[language].about.field}</div>
        </div>
    </div>
    <div class="section reveal">
        <div class="section-label">{translations[language].about.label2}</div>
        <div class="sec-grid">
        <div class="sec-title">{translations[language].about.title2}<small>{translations[language].about.titlesmall2}</small></div>
        <ul class="field-list">
            <li>{translations[language].about.list1}</li>
            <li>{translations[language].about.list2}</li>
            <li>{translations[language].about.list3}</li>
            <li>{translations[language].about.list4}</li>
        </ul>
        </div>
    </div>
    <div class="section reveal">
        <div class="section-label">{translations[language].about.label3}</div>
        <div class="sec-grid">
        <div class="sec-title">{translations[language].about.title3}<small>{translations[language].about.titlesmall3}</small></div>
        <ol class="field-steps">
            <li><span class="step-badge">1</span>{translations[language].about.step1}</li>
            <li><span class="step-badge">2</span>{translations[language].about.step2}</li>
            <li><span class="step-badge">3</span>{translations[language].about.step3}</li>
            <li><span class="step-badge">4</span>{translations[language].about.step4}</li>
        </ol>
        </div>
    </div>
    <div class="section reveal">
        <div class="section-label">{translations[language].about.label4}</div>
        <div class="sec-grid">
        <div class="sec-title">{translations[language].about.title4}<small>{translations[language].about.titlesmall4}</small></div>
        <ul class="field-principles">
            <li><span class="p-dot"></span>{translations[language].about.dot1}</li>
            <li><span class="p-dot"></span>{translations[language].about.dot2}</li>
            <li><span class="p-dot"></span>{translations[language].about.dot3}</li>
            <li><span class="p-dot"></span>{translations[language].about.dot4}</li>
        </ul>
        </div>
    </div>
    <div class="section reveal">
        <div class="section-label">{translations[language].about.label5}</div>
        <div class="sec-grid">
        <div class="sec-title">{translations[language].about.title5}<small>{translations[language].about.titlesmall5}</small></div>
        <div class="office-grid">
            <div class="map-field">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.1953277409284!2d23.74769391250023!3d37.97257067181924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd4338cd61f1%3A0x3da3ea2e1f1b9108!2sEfroniou%2026%2C%20Kesariani%20161%2021!5e0!3m2!1sen!2sgr!4v1771500221471!5m2!1sen!2sgr" width="100%" height="400" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="map-label-overlay">{translations[language].about.overlay}</div>
            </div>
            <div class="office-right">
            <div class="field" style="font-size:0.9rem; line-height:1.8">
                {translations[language].about.field2}
            <div class="chips">
                <span class="chip">Meetings</span>
                <span class="chip">{translations[language].about.chip}</span>
                <span class="chip alt">Data Vault</span>
                <span class="chip alt">Confidential Computing</span>
                <span class="chip">Metro Access</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="btn-row reveal">
        <a href="/{language}/contact" class="btn btn-primary">{translations[language].about.primary}</a>
        <button onclick={goBack} class="btn btn-secondary">{$previousUrl === '' ? translations[language].about.secondary : translations[language].general.back}</button>
    </div>
</main>
<style>

    :root{
        --green: #15803D !important;
        --green-dark:   #166534;
        --green-pale:   #f0fdf4;
        --green-border: rgba(62, 155, 69, 0.2);
        --red:          #DC2626;
        --bg:           #ffffff;
        --bg-soft:      #f9fafb;
        --text:         #1a1a1a;
        --text-muted:   #6b7280;
        --input-bg:     #f3f4f6;
    }

    .hero {
    margin-top: 80px;
    border-bottom: none;
    padding: 6rem 3rem 5rem;
    }

    .hero::before {
        content: '';
        width: 500px; height: 500px; border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
        pointer-events: none;
    }
    .hero::after {
        content: '';
        position: absolute; bottom: -100px; right: -50px;
        width: 400px; height: 400px; border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
        pointer-events: none;
    }

    .hero-inner {
        max-width: 1100px; margin: 0 auto;
        display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        position: relative; z-index: 2;
    }

    .hero-kicker {
        font-size: 0.68rem; 
        font-weight: 600; 
        letter-spacing: 0.22em;
        text-transform: uppercase; 
        color: var(--color-text-main);
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center; 
        gap: 0.6rem;
    }
    .hero-kicker::before { content: ''; width: 20px; height: 1px; background: var(--color-primary-1); }

    .hero h2 {
        font-size: clamp(2.2rem, 4vw, 3.5rem);
        font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem;
        color: #fff;
    }

    .hero h2 .gradient-text { color: rgba(255,255,255,0.6); font-weight: 300; font-style: italic; }

    .hero-body {
        font-size: 1rem; 
        line-height: 1.8; 
        color: rgba(255, 255, 255, 0.8);
    }

    /* Stats */
    .hero-stats { display: flex; flex-direction: column; gap: 0; }

    .hero-stat {
        padding: 1.75rem 0;
        border-bottom: 1px solid var(--green-border);
        display: flex; justify-content: space-between; align-items: baseline; gap: 2rem;
    }
    .hero-stat:first-child { border-top: 1px solid var(--color-border-light); }

    .stat-val {
        font-size: 2rem; font-weight: 700; color: #fff; flex-shrink: 0;
    }

    .stat-desc {
        font-size: 0.82rem; 
        color: rgba(255, 254, 254, 0.719);
        text-align: right; 
        line-height: 1.5;
    }

    main {
        max-width: 1100px; margin: 0 auto;
        padding: 0 3rem 5rem;
    }

    .section {
        padding: 4rem 0;
        border-bottom: 1px solid var(--green-border);
    }
    .section:last-of-type { border-bottom: none; }

    .section-label {
        display: flex; align-items: center; gap: 0.75rem;
        font-size: 0.68rem; font-weight: 600; letter-spacing: 0.22em;
        text-transform: uppercase; color: var(--green);
        margin-bottom: 2rem;
    }
    .section-label::before {
        content: ''; width: 20px; height: 2px;
        background: var(--green);
    }

    .sec-grid {
        display: grid; grid-template-columns: 220px 1fr; gap: 3rem; align-items: start;
    }

    .sec-title {
        font-size: 1.05rem; font-weight: 600; color: var(--text); line-height: 1.4;
    }
    .sec-title small {
        display: block; font-size: 0.8rem; font-weight: 400;
        color: var(--text-muted); margin-top: 0.4rem; line-height: 1.5;
    }

    .field {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid var(--green-border);
        border-radius: 6px;
        background: var(--input-bg);
        font-family: inherit;
        font-size: 0.95rem;
        color: var(--text);
        line-height: 1.7;
        transition: border-color 0.25s, box-shadow 0.25s;
        backdrop-filter: blur(8px);
    }
    .field:hover {
        border-color:var(--green-pale);
        box-shadow: 0 0 0 3px rgba(62, 155, 70, 0.1);
    }

    .field-list {
        list-style: none;
        border: 2px solid var(--green-border);
        border-radius: 6px;
        background: var(--input-bg);
        overflow: hidden;
        backdrop-filter: blur(8px);
        transition: border-color 0.25s, box-shadow 0.25s;
    }
    .field-list:hover {
        border-color: var(--green-pale);
        box-shadow: 0 0 0 3px rgba(62,155,69,0.1);
    }
    .field-list li {
        display: flex; align-items: center; gap: 0.75rem;
        padding: 0.85rem 1rem;
        border-bottom: 1px solid var(--green-border);
        font-size: 0.93rem; color: var(--text);
        transition: background 0.2s;
    }
    .field-list li:last-child { border-bottom: none; }
    .field-list li:hover { background: var(--green-dark); }
    .field-list li::before {
    content: '→';
    background: var(--green);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700; flex-shrink: 0;
    }

    .field-steps {
        list-style: none;
        border: 2px solid var(--green-border);
        border-radius: 6px;
        background: var(--input-bg);
        overflow: hidden;
        backdrop-filter: blur(8px);
        transition: border-color 0.25s, box-shadow 0.25s;
    }
    .field-steps:hover {
        border-color: var(--green-pale);
        box-shadow: 0 0 0 3px rgba(62,155,69,0.1);
    }
    .field-steps li {
        display: flex; align-items: center; gap: 1rem;
        padding: 0.9rem 1rem;
        border-bottom: 1px solid var(--green-border);
        font-size: 0.93rem; color: var(--text);
        transition: background 0.2s;
    }
    .field-steps li:last-child { border-bottom: none; }
    .field-steps li:hover { background: var(--green-dark);}

    .step-badge {
        width: 24px; height: 24px; border-radius: 50%;
        background: var(--green-dark); color: #fff;
        font-size: 0.65rem; font-weight: 700;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
    }

    .field-principles {
        list-style: none;
        border: 2px solid var(--green-border);
        border-radius: 6px;
        background: var(--input-bg);
        overflow: hidden;
        backdrop-filter: blur(8px);
        transition: border-color 0.25s, box-shadow 0.25s;
    }
    .field-principles:hover {
        border-color: var(--green-pale);
        box-shadow: 0 0 0 3px rgba(62,155,69,0.1);
    }
    .field-principles li {
        display: flex; align-items: center; gap: 0.75rem;
        padding: 0.9rem 1rem;
        border-bottom: 1px solid var(--green-border);
        font-size: 0.9rem; color: var(--text); line-height: 1.5;
        transition: background 0.2s;
    }
    .field-principles li:last-child { border-bottom: none; }
    .field-principles li:hover { background: var(--green-dark); }

    .p-dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: var(--red); flex-shrink: 0;
    }

    /* ── OFFICE ── */
    .office-grid {
        display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start;
    }

    .map-field {
        aspect-ratio: 1;
        border: 2px solid var(--green-border);
        border-radius: 6px;
        background: var(--input-bg);
        position: relative; overflow: hidden;
        backdrop-filter: blur(8px);
        transition: border-color 0.25s, box-shadow 0.25s;
    }
    .map-field:hover {
        border-color: var(--green-pale);
        box-shadow: 0 0 0 3px rgba(62,155,69,0.1);
    }
    .map-field::before {
        content: '';
        position: absolute; inset: 0;
        background-image:
            linear-gradient(rgba(62,155,69,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(62,155,69,0.08) 1px, transparent 1px);
        background-size: 26px 26px;
    }

    @keyframes bounce {
    0%,100% { transform: translate(-50%,-100%) translateY(-6px); }
    50%      { transform: translate(-50%,-100%) translateY(-13px); }
    }

    .map-label-overlay {
        position: absolute; bottom: 0.75rem; left: 0.75rem; right: 0.75rem;
        background: var(--green); color: #fff;
        font-size: 0.72rem; font-weight: 600; padding: 0.5rem 0.75rem;
        border-radius: 4px; text-align: center; z-index: 4;
        box-shadow: 0 4px 12px var(--color-glow-primary);
    }

    .office-right { display: flex; flex-direction: column; gap: 0.75rem; }

    .chips { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.25rem; }
    .chip {
        font-size: 0.68rem; font-weight: 500;
        padding: 0.28rem 0.7rem; border-radius: 999px;
        border: 1px solid var(--green-border);
        color: var(--green);
        background: var(--green-pale);
        transition: all 0.2s;
    }
    .chip:hover {
        background: rgba(62,155,69,0.15);
        box-shadow: none;
    }
    .chip.alt {
        border-color: rgba(240,147,251,0.4);
        color: var(--red);
        background: rgba(240,147,251,0.1);
    }
    .chip.alt:hover { background: rgba(220,38,38,0.1); }

    .btn-row {
        padding: 3rem 0 0;
        display: flex; gap: 0.75rem;
    }

    .btn {
        flex: 1; padding: 0.875rem;
        border: none; border-radius: 6px;
        font-size: 1rem; font-weight: 600; cursor: pointer;
        font-family: inherit; text-align: center; text-decoration: none;
        display: block; transition: opacity 0.3s, transform 0.1s, box-shadow 0.3s;
        position: relative; overflow: hidden;
    }
    .btn:active { transform: scale(0.98); }

    .btn-primary {
        background: var(--green);
        color: #fff;
        box-shadow: 0 4px 6px rgba(0,0,0,0.07);
    }
    .btn-primary:hover {
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        opacity: 0.92;
    }

    .btn-primary::after {
        content: '';
        position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
        background: var(--gradient-btn-sweep);
        transition: left 0.5s;
    }
    .btn-primary:hover::after { left: 100%; }
    .btn-secondary {
        background: transparent;
        color: var(--green);
        border: 2px solid var(--green-dark);
    }
    .btn-secondary:hover {
        background: var(--green-pale);
        box-shadow: none;
        opacity: 1;
    }
    .reveal {
        transform: translateY(18px);
        transition: opacity 0.55s ease, transform 0.55s ease;
    }
    @media (max-width: 768px) {
        .hero { padding: 4rem 1.5rem 3.5rem; }
        .hero-inner { grid-template-columns: 1fr; gap: 2.5rem; }
        main { padding: 0 1.5rem 4rem; }
        .sec-grid { grid-template-columns: 1fr; gap: 1rem; }
        .office-grid { grid-template-columns: 1fr; }
        .map-field { aspect-ratio: 16/8; }
        .btn-row { flex-direction: column; }
    }
    @media (prefers-color-scheme: light) {
        .hero h2 { color: var(--text) !important; }
        .hero h2 .gradient-text { color: var(--text-muted) !important; }
        .hero-body { color: var(--text-muted) !important; }
        .hero-kicker { color: var(--text-muted) !important; }
        .hero-kicker::before { background: var(--green) !important; }
        .stat-val { color: var(--text) !important; }
        .stat-desc { color: var(--text-muted) !important; }
    }

.field-list li:hover,
.field-steps li:hover,
.field-principles li:hover {
    background:black;
    color: white;
}

/* @media (prefers-color-scheme: light) {
    .field-list li:hover,
    .field-steps li:hover,
    .field-principles li:hover {
        background: var(--green-pale);
        color: var(--text);
    }
} */
</style>