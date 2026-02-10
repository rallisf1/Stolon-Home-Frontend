<script lang="ts">  let { title2, koumpi, parag6, parag7, slot = null } = $props();</script>

<style>
.cta-section {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--bg-card-darker), var(--bg-card));
  border-radius: 24px;
  border: 1px solid var(--border-subtle);
  position: relative;
  overflow: hidden;
}
.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(199, 125, 255, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
  pointer-events: none;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.cta-content {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
}
.cta-section h2 {
  font-size: 3rem;
  background: linear-gradient(135deg, var(--text-white), var(--primary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cta-section p {
  font-size: 1.2rem;
  text-wrap: balance;
}
.cta-button {
  width: fit-content;
  margin: 0 auto;
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-purple));
  color: var(--text-white);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.5);
}
@media (max-width: 768px) {
  .cta-section {
    padding: 3rem 1.5rem;
    text-align: center;
    /* κεντράρισμα περιεχομένου */
    border-radius: 16px;
  }
  .cta-section::before {
    /* μικρότερη διάσταση gradient overlay για mobile */
    top: -70%;
    left: -70%;
    width: 240%;
    height: 240%;
  }
  .cta-section h2 {
    font-size: 2rem;
    text-align: center;
    /* σιγουριά ότι είναι κεντραρισμένο */
  }
  .cta-section p {
    font-size: 1rem;
    text-align: center;
    /* κεντράρισμα παραγράφου */
    line-height: 1.5;
  }
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
    display: inline-block;
    transform: none;
    /* απενεργοποίηση hover translate */
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
    /* αρχική σκιά */
  }
  .cta-button:hover {
    transform: none;
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
    /* hover disabled */
  }
}
</style>

<div class="section">
<div class="section-container">
  <div class="cta-section">
    <div class="cta-content">
      <h2>{title2}</h2>
      <p>{parag7}</p>
      <p><strong>{parag6}</strong></p>
      <a href={koumpi.url} class="cta-button">{koumpi.label}</a>
    </div>
  </div>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>