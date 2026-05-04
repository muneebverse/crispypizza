/* =========================================================
   Crispy Pizza Hub — Cart + WhatsApp checkout (Multi-Branch)
   ========================================================= */
const WHATSAPP_NUMBER = "923049631321"; // 0304-9631321 in international format
const CURRENCY = "Rs.";
const STORAGE_KEY = "cph_cart_v1";

const Cart = {
  items:[], // { id, name, variant, price, qty }
  load() {
    try { this.items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { this.items =[]; }
  },
  save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items)); },
  add(item) {
    const key = item.id + "|" + (item.variant || "");
    const existing = this.items.find(i => (i.id + "|" + (i.variant || "")) === key);
    if (existing) existing.qty += 1;
    else this.items.push({ ...item, qty: 1 });
    this.save(); this.render(); this.bump();
    showToast(`${item.name}${item.variant ? " (" + item.variant + ")" : ""} added`);
  },
  remove(id, variant) {
    this.items = this.items.filter(i => !(i.id === id && (i.variant || "") === (variant || "")));
    this.save(); this.render();
  },
  setQty(id, variant, qty) {
    const it = this.items.find(i => i.id === id && (i.variant || "") === (variant || ""));
    if (!it) return;
    it.qty = Math.max(1, qty);
    this.save(); this.render();
  },
  total() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  bump() {
    const btn = document.getElementById("cart-btn");
    if (!btn) return;
    btn.animate([{ transform: "scale(1)" }, { transform: "scale(1.18)" }, { transform: "scale(1)" }],
      { duration: 380, easing: "cubic-bezier(.34,1.56,.64,1)" }
    );
  },
  render() {
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = this.count();

    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    if (!list || !totalEl) return;

    if (this.items.length === 0) {
      list.innerHTML = `<div class="cart-empty">Your cart is empty.<br>Add some delicious items 🍕</div>`;
    } else {
      list.innerHTML = this.items.map(i => `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${escapeHtml(i.name)}</div>
            ${i.variant ? `<div class="cart-item-meta">${escapeHtml(i.variant)}</div>` : ""}
            <div class="qty">
              <button data-act="dec" data-id="${i.id}" data-var="${i.variant||""}">−</button>
              <span>${i.qty}</span>
              <button data-act="inc" data-id="${i.id}" data-var="${i.variant||""}">+</button>
            </div>
            <button class="cart-remove" data-act="rm" data-id="${i.id}" data-var="${i.variant||""}">remove</button>
          </div>
          <div style="text-align:right;">
            <div class="cart-item-price">${CURRENCY} ${i.price * i.qty}</div>
            <div class="cart-item-meta">${CURRENCY} ${i.price} each</div>
          </div>
        </div>
      `).join("");
    }

    totalEl.textContent = `${CURRENCY} ${this.total()}`;
    if (checkoutBtn) checkoutBtn.disabled = this.items.length === 0;
  },
  open() { document.getElementById("cart-drawer")?.classList.add("open"); document.getElementById("cart-overlay")?.classList.add("open"); },
  close() { document.getElementById("cart-drawer")?.classList.remove("open"); document.getElementById("cart-overlay")?.classList.remove("open"); },
};

function escapeHtml(s = "") {
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast"; t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ===== Cart drawer markup injection ===== */
function mountCartDrawer() {
  if (document.getElementById("cart-drawer")) return;
  const overlay = document.createElement("div");
  overlay.id = "cart-overlay"; overlay.className = "cart-overlay";
  overlay.addEventListener("click", () => Cart.close());

  const drawer = document.createElement("aside");
  drawer.id = "cart-drawer"; drawer.className = "cart-drawer";
  drawer.innerHTML = `
    <div class="cart-head">
      <h2>Your Order 🛒</h2>
      <button class="cart-close" id="cart-close" aria-label="Close cart">×</button>
    </div>
    <div class="cart-items" id="cart-items"></div>
    <div class="cart-foot">
      <div class="cart-total">Total <strong id="cart-total">${CURRENCY} 0</strong></div>
      <form class="cart-form" id="cart-form" autocomplete="on">
        
        <!-- NEW: BRANCH SELECTOR -->
        <select name="branch" id="f-branch" required style="width: 100%; padding: 12px; margin-bottom: 8px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font-family: inherit;">
          <option value="" disabled selected>-- Choose Branch --</option>
          <option value="Main Branch">MGamber Branch</option>
          <option value="Branch 2">Sahiwal Branch</option>
          <option value="Branch 3">Noor Park Branch</option>
        </select>

        <input name="name" id="f-name" placeholder="Your name" required maxlength="60">
        <input name="phone" id="f-phone" placeholder="Phone number" required pattern="[0-9+\\-\\s]{7,20}" maxlength="20">
        <textarea name="address" id="f-address" placeholder="Delivery address" required maxlength="240"></textarea>
        <input name="notes" id="f-notes" placeholder="Notes (optional)" maxlength="160">
        <button type="submit" class="checkout-btn" id="checkout-btn" disabled>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6A11.9 11.9 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.5zM12 21.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 012.2 12C2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.4-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"/></svg>
          Send Order on WhatsApp
        </button>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  document.getElementById("cart-close").addEventListener("click", () => Cart.close());

  document.getElementById("cart-items").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const id = btn.dataset.id;
    const variant = btn.dataset.var;
    const item = Cart.items.find(i => i.id === id && (i.variant || "") === (variant || ""));
    if (!item) return;
    if (btn.dataset.act === "inc") Cart.setQty(id, variant, item.qty + 1);
    if (btn.dataset.act === "dec") Cart.setQty(id, variant, item.qty - 1);
    if (btn.dataset.act === "rm") Cart.remove(id, variant);
  });

  document.getElementById("cart-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (Cart.items.length === 0) return;

    const branch  = document.getElementById("f-branch").value;
    const name    = document.getElementById("f-name").value.trim();
    const phone   = document.getElementById("f-phone").value.trim();
    const address = document.getElementById("f-address").value.trim();
    const notes   = document.getElementById("f-notes").value.trim();
    if (!branch || !name || !phone || !address) return;

    const submitBtn = document.getElementById("checkout-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.textContent = "Saving order...";

    try {
      if (window._firebaseDb) {
        await window._firebaseDb.collection("orders").add({
          localId:   Date.now(),
          branch:    branch, // Saves selected branch to Firebase
          customer:  name,
          phone:     phone,
          address:   address,
          notes:     notes,
          items:     Cart.items.map(i => ({
            name:    i.name,
            variant: i.variant || "",
            price:   i.price,
            qty:     i.qty,
          })),
          total:     Cart.total(),
          type:      "delivery",
          source:    "Website",
          status:    "new",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    } catch (err) {
      console.warn("Firebase order save failed:", err.message);
    }

    const lines =[];
    lines.push("*🍕 New Crispy Pizza Hub Order*");
    lines.push(`🏪 *Branch:* ${branch}`);
    lines.push("");
    lines.push("*Items:*");
    Cart.items.forEach((i, idx) => {
      const v = i.variant ? ` (${i.variant})` : "";
      lines.push(`${idx + 1}. ${i.name}${v} × ${i.qty} — ${CURRENCY} ${i.price * i.qty}`);
    });
    lines.push("");
    lines.push(`*Total: ${CURRENCY} ${Cart.total()}*`);
    lines.push("");
    lines.push("*Customer Details:*");
    lines.push(`👤 Name: ${name}`);
    lines.push(`📞 Phone: ${phone}`);
    lines.push(`📍 Address: ${address}`);
    if (notes) lines.push(`📝 Notes: ${notes}`);

    const text = encodeURIComponent(lines.join("\n"));
    const url  = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  });
}

function renderMenuSection(targetId, section) {
  const el = document.getElementById(targetId);
  if (!el || !section) return;
  el.innerHTML = section.items.map((item, idx) => {
    const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;
    const firstPrice = hasSizes ? item.sizes[0].price : item.price;
    return `
      <article class="menu-card animate-fade-up" style="animation-delay:${Math.min(idx * 60, 400)}ms;" data-id="${item.id}">
        <div class="menu-img-wrap">
          <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.opacity=0.2;this.src='/site/assets/placeholder.svg';">
        </div>
        <div class="menu-body">
          <div class="menu-head">
            <h3>${escapeHtml(item.name)}</h3>
            <span class="menu-price" data-price>${CURRENCY} ${firstPrice}</span>
          </div>
          <p class="menu-desc">${escapeHtml(item.desc || "")}</p>
          ${hasSizes ? `
            <div class="size-options">
              ${item.sizes.map((s, i) => `
                <button class="size-chip ${i === 0 ? "active" : ""}" data-size data-label="${escapeHtml(s.label)}" data-price-val="${s.price}">
                  ${escapeHtml(s.label)} · ${CURRENCY}${s.price}
                </button>
              `).join("")}
            </div>` : ""}
          <div class="menu-footer">
            <span></span>
            <button class="btn-add" data-add>+ Add</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  el.querySelectorAll(".menu-card").forEach(card => {
    const id = card.dataset.id;
    const item = section.items.find(i => i.id === id);
    let chosen = (item.sizes && item.sizes[0]) || null;

    card.querySelectorAll("[data-size]").forEach(chip => {
      chip.addEventListener("click", () => {
        card.querySelectorAll("[data-size]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        chosen = { label: chip.dataset.label, price: Number(chip.dataset.priceVal) };
        card.querySelector("[data-price]").textContent = `${CURRENCY} ${chosen.price}`;
      });
    });

    card.querySelector("[data-add]").addEventListener("click", () => {
      Cart.add({
        id: item.id + (chosen ? "-" + chosen.label : ""),
        name: item.name,
        variant: chosen ? chosen.label : "",
        price: chosen ? chosen.price : item.price,
      });
    });
  });
}

function renderDeals(targetId) {
  const el = document.getElementById(targetId);
  if (!el || !window.MENU.deals) return;
  el.innerHTML = window.MENU.deals.map((d, idx) => `
    <div class="deal animate-fade-up" style="animation-delay:${Math.min(idx*60,400)}ms;">
      <span class="deal-tag">${escapeHtml(d.tag)}</span>
      <div class="deal-icon">${d.icon}</div>
      <h3>${escapeHtml(d.name)}</h3>
      <span class="deal-price">${CURRENCY} ${d.price}</span>
      <button class="btn-add" data-deal="${d.id}">+ Add to Cart</button>
    </div>
  `).join("");
  el.querySelectorAll("[data-deal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const d = window.MENU.deals.find(x => x.id === btn.dataset.deal);
      Cart.add({ id: d.id, name: d.name, variant: "", price: d.price });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Cart.load();
  mountCartDrawer();
  Cart.render();
  document.getElementById("cart-btn")?.addEventListener("click", () => Cart.open());
});
