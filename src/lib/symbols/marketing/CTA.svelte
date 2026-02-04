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
}
.cta-section h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text-white), var(--primary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-wrap: balance;
}
.cta-button {
  display: inline-block;
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
</style>

<div class="section">
<div class="section-container">
 
        <div class="cta-section">
            <div class="cta-content">
                <h2>{title2}</h2>
                <p>
                   {parag7}
                </p>
             
                <p style="font-size: 1.3rem; font-weight: 600; margin-top: 2rem;">
                    {parag6}
                </p>
                <a href={koumpi.url} class="cta-button" onclick={() => alert('Contact form coming soon!')}>{koumpi.label}</a>
            </div>
        </div>
    
</div>
{#if slot}
  {@render slot()}
{/if}
</div>