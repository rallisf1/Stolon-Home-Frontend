<script lang="ts">  let { highlight_title, box, lists, slot = null } = $props();</script>

<style>
.highlight-box {
  background: linear-gradient(135deg, var(--beige), var(--off-white));
  padding: 3rem;
  margin: 3rem 0;
  border-radius: 0;
  border-left: 6px solid var(--soft-orange);
}
h2 {
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: var(--dark-text);
  font-weight: 300;
  letter-spacing: -1px;
}
.highlight-box h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--dark-text);
  font-weight: 400;
}
.highlight-box p {
  margin-bottom: 1.2rem;
}
.feature-list li {
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(58, 58, 58, 0.1);
  font-size: 1.15rem;
  position: relative;
  padding-left: 2rem;
}
.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--soft-orange);
  font-weight: 700;
}
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  .highlight-box {
    padding: 1.5rem;
    margin: 0;
  }
  .highlight-box h3 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .highlight-box p {
    margin: 0;
  }
  .feature-list li {
    padding: 0.5rem 0 0.5rem 1.5rem;
  }
}
</style>

<div class="section">
<div class="section-container">
 <h2>{highlight_title}</h2>
    
    <div class="highlight-box">
        <h3>{box.title}</h3>
   
        <p>{box.text}</p>
    
    </div>
    
    <ul class="feature-list">
      {#each lists as list}
        <li>{list.text}</li>
      {/each}
    </ul>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>