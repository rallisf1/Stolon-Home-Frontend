<script lang="ts">  let { head, rep1, slot = null } = $props();</script>

<style>
.case-studies {
  padding: 100px 50px;
  position: relative;
}
.section-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 60px;
}
.project-card {
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.3);
}
.project-image {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  padding: 1rem 1rem 0 1rem;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
.project-info {
  padding: 30px;
}
.project-info h3 {
  font-size: 28px;
  margin-bottom: 10px;
}
.project-info p {
  color: #b0b0b0;
  line-height: 1.6;
}
.project-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(157, 78, 221, 0.2);
  border-radius: 20px;
  font-size: 12px;
  margin-top: 15px;
  color: #9D4EDD;
}
@media (max-width: 768px) {
  .case-studies {
    padding: 60px 20px;
  }
  .section-title {
    font-size: 48px;
    margin-bottom: 40px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
    /* Stack cards vertically */
    gap: 1.5rem;
    margin-top: 40px;
  }
  .project-card:hover {
    transform: none;
    box-shadow: none;
  }
  .project-card {
    border-radius: 15px;
  }
  .project-image {
    height: 200px;
    font-size: 48px;
  }
  .project-info h3 {
    font-size: 24px;
  }
  .project-info p {
    font-size: 14px;
  }
  .project-tag {
    font-size: 10px;
    padding: 4px 12px;
  }
}
@media (max-width: 480px) {
  .section-title {
    font-size: 36px;
    margin-bottom: 30px;
  }
  .project-image {
    height: 150px;
    font-size: 36px;
  }
  .project-info h3 {
    font-size: 20px;
  }
  .project-info p {
    font-size: 13px;
  }
}
</style>

<div class="section">
<section class="case-studies" id="work">
    <h2 class="section-title">{head}</h2>
    <div class="projects-grid">
        {#each rep1 as item}
        <div class="project-card">
            <div class="project-image">
              <img src={item.cap.url} alt={item.cap.alt}/>
            </div>
            <div class="project-info">
              <h3>{item.h3}</h3>
              <p>{item.parag}</p>
              {#if item.span.label}
                <a href={item.span.url} class="project-tag">{item.span.label}</a>
              {/if}
            </div>
        </div>
        {/each}
    </div>
</section>
{#if slot}
  {@render slot()}
{/if}
</div>