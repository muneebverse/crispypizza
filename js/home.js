/* =========================================================
   Home — pizza carousel
   ========================================================= */
const pizzas = [
  { name: "Crispy Hub Special", img: "assets/pizzas/special.jpg", tagline: "Our signature loaded pizza.",  bg: "#3a1a14", glow: "#c8341a" },
  { name: "Behari Kabab",       img: "assets/pizzas/behari-kabab.jpg", tagline: "Spicy kabab, golden crust.",   bg: "#3d1410", glow: "#e63a1c" },
  { name: "Crown Crust",        img: "assets/pizzas/crown-crust.jpg",  tagline: "Cheese-filled crown.",         bg: "#3a2410", glow: "#d97a2c" },
  { name: "Malai Boti",         img: "assets/pizzas/malai-boti.jpg",   tagline: "Creamy, dreamy bites.",        bg: "#3a2a10", glow: "#f0b835" },
  { name: "Fire Hose",          img: "assets/pizzas/fire-hose.jpg",    tagline: "Bring the heat.",              bg: "#3d1410", glow: "#ff5722" },
];

let active = 0;
const hero        = document.getElementById('hero');
const heroGlow    = document.getElementById('hero-glow');
const titleEl     = document.getElementById('hero-title');
const eyebrowEl   = document.getElementById('hero-eyebrow');
const taglineEl   = document.getElementById('hero-tagline');
const pizzaImg    = document.getElementById('pizza-img');
const pizzaWrap   = document.getElementById('pizza-wrap');
const dotsWrap    = document.getElementById('dots');

function render() {
  const p = pizzas[active];
  hero.style.backgroundColor = p.bg;
  heroGlow.style.background  = `radial-gradient(circle at 50% 45%, ${p.glow} 0%, transparent 60%)`;
  eyebrowEl.textContent = `CINEMATIC SLICE №${active + 1}`;
  const words = p.name.split(' ');
  titleEl.innerHTML = words.map((w, i) => `<span${i === 1 ? ' class="text-gradient"' : ''}>${w}</span>`).join('');
  taglineEl.textContent = p.tagline;
  pizzaImg.src = p.img;
  pizzaImg.alt = p.name;
  pizzaImg.onerror = () => { pizzaImg.style.opacity = 0.3; };
  pizzaWrap.classList.remove('animate-scale-pop');
  void pizzaWrap.offsetWidth;
  pizzaWrap.classList.add('animate-scale-pop');
  dotsWrap.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === active));
}
function next() { active = (active + 1) % pizzas.length; render(); }
function prev() { active = (active - 1 + pizzas.length) % pizzas.length; render(); }

document.getElementById('prev-btn').addEventListener('click', prev);
document.getElementById('next-btn').addEventListener('click', next);

pizzas.forEach((_, i) => {
  const b = document.createElement('button');
  b.className = 'dot';
  b.setAttribute('aria-label', `Show pizza ${i + 1}`);
  b.addEventListener('click', () => { active = i; render(); });
  dotsWrap.appendChild(b);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

let startX = 0;
window.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
window.addEventListener('touchend',   (e) => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx < -50) next();
  if (dx >  50) prev();
});

window.addEventListener('scroll', () => {
  const rect = hero.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, -rect.top / (rect.height || 1)));
  pizzaImg.style.transform = `scale(${1 + progress * 0.8})`;
}, { passive: true });

setInterval(next, 6000);
render();
