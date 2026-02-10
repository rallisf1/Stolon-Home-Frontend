<script lang="ts">  let { repeater, parag1, but, slot = null } = $props();</script>

<style>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 50px 50px;
}
.hero-content {
  display: grid;
  gap: 2rem;
  text-align: center;
  z-index: 2;
}
.hero h1 {
  font-size: clamp(38px, 7vw, 100px);
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff, #FF6B35, #9D4EDD, #06D6A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 8s ease infinite;
  background-size: 300% 300%;
}
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.hero p {
  font-size: 24px;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
}
.cta-button {
  width: fit-content;
  margin: 0 auto;
  padding: 22px 28px;
  background: linear-gradient(135deg, #9D4EDD, #FF6B35);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(157, 78, 221, 0.4);
}
@media (max-width: 768px) {
  /* Hero container */
  .hero {
    padding: 2rem 15px;
    /* λιγότερο padding για κινητά */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero-content {
    text-align: center;
    z-index: 2;
    max-width: 100%;
  }
  /* Hero Title */
  .hero h1 {
    font-size: clamp(24px, 10vw, 48px);
    /* μικρότερο font */
    line-height: 1;
  }
  /* Hero paragraph */
  .hero p {
    font-size: 1.1rem;
    /* μικρότερο font */
    max-width: 90%;
    text-align: justify;
    /* justify text */
    text-align-last: left;
    /* τελευταία γραμμή αριστερά */
    text-justify: inter-word;
    line-height: 1.5;
    color: #b0b0b0;
  }
  /* CTA Button */
  .cta-button {
    padding: 16px 24px;
    font-size: 1rem;
    border-radius: 40px;
    transform: none;
    /* απενεργοποίηση hover translate */
    box-shadow: 0 6px 20px rgba(157, 78, 221, 0.3);
    /* μικρότερη σκιά */
  }
  .cta-button:hover {
    transform: none;
    box-shadow: 0 6px 20px rgba(157, 78, 221, 0.3);
    /* hover disabled */
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="hero">


    <div class="hero-content">
      <h1>
      {#each repeater as item}
        {item.head1}<br />
      {/each}
      </h1>
      <p>{parag1}</p>
      <a class="cta-button" href={but.url}>{but.label}</a>
    </div>
  </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>