<script lang="ts">  let { title, subtitle, button, slot = null } = $props();</script>

<style>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
  background: linear-gradient(135deg, #0a1628 0%, #1a2f4f 100%);
  /* z-index: 1; */
}
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 20s infinite;
}
.shape1 {
  width: 400px;
  height: 400px;
  background: #6495ed;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.shape2 {
  width: 300px;
  height: 300px;
  background: #4169e1;
  bottom: 20%;
  right: 15%;
  animation-delay: 5s;
}
.shape3 {
  width: 250px;
  height: 250px;
  background: #6495ed;
  top: 60%;
  left: 50%;
  animation-delay: 10s;
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(50px, -50px) rotate(90deg);
  }
  50% {
    transform: translate(-30px, 30px) rotate(180deg);
  }
  75% {
    transform: translate(30px, 50px) rotate(270deg);
  }
}
.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
}
.logo {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6495ed 0%, #4169e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.2s forwards;
}
.hero-subtitle {
  font-size: 1.3rem;
  color: #c0c0c0;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.4s forwards;
}
.cta-button {
  display: inline-block;
  padding: 1rem 3rem;
  background: linear-gradient(135deg, #6495ed 0%, #4169e1 100%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 1s ease 0.6s forwards;
  box-shadow: 0 10px 30px rgba(100, 149, 237, 0.3);
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(100, 149, 237, 0.5);
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(30px);
  }
}
@media (min-width: 768px) {
  .hero-content {
    padding: 3rem;
  }
  .logo {
    font-size: 5rem;
  }
  .hero-title {
    font-size: 3.5rem;
  }
  .hero-subtitle {
    font-size: 1.5rem;
    max-width: 700px;
  }
  .cta-button {
    padding: 1.2rem 3.5rem;
    font-size: 1.2rem;
  }
  .shape1 {
    width: 450px;
    height: 450px;
  }
  .shape2 {
    width: 350px;
    height: 350px;
  }
  .shape3 {
    width: 300px;
    height: 300px;
  }
}
@media (min-width: 1025px) {
  .hero-content {
    padding: 4rem;
  }
  .logo {
    font-size: 6rem;
  }
  .hero-title {
    font-size: 4rem;
  }
  .hero-subtitle {
    font-size: 1.6rem;
    max-width: 800px;
  }
  .cta-button {
    padding: 1.5rem 4rem;
    font-size: 1.3rem;
  }
  .shape1 {
    width: 500px;
    height: 500px;
  }
  .shape2 {
    width: 400px;
    height: 400px;
  }
  .shape3 {
    width: 350px;
    height: 350px;
  }
}
</style>

<div class="section">
<div class="hero-bg">
  <div class="section-container">
    <div class="hero">
      <div class="hero-content">
          <h1 class="hero-title">{title}</h1>
          <p class="hero-subtitle">{subtitle}</p>
          <a href={button.url} class="cta-button">{button.label}</a>
      </div>
    </div>
  </div>
  </div>
{#if slot}
  {@render slot()}
{/if}
</div>