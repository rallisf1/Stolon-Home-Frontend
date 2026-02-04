<script lang="ts">  let { rep7, text7, desc7, slot = null } = $props();</script>

<style>
footer {
  background: #0a1628;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(100, 149, 237, 0.2);
}
.tags {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.tag {
  padding: 0.5rem 1rem;
  background: rgba(100, 149, 237, 0.1);
  border-radius: 20px;
  color: #6495ed;
  font-size: 0.9rem;
}
</style>

<div class="section">

<footer>   
    <div class="tags">
      {#each rep7 as item}
        <span class="tag">{item.tag7}</span>
      {/each}
    </div>
  {#if text7}
    <p style="color: #6495ed; font-weight: 600; margin-bottom: 0.5rem;">{text7}</p>
    <p style="color: #c0c0c0; font-size: 0.9rem;">{desc7}</p>
  {/if}
</footer>

{#if slot}
  {@render slot()}
{/if}
</div>