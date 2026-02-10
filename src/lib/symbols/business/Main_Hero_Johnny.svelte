<script lang="ts">  let { header, text, button, rep, header3, header2, slot = null } = $props();
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { onMount } from "svelte"
onMount(async () => {
  const container = document.getElementById('three');
  const w = container.clientWidth;
  const h = container.clientHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 2000);
  camera.position.set(500, 200, 350);
  camera.lookAt(0, 0, 0);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  const renderer = new THREE.WebGLRenderer({ antialias: true, aplha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  // Controls (optional, for user interaction)
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.enableZoom = false;
  // lights (simple ambient so textures are visible without phong)
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  // --- helper: create canvas texture with centered text ---
  function createFaceTexture(text, options = {}) {
    const size = options.size || 512; // texture size (power of two recommended)
    const bg = options.bg || 'rgba(255,255,255,0)'; // transparent bg by default
    const fg = options.fg || '#ffffff';
    const font = options.font || 'bold 48px system-ui, Arial';
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    // background (transparent or colored)
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size, size);
    // optional subtle framing / guideline for readability
    ctx.strokeStyle = 'rgba(0,0,255,0)';
    ctx.lineWidth = 6;
    ctx.strokeRect(12, 12, size - 24, size - 24);
    // draw centered text
    ctx.fillStyle = fg;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // adaptive font size if longer text
    ctx.font = font;
    // try to shrink slightly to fit if too wide
    let measured = ctx.measureText(text).width;
    if (measured > size * 0.75) {
      const scale = (size * 0.75) / measured;
      // extract numeric part of font size and scale it
      const match = ctx.font.match(/(\d+)px/);
      const base = match ? parseInt(match[1], 10) : 48;
      const newSize = Math.max(12, Math.floor(base * scale));
      ctx.font = ctx.font.replace(/\d+px/, `${newSize}px`);
    }
    ctx.fillText(text, size / 2, size / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    // keep crisp edges
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }
  // --- Cube with face materials using textures ---
  const half = 120;
  const geometry = new THREE.BoxGeometry(half * 2, half * 2, half * 2);
  /*
      // Create textures for each face (order: +X, -X, +Y, -Y, +Z, -Z) as Three expects
      // We'll name faces: Right, Left, Top, Bottom, Front, Back
      const faceTexts = {
        px: 'Right',   // +X
        nx: 'Left',    // -X
        py: 'Top',     // +Y
        ny: 'Bottom',  // -Y
        pz: 'Front',   // +Z
        nz: 'Back'     // -Z
      };
      const materials = [
        new THREE.MeshBasicMaterial({ map: createFaceTexture(faceTexts.px), transparent: true }), // +X
        new THREE.MeshBasicMaterial({ map: createFaceTexture(faceTexts.nx), transparent: true }), // -X
        new THREE.MeshBasicMaterial({ map: createFaceTexture(faceTexts.py), transparent: true }), // +Y
        new THREE.MeshBasicMaterial({ map: createFaceTexture(faceTexts.ny), transparent: true }), // -Y
        new THREE.MeshBasicMaterial({ map: createFaceTexture(faceTexts.pz), transparent: true }), // +Z
        new THREE.MeshBasicMaterial({ map: createFaceTexture(faceTexts.nz), transparent: true })  // -Z
      ];
  */
  const materials = rep.map(t => new THREE.MeshBasicMaterial({ map: createFaceTexture(t.text), transparent: true }))
  // Make sure the face textures render their text on the outside (single sided)
  materials.forEach(m => m.side = THREE.FrontSide);
  // a Mesh that shows the textured faces
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);
  // --- wireframe edges overlay ---
  // Using EdgesGeometry to draw crisp wireframe over the textured cube
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
  const wireframe = new THREE.LineSegments(edges, lineMaterial);
  scene.add(wireframe);
  // Put both cube and wireframe into a parent so they rotate together
  const group = new THREE.Group();
  group.add(cube);
  group.add(wireframe);
  // Reparent objects to group (we already added cube/wireframe to scene; move them)
  scene.remove(cube);
  scene.remove(wireframe);
  group.add(cube);
  group.add(wireframe);
  scene.add(group);
  // Center everything nicely
  group.position.set(0, 0, 0);
  // --- animation: continuous 0 -> 360 (repeating) ---
  // We'll rotate group around Y and X continuously. This produces a smooth infinite spin.
  const rotationSpeed = { x: 0.25 * Math.PI / 180, y: 0.6 * Math.PI / 180 }; // radians/frame-ish (adjustable)
  // To ensure 0-360 semantics: if you want one full revolution in N seconds, compute accordingly.
  // Here we simply increment rotation each frame which gives continuous rotation through all angles.
  let last = performance.now();
  function animate(now) {
    const dt = (now - last) / 1000; // seconds
    last = now;
    // rotate in a smooth time-based way so speed is consistent
    group.rotation.x += rotationSpeed.x * 60 * dt; // scaled to approximate degrees/sec behavior
    group.rotation.y += rotationSpeed.y * 60 * dt;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  // --- responsiveness ---
  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  resizeObserver.observe(container);
  // --- utility: update face text easily from outside ---
  // Expose a small API on window to change face labels if needed.
  window.updateFaceLabel = function(faceKey, text) {
    // faceKey: 'px','nx','py','ny','pz','nz'
    const mapIndex = { px: 0, nx: 1, py: 2, ny: 3, pz: 4, nz: 5 };
    const idx = mapIndex[faceKey];
    if (idx === undefined) return;
    const newTex = createFaceTexture(text);
    materials[idx].map.dispose();
    materials[idx].map = newTex;
    materials[idx].map.needsUpdate = true;
    materials[idx].needsUpdate = true;
  };
})
</script>

<style>
.hero {
  display: flex;
  align-items: center;
  position: relative;
}
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}
.hero-text h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 800;
}
.hero-text .gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--silver));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-text p {
  font-size: 1.3rem;
  color: var(--steel);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}
.cta-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--accent-bright), var(--accent));
  color: var(--white);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.4s;
  box-shadow: 0 10px 30px rgba(100, 149, 237, 0.3);
  position: relative;
  overflow: hidden;
}
.cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}
.cta-btn:hover::before {
  left: 100%;
}
.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(100, 149, 237, 0.5);
}
.hero-visual {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
}
@media (max-width: 768px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .hero-text {
    text-align: center;
    max-width: 90%;
  }
  .hero-text h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  .hero-text p {
    font-size: 1.1rem;
    line-height: 1.4;
  }
  .hero-visual {
    width: 80%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 1 / 1;
    order: -1;
  }
  .cta-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>

<div class="section">
<div class="section-container">
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>{header} <span class="gradient-text">{header2}</span> {header3}</h1>
        <p>{text}</p>
        <a href={button.url} class="cta-btn">{button.label}</a>
      </div>
      <div class="hero-visual" id="three"></div>
    </div>
  </section>
</div>

{#if slot}
  {@render slot()}
{/if}
</div>