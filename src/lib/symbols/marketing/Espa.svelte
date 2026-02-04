<script lang="ts">  let { image, pdf, slot = null } = $props();</script>

<style>
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<div class="section">
  <div class="img">
    <a href={pdf}>
      <img src={image.url} alt={image.alt}/>
    </a>
  </div>
{#if slot}
  {@render slot()}
{/if}
</div>