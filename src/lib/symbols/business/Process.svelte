<script lang="ts">  let { tag4, header4, rep4, slot = null } = $props();</script>

<style>
.process-steps {
  margin-top: 4rem;
  position: relative;
}
.section-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #c0c0c0;
  margin-bottom: 2rem;
}
.process-step {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}
.section-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(100, 149, 237, 0.1);
  border: 1px solid #6495ed;
  border-radius: 30px;
  color: #6495ed;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
}
.process-line {
  position: absolute;
  left: 30px;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #6495ed 0%, #4169e1 100%);
  opacity: 0.3;
}
.process-step {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}
.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6495ed 0%, #4169e1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(100, 149, 237, 0.3);
}
.step-title {
  font-size: 1.25rem;
  color: #537FE7;
}
</style>

<div class="section">

<div class="section-container">
<section class="process-section">
        <span class="section-tag">{tag4}</span>
        <h2 class="section-title">{header4}</h2>
        <div class="process-steps">
            <div class="process-line"></div>
            {#each rep4 as item}
            <div class="process-step">
                <div class="step-number">{item.num}</div>
                <div class="step-content">
                    <h3 class="step-title">{item.title}</h3>
                    <p class="step-text">{item.text}</p>
                </div>
            </div>
              {/each}
        </div>
    </section>
</div>
{#if slot}
  {@render slot()}
{/if}
</div>