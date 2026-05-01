/* =========================================================
   Coffee carousel — separate world
   ========================================================= */
const coffees = [
  { name: "Caramel Coffee",     img: "assets/coffee/caramel.jpg",      tagline: "Buttery caramel, slow steam.", bg: "#1a1410", glow: "#d4a574" },
  { name: "Cappuccino Classic", img: "assets/coffee/cappuccino.jpg",   tagline: "Velvet foam, bold espresso.",  bg: "#201610", glow: "#a07a52" },
  { name: "Iced Hazelnut",      img: "assets/coffee/hazelnut.jpg",     tagline: "Frost-kissed hazelnut bliss.", bg: "#181210", glow: "#c8956a" },
  { name: "Kit Kat Special",    img: "assets/coffee/kitkat.jpg",       tagline: "Crunchy chocolate dream.",     bg: "#1c1410", glow: "#b8845a" },
  { name: "CPH Signature",      img: "assets/coffee/cph-special.jpg",  tagline: "House blend, made with love.", bg: "#1a1410", glow: "#f0c896" },
];

let cActive = 0;
const cHero    = document.getElementById('coffee-hero');
const cGlow    = document.getElementById('coffee-glow');
const cTitle   = document.getElementById('coffee-title');
const cEye     = document.getElementById('coffee-eyebrow');
const cTag     = document.getElementById('coffee-tagline');
const cImg     = document.getElementById('coffee-img');
const cWrap    = document.getElementById('coffee-wrap');
const cDots    = document.getElementById('coffee-dots');

function cRender() {
  const c = coffees[cActive];
  cHero.style.backgroundColor = c.bg;
  cGlow.style.background = `radial-gradient(circle at 50% 50%, ${c.glow} 0%, transparent 65%)`;
  cEye.textContent = `BREW №${cActive + 1}`;
  const words = c.name.split(' ');
  cTitle.innerHTML = words.map((w, i) => `<span${i === 1 ? ' class="text-gradient"' : ''}>${w}</span>`).join('');
  cTag.textContent = c.tagline;
  cImg.src = c.img;
  cImg.alt = c.name;
  cImg.onerror = () => { cImg.style.opacity = 0.3; };
  cWrap.classList.remove('animate-scale-pop');
  void cWrap.offsetWidth;
  cWrap.classList.add('animate-scale-pop');
  cDots.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === cActive));
}
function cNext() { cActive = (cActive + 1) % coffees.length; cRender(); }
function cPrev() { cActive = (cActive - 1 + coffees.length) % coffees.length; cRender(); }

document.getElementById('coffee-prev').addEventListener('click', cPrev);
document.getElementById('coffee-next').addEventListener('click', cNext);

coffees.forEach((_, i) => {
  const b = document.createElement('button');
  b.className = 'dot';
  b.setAttribute('aria-label', `Show coffee ${i + 1}`);
  b.addEventListener('click', () => { cActive = i; cRender(); });
  cDots.appendChild(b);
});

let cStartX = 0;
cHero.addEventListener('touchstart', (e) => { cStartX = e.touches[0].clientX; }, { passive: true });
cHero.addEventListener('touchend',   (e) => {
  const dx = e.changedTouches[0].clientX - cStartX;
  if (dx < -50) cNext();
  if (dx >  50) cPrev();
});

setInterval(cNext, 6000);
cRender();
