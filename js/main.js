/* Mark active nav link based on current page */
(function highlightNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* Burger / mobile nav toggle */
(function burgerToggle() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');
  if (!burger || !nav) return;

  const close = () => { burger.classList.remove('open'); nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
  const toggle = () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.addEventListener('click', toggle);
  // close when a nav link is tapped (but not the cart button)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  // close on escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  // close when resizing back to desktop
  window.addEventListener('resize', () => { if (window.innerWidth > 860) close(); });
})();

/* Update footer year */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* World transition splash — used when navigating to coffee page */
window.transitionTo = function (url, label) {
  const splash = document.createElement('div');
  splash.className = 'world-splash show';
  splash.innerHTML = `<div class="world-splash-text">${label || 'Welcome…'}</div>`;
  document.body.appendChild(splash);
  setTimeout(() => { window.location.href = url; }, 700);
};

/* ===== Reviews data + renderer (used on home) ===== */
window.REVIEWS = [
  { name: "Rehan Ali", stars: 5, meta: "10 months ago", text: "I tried burger and pizza both — really tasty. Compared to others, Crispy Hub is the best!" },
  { name: "Zeeshan Gill", stars: 5, meta: "Local Guide · a year ago", text: "The food & service is awesome. Staff is very cooperative and kind. Atmosphere is highly recommended — must visit at least once!" },
  { name: "Hassan Akash", stars: 5, meta: "Local Guide · 3 years ago", text: "Amazing taste — a great variety of pizza, the best I've had. I love the chicken special with extra cheese 😋" },
  { name: "Shafqat Sobhey", stars: 5, meta: "Local Guide · 3 years ago", text: "Good taste. Best pizza in town. Best food quality." },
  { name: "Muhammad Hamza", stars: 4, meta: "Local Guide · 3 months ago", text: "Overall taste got better and they offer more items now. Solid dine-in experience." },
  { name: "Talha Mustafa", stars: 5, meta: "6 months ago", text: "Food and staff is well good 💯💯 Satisfied 🤠" },
  { name: "Azad Ahmed", stars: 5, meta: "11 months ago", text: "Very good service, very good environment and very good taste ♥️♥️" },
  { name: "Nouman Iqbal", stars: 5, meta: "a month ago", text: "Excellent 💯👍 — great value for the price." },
  { name: "Asif Javed", stars: 5, meta: "5 months ago", text: "It was superb!" },
  { name: "Muhammad Muzammal", stars: 4, meta: "8 months ago", text: "Good taste — must try." },
  { name: "Waqas Azeem", stars: 5, meta: "Local Guide · 11 months ago", text: "Wallah, very nice food and service." },
  { name: "Ghulam Sabir", stars: 5, meta: "2 years ago", text: "Nice, excellent experience — good atmosphere." },
  { name: "Bilal Hussain", stars: 4, meta: "Local Guide · a year ago", text: "Good experience, staff was friendly. I rate the food 8 out of 10." },
  { name: "Hamza Ali Zafar", stars: 4, meta: "Local Guide · 3 years ago", text: "Good place for dining and good taste — recommended." },
  { name: "Talha Ansari", stars: 5, meta: "Local Guide · 2 years ago", text: "Very very good staff and wholesome pizzas." },
  { name: "Ali Ahmad", stars: 5, meta: "Local Guide · 2 years ago", text: "Good taste and their service is satisfying." },
  { name: "Shehroz Nawaz", stars: 5, meta: "Local Guide · 5 years ago", text: "Best place for fast food. Top level of taste 😋 and cleanliness — best ever food point." },
  { name: "It's Sufyan", stars: 4, meta: "Local Guide · 5 months ago", text: "Good service — reasonable price per person." },
  { name: "Rana Zeeshan", stars: 5, meta: "5 years ago", text: "Very good standard. Tasty food." },
  { name: "Ubaid Ubi", stars: 4, meta: "Local Guide · a year ago", text: "A good place for quick and economical meals." },
];

window.renderReviews = function (mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const stars = n => '★'.repeat(n) + '☆'.repeat(5 - n);
  const initial = name => name.trim().charAt(0).toUpperCase();
  const cardHtml = r => `
    <article class="review-card">
      <div class="review-head">
        <div class="review-avatar">${initial(r.name)}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-meta">${r.meta}</div>
        </div>
      </div>
      <div class="review-stars" aria-label="${r.stars} out of 5">${stars(r.stars)}</div>
      <p class="review-text">${r.text}</p>
    </article>
  `;
  // Duplicate the list once so the marquee loops seamlessly
  const items = window.REVIEWS.map(cardHtml).join('');
  mount.innerHTML = `
    <div class="reviews-track-wrap">
      <div class="reviews-track">${items}${items}</div>
    </div>
  `;
};
