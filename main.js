// =============================================
// DAMMIZZ FOOD MART — MAIN JAVASCRIPT (multi-page safe)
// =============================================

// ---- PRODUCT DATA ----
const productsData = [
  // Rice
  { id: 1, name: "Rice - 50kg bag", category: "rice", emoji: "🍚", price: 58000, image: "images/products/1634569714Mama-choice---50-420x458.jpg" },
  { id: 2, name: "Rice - 25kg half bag", category: "rice", emoji: "🍚", price: 29000, image: "images/products/1634569714Mama-choice---50-420x458.jpg" },
  { id: 3, name: "Rice - quarter bag", category: "rice", emoji: "🍚", price: 14500, image: "images/products/1634569714Mama-choice---50-420x458.jpg" },
  { id: 4, name: "Rice - module", category: "rice", emoji: "🍚", price: 2200, image: "images/products/1634569714Mama-choice---50-420x458.jpg" },
  { id: 5, name: "Rice - half module", category: "rice", emoji: "🍚", price: 1100, image: "images/products/1634569714Mama-choice---50-420x458.jpg" },
  { id: 6, name: "Rice - one cup", category: "rice", emoji: "🍚", price: 250, image: "images/products/1634569714Mama-choice---50-420x458.jpg" },
  // Beans
  { id: 7, name: "Oloyin Gidi - module", category: "beans", emoji: "🫛", price: 2600, image: "images/products/images (2).jpg" },
  { id: 8, name: "Oloyin Gidi - half module", category: "beans", emoji: "🫛", price: 1150, image: "images/products/images (2).jpg" },
  { id: 9, name: "Oloyin Gidi - one cup", category: "beans", emoji: "🫛", price: 270, image: "images/products/images (2).jpg" },
  { id: 10, name: "Oloyin Pelebe - module", category: "beans", emoji: "🫛", price: 2400, image: "images/products/images (2).jpg" },
  { id: 11, name: "Oloyin Pelebe - half module", category: "beans", emoji: "🫛", price: 1200, image: "images/products/images (2).jpg" },
  { id: 12, name: "Oloyin Pelebe - one cup", category: "beans", emoji: "🫛", price: 250, image: "images/products/images (2).jpg" },
  // Garri
  { id: 13, name: "Garri Ijebu - module", category: "garri", emoji: "🥣", price: 1400, image: "images/products/GarriIjebu_Grade1_10kgBag_grande.webp" },
  { id: 14, name: "Garri Ijebu - half module", category: "garri", emoji: "🥣", price: 700, image: "images/products/GarriIjebu_Grade1_10kgBag_grande.webp" },
  { id: 15, name: "Garri Ilora - module", category: "garri", emoji: "🥣", price: 600, image: "images/products/GarriIjebu_Grade1_10kgBag_grande.webp" },
  { id: 16, name: "Garri Ilora - half module", category: "garri", emoji: "🥣", price: 300, image: "images/products/GarriIjebu_Grade1_10kgBag_grande.webp" },
  { id: 17, name: "Normal Garri - module", category: "garri", emoji: "🥣", price: 500, image: "images/products/GarriIjebu_Grade1_10kgBag_grande.webp" },
  { id: 18, name: "Normal Garri - half module", category: "garri", emoji: "🥣", price: 250, image: "images/products/GarriIjebu_Grade1_10kgBag_grande.webp" },
  // Pasta and noodles
  { id: 19, name: "Crown Pasta", category: "pasta", emoji: "🍝", price: 1100, image: "images/products/images (3).jpg" },
  { id: 20, name: "Golden Penny Spaghetti", category: "pasta", emoji: "🍝", price: 1150, image: "images/products/images (3).jpg" },
  { id: 21, name: "Honeywell Spaghetti", category: "pasta", emoji: "🍝", price: 900, image: "images/products/images (3).jpg" },
  { id: 22, name: "Mama's Pride Spaghetti", category: "pasta", emoji: "🍝", price: 1000, image: "images/products/images (3).jpg" },
  { id: 23, name: "Indomitable - pack", category: "pasta", emoji: "🍜", price: 10500, image: "images/products/images (5).jpg" },
  { id: 24, name: "Indomitable - half pack", category: "pasta", emoji: "🍜", price: 5300, image: "images/products/images (5).jpg" },
  { id: 25, name: "Indomitable - piece", category: "pasta", emoji: "🍜", price: 270, image: "images/products/images (5).jpg" },
  // Yam and oils
  { id: 26, name: "Water Yam (Ewura) - from", category: "yam", emoji: "🍠", price: 3000, priceNote: "upward", image: "images/products/images (6).jpg" },
  { id: 27, name: "White Yam (Isu Iyan) - from", category: "yam", emoji: "🍠", price: 5000, priceNote: "upward", image: "images/products/images (6).jpg" },
  { id: 28, name: "Palm Oil - 10 litres", category: "oils", emoji: "🫗", price: 18000, image: "images/products/images (7).jpg" },
  { id: 29, name: "Palm Oil - 5 litres", category: "oils", emoji: "🫗", price: 9000, image: "images/products/images (7).jpg" },
  { id: 30, name: "Palm Oil - 2.5 litres", category: "oils", emoji: "🫗", price: 5000, image: "images/products/images (7).jpg" },
  { id: 31, name: "Palm Oil - 1 litre", category: "oils", emoji: "🫗", price: 2500, image: "images/products/images (7).jpg" },
  { id: 32, name: "Palm Oil - 75cl bottle", category: "oils", emoji: "🫗", price: 1800, image: "images/products/images (7).jpg" },
  { id: 33, name: "Vegetable Oil - 10 litres", category: "oils", emoji: "🫗", price: 21000, image: "images/products/images (8).jpg" },
  { id: 34, name: "Vegetable Oil - 5 litres", category: "oils", emoji: "🫗", price: 11000, image: "images/products/images (8).jpg" },
  { id: 35, name: "Vegetable Oil - 2.5 litres", category: "oils", emoji: "🫗", price: 5500, image: "images/products/images (8).jpg" },
  { id: 36, name: "Vegetable Oil - 1 litre", category: "oils", emoji: "🫗", price: 2300, image: "images/products/images (8).jpg" },
  { id: 37, name: "Vegetable Oil - 75cl bottle", category: "oils", emoji: "🫗", price: 2100, image: "images/products/images (8).jpg" },
  // Sugar and seasonings
  { id: 38, name: "Sugar - 5 modules", category: "seasonings", emoji: "🍬", price: 14000, image: "images/products/images (9).jpg" },
  { id: 39, name: "Sugar - 1 module", category: "seasonings", emoji: "🍬", price: 2800, image: "images/products/images (9).jpg" },
  { id: 40, name: "Sugar - half module", category: "seasonings", emoji: "🍬", price: 1400, image: "images/products/images (9).jpg" },
  { id: 41, name: "Sugar - one cup", category: "seasonings", emoji: "🍬", price: 300, image: "images/products/images (9).jpg" },
  { id: 42, name: "Knorr - 100 pieces", category: "seasonings", emoji: "🧂", price: 3100, image: "images/products/images (10).jpg" },
  { id: 43, name: "Chicken flavour - 25 pieces", category: "seasonings", emoji: "🧂", price: 450, image: "images/products/images (10).jpg" },
  { id: 44, name: "Terra - 25 pieces", category: "seasonings", emoji: "🧂", price: 500, image: "images/products/images (10).jpg" },
  { id: 45, name: "Terra - 100 pieces", category: "seasonings", emoji: "🧂", price: 100, image: "images/products/images (10).jpg" },
  // Semovita, milk and tomato paste
  { id: 46, name: "Golden Penny Semovita - 1kg", category: "provisions", emoji: "🥣", price: 1600, image: "images/products/images (11).jpg" },
  { id: 47, name: "Golden Penny Semovita - 2kg", category: "provisions", emoji: "🥣", price: 3200, image: "images/products/images (11).jpg" },
  { id: 48, name: "Loyal Milk - one row", category: "provisions", emoji: "🥛", price: 2000, image: "images/products/Peak_UHT_Full_Cream__1-NOBG.webp" },
  { id: 49, name: "Three Crowns Milk - one row", category: "provisions", emoji: "🥛", price: 1400, image: "images/products/Peak_UHT_Full_Cream__1-NOBG.webp" },
  { id: 50, name: "Cowbell Milk - one row", category: "provisions", emoji: "🥛", price: 1500, image: "images/products/Peak_UHT_Full_Cream__1-NOBG.webp" },
  { id: 51, name: "Gino Paste - 5 pieces", category: "provisions", emoji: "🥫", price: 1000, image: "images/products/images (12).jpg" },
  { id: 52, name: "Gino Paste - piece", category: "provisions", emoji: "🥫", price: 250, image: "images/products/images (12).jpg" },
  { id: 53, name: "Tomato Jos - 5 pieces", category: "provisions", emoji: "🥫", price: 700, image: "images/products/images (13).jpg" },
  { id: 54, name: "Tomato Jos - piece", category: "provisions", emoji: "🥫", price: 150, image: "images/products/images (13).jpg" },
  // Other products mentioned without a supplied price
  { id: 55, name: "Kulikuli", category: "other", emoji: "🥜", price: null, image: "images/products/kulikuli.jpg" },
  { id: 56, name: "Egusi (lilo and seed)", category: "other", emoji: "🌰", price: null },
  { id: 57, name: "Ogbono", category: "other", emoji: "🌰", price: null },
  { id: 58, name: "Salt", category: "other", emoji: "🧂", price: null },
  { id: 59, name: "Curry and thyme", category: "other", emoji: "🌿", price: null },
  { id: 60, name: "Crayfish", category: "other", emoji: "🦐", price: 1200, priceNote: "per cup" },
  { id: 61, name: "Stockfish", category: "other", emoji: "🐟", price: null },
  { id: 62, name: "Onion, ginger and garlic", category: "other", emoji: "🧄", price: null },
  { id: 63, name: "Dried ponmo and prawns", category: "other", emoji: "🍲", price: null },
  { id: 64, name: "Vegetables", category: "other", emoji: "🥬", price: null },
  { id: 65, name: "Banana and plantain", category: "fruits", emoji: "🍌", price: null },
  { id: 66, name: "Coconut, apple, grapes, carrot and pineapple", category: "fruits", emoji: "🍍", price: null },
];

// ---- STATE ----
let cart = JSON.parse(localStorage.getItem("dammizzCart") || "[]");
let visibleCount = productsData.length;
let currentFilter = "all";
let filteredProducts = [...productsData];

// ---- UTILITIES ----
const $ = (id) => document.getElementById(id);
const formatNaira = (n) => `₦${n.toLocaleString("en-NG")}.00`;
const categoryLabels = {
  rice: "Rice",
  beans: "Beans",
  garri: "Garri",
  pasta: "Pasta & Noodles",
  yam: "Yam",
  oils: "Cooking Oils",
  seasonings: "Sugar & Seasonings",
  provisions: "Provisions",
  fruits: "Fruits",
  other: "Other Foodstuff"
};
const EMAILJS_SERVICE_ID = "service_ywx4w14";
const EMAILJS_TEMPLATE_ID = "template_279nug7";
const EMAILJS_PUBLIC_KEY = "fzBC5HOKc2od19DPI";
const BUSINESS_EMAIL = "Damizzfoodmart@gmail.com";
const EMAILJS_TEMPLATE_KEY = EMAILJS_TEMPLATE_ID.startsWith("template_")
  ? EMAILJS_TEMPLATE_ID
  : `template_${EMAILJS_TEMPLATE_ID}`;
let emailjsReady = false;

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  emailjsReady = true;
}

function showToast(msg, type = "success") {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function saveCart() {
  localStorage.setItem("dammizzCart", JSON.stringify(cart));
}

// ---- NAVBAR SCROLL ----
const navbar = $("navbar");
window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 80) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  const btt = $("backToTop");
  if (btt) {
    if (window.scrollY > 400) btt.classList.add("show");
    else btt.classList.remove("show");
  }
});

// ---- HAMBURGER ----
const hamburger = $("hamburger");
const navLinksEl = $("navLinks");
if (hamburger && navLinksEl) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinksEl.classList.toggle("open");
  });
  navLinksEl.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinksEl.classList.remove("open");
    });
  });
}

// ---- ANNOUNCEMENT ----
document.querySelectorAll(".announcement-bar").forEach(bar => {
  const announcementId = bar.dataset.announcementId;
  const storageKey = `dammizzAnnouncement:${announcementId}`;
  const closeButton = bar.querySelector(".announcement-close");
  if (localStorage.getItem(storageKey) !== "dismissed") {
    bar.classList.add("announcement-visible");
  }
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      bar.classList.remove("announcement-visible");
      bar.hidden = true;
      localStorage.setItem(storageKey, "dismissed");
    });
  }
});

// ---- SEARCH BAR ----
const searchInput = document.querySelector(".nav-search-box input");
const searchBtn = document.querySelector(".nav-search-btn");

function doSearch() {
  if (!searchInput) return;
  const q = searchInput.value.trim();
  if (!q) return;

  // If we're not on the products page, navigate there with the query.
  if (!$("productsGrid")) {
    window.location.href = "product.html?search=" + encodeURIComponent(q);
    return;
  }

  applySearch(q);
}

function applySearch(q) {
  const query = q.toLowerCase();
  currentFilter = "all";
  filteredProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );
  document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
  const allTab = document.querySelector('[data-filter="all"]');
  if (allTab) allTab.classList.add("active");
  visibleCount = filteredProducts.length;
  renderProducts();
  const productsSection = $("products");
  if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
}

if (searchBtn) searchBtn.addEventListener("click", doSearch);
if (searchInput) searchInput.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });

// ---- RENDER PRODUCTS (product.html only) ----
function renderProducts() {
  const grid = $("productsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const toShow = filteredProducts.slice(0, visibleCount);

  if (toShow.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gray);">
      <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
      <h3>No products found</h3><p>Try a different search or filter.</p></div>`;
    const loadMoreBtn = $("loadMoreBtn");
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  const productGroups = [...toShow.reduce((groups, product) => {
    const productFamily = product.name.split(" - ")[0];
    const groupKey = `${product.category}|${productFamily}`;
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey).push(product);
    return groups;
  }, new Map()).values()];

  productGroups.forEach((group, i) => {
    const product = group[0];
    const productTitle = product.name.split(" - ")[0];
    const productVisual = product.image
      ? `<img src="${product.image}" alt="${productTitle}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
          <span class="product-emoji-fallback" hidden>${product.emoji}</span>`
      : `<span class="product-emoji-fallback">${product.emoji}</span>`;
    const optionRows = group.map(item => {
      const optionName = item.price === null
        ? "Other products available"
        : (item.name.includes(" - ") ? item.name.split(" - ").slice(1).join(" - ") : item.name);
      const priceText = item.price === null
        ? `<a class="price-request-link" href="mailto:Damizzfoodmart@gmail.com?subject=Price%20request%20for%20${encodeURIComponent(item.name)}">Contact by email for price</a>`
        : `${formatNaira(item.price)}${item.priceNote ? ` ${item.priceNote}` : ""}`;
      const cartButton = item.price === null
        ? ""
        : `<button class="add-to-cart" data-id="${item.id}" title="Add ${item.name} to cart" aria-label="Add ${item.name} to cart">
            <i class="fas fa-plus"></i>
          </button>`;
      return `<div class="product-option">
        <span class="product-option-name">${optionName}</span>
        <span class="product-option-price">${priceText}</span>
        ${cartButton}
      </div>`;
    }).join("");

    const card = document.createElement("div");
    const containsProductImage = /milk/i.test(productTitle);
    card.className = `product-card price-list-card reveal${containsProductImage ? " product-image-contain" : ""}`;
    card.dataset.category = product.category;
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        ${productVisual}
      </div>
      <div class="product-body">
        <div class="product-category">${categoryLabels[product.category] || product.category}</div>
        <div class="product-name">${productTitle}</div>
        <div class="product-options">${optionRows}</div>
      </div>`;
    grid.appendChild(card);

    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add("visible"), i * 70);
    });
  });

  grid.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });

  const loadMoreBtn = $("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = visibleCount >= filteredProducts.length ? "none" : "inline-flex";
  }
}

// ---- FILTER TABS ----
document.querySelectorAll(".filter-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    filteredProducts = currentFilter === "all"
      ? [...productsData]
      : productsData.filter(p => p.category === currentFilter);
    visibleCount = filteredProducts.length;
    renderProducts();
  });
});

// ---- LOAD MORE ----
const loadMoreBtnEl = $("loadMoreBtn");
if (loadMoreBtnEl) {
  loadMoreBtnEl.addEventListener("click", () => {
    visibleCount += 8;
    renderProducts();
  });
}

// ---- CART ----
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, emoji: product.emoji, price: product.price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✅ ${product.emoji} ${product.name} added to cart!`, "success");
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart", "error");
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else {
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast("🗑️ Cart cleared", "error");
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartCountEl = $("cartCount");
  if (cartCountEl) cartCountEl.textContent = count;

  const cartItems = $("cartItems");
  const emptyCart = $("emptyCart");
  const cartFooter = $("cartFooter");
  const cartReviewItems = $("cartReviewItems");
  const orderConfirmation = $("orderConfirmation");
  if (!cartItems || !emptyCart || !cartFooter) return;
  if (orderConfirmation) orderConfirmation.hidden = true;

  if (cart.length === 0) {
    emptyCart.style.display = "block";
    cartItems.style.display = "block";
    cartItems.innerHTML = "";
    if (cartReviewItems) cartReviewItems.innerHTML = "";
    cartFooter.style.display = "none";
  } else {
    emptyCart.style.display = "none";
    cartItems.style.display = "block";
    cartFooter.style.display = "block";

    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-emoji">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatNaira(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </div>`).join("");

    if (cartReviewItems) {
      cartReviewItems.innerHTML = cart.map(item => `
        <div class="review-item">
          <span class="review-item-name">${item.emoji} ${item.name}</span>
          <span class="review-item-meta">Qty: ${item.qty} · ${formatNaira(item.price * item.qty)}</span>
        </div>
      `).join("");
    }

    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const subEl = $("cartSubtotal");
    const totEl = $("cartTotal");
    if (subEl) subEl.textContent = formatNaira(subtotal);
    if (totEl) totEl.textContent = formatNaira(subtotal);
  }
}

function showOrderConfirmation(name, total) {
  const cartItems = $("cartItems");
  const emptyCart = $("emptyCart");
  const cartFooter = $("cartFooter");
  const confirmation = $("orderConfirmation");
  if (!cartItems || !emptyCart || !cartFooter || !confirmation) return;

  cartItems.innerHTML = "";
  cartItems.style.display = "none";
  emptyCart.style.display = "none";
  cartFooter.style.display = "none";
  $("confirmationName").textContent = name;
  $("confirmationTotal").textContent = formatNaira(total);
  confirmation.hidden = false;
}

// ---- CART TOGGLE ----
const cartToggle = $("cartToggle");
const cartSidebar = $("cartSidebar");
const cartOverlay = $("cartOverlay");
const closeCartBtn = $("closeCart");

function openCart() {
  if (cartSidebar) cartSidebar.classList.add("open");
  if (cartOverlay) cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCartFn() {
  if (cartSidebar) cartSidebar.classList.remove("open");
  if (cartOverlay) cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

const confirmationContinueBtn = $("confirmationContinueBtn");
if (confirmationContinueBtn) {
  confirmationContinueBtn.addEventListener("click", closeCartFn);
}

if (cartToggle) cartToggle.addEventListener("click", openCart);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartFn);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartFn);

const clearCartBtn = $("clearCartBtn");
if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

const continueShoppingBtn = $("continueShoppingBtn");
if (continueShoppingBtn) {
  continueShoppingBtn.addEventListener("click", () => {
    const confirmation = $("orderConfirmation");
    const cartItems = $("cartItems");
    if (confirmation) confirmation.hidden = true;
    if (cartItems) cartItems.style.display = "block";
    updateCartUI();
    closeCartFn();
  });
}

const shopNowCart = $("shopNowCart");
if (shopNowCart) shopNowCart.addEventListener("click", closeCartFn);

const checkoutBtn = $("checkoutBtn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", async () => {
    if (cart.length === 0) return;

    const name = $("orderName")?.value.trim();
    const phone = $("orderPhone")?.value.trim();
    const address = $("orderAddress")?.value.trim();
    if (!name || !phone || !address) {
      showToast("Please enter your name, phone number, and address", "error");
      return;
    }

    const orderLines = cart.map(item =>
      `${item.name} x${item.qty} = ${formatNaira(item.price * item.qty)}`
    ).join("\n");
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const orderNumber = `DM-${Date.now().toString().slice(-8)}`;
    const originalLabel = checkoutBtn.innerHTML;
    checkoutBtn.disabled = true;
    checkoutBtn.innerHTML = 'Sending Order... <i class="fas fa-spinner fa-spin"></i>';

    // EmailJS's template editor only supports flat {{variable}} placeholders —
    // The built-in Order Confirmation template uses an `orders` loop and
    // values from the nested `cost` object.
    const orderItemsForTemplate = cart.map(item => ({
      name: item.name,
      units: item.qty,
      price: formatNaira(item.price)
    }));

    const orderItemsHtml = cart.map(item => `
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${item.name}</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; text-align: center;">${item.qty}</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; text-align: right;">${formatNaira(item.price)}</td>
        </tr>`).join("");

    try {
      if (!emailjsReady) throw new Error("EmailJS library is unavailable");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_KEY, {
        subject: `[Dammizz Foodmart] New order from ${name}`,
        from_name: "Dammizz Foodmart",
        email: BUSINESS_EMAIL,
        to_email: BUSINESS_EMAIL,
        recipient_email: BUSINESS_EMAIL,
        order_id: orderNumber,
        orders: orderItemsForTemplate,
        cost: {
          shipping: "FREE",
          tax: formatNaira(0),
          total: formatNaira(total)
        },
        order_number: orderNumber,
        customer_name: name,
        customer_phone: phone,
        delivery_address: address,
        order_items: orderLines,        // plain-text fallback list
        order_items_html: orderItemsHtml, // pre-built <tr> rows for the template
        shipping: "FREE",
        taxes: formatNaira(0),
        order_total: formatNaira(total),
        message: orderLines
      });
      showToast("Order sent successfully. We will contact you shortly.", "success");
      cart = [];
      saveCart();
      updateCartUI();
      showOrderConfirmation(name, total);
      $("orderName").value = "";
      $("orderPhone").value = "";
      $("orderAddress").value = "";
    } catch (error) {
      console.error("Dammizz order email failed:", error);
      showToast(`Order not sent: ${error?.text || error?.message || "EmailJS error"}`, "error");
    } finally {
      checkoutBtn.disabled = false;
      checkoutBtn.innerHTML = originalLabel;
    }
  });
}

// ---- CONTACT FORM (contact.html only) ----
const contactForm = $("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = $("cfName").value.trim();
    const email = $("cfEmail").value.trim();
    const phone = $("cfPhone").value.trim();
    const subject = $("cfSubject").value.trim();
    const message = $("cfMessage").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    const btn = this.querySelector('button[type="submit"]');
    const originalLabel = btn.innerHTML;
    btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    try {
      if (!emailjsReady) throw new Error("EmailJS library is unavailable");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_KEY, {
        subject: subject
          ? `[Dammizz Foodmart] Contact message: ${subject}`
          : `[Dammizz Foodmart] New contact message from ${name}`,
        from_name: "Dammizz Foodmart",
        to_email: BUSINESS_EMAIL,
        recipient_email: BUSINESS_EMAIL,
        customer_name: name,
        customer_email: email,
        customer_phone: phone || "Not provided",
        enquiry_subject: subject || "General enquiry",
        message,
        reply_to: email
      });
      const successEl = $("formSuccess");
      if (successEl) successEl.classList.add("show");
      this.reset();
      showToast("Message sent successfully!", "success");
      setTimeout(() => { if (successEl) successEl.classList.remove("show"); }, 6000);
    } catch (error) {
      console.error("Dammizz contact email failed:", error);
      showToast(`Message not sent: ${error?.text || error?.message || "EmailJS error"}`, "error");
    } finally {
      btn.innerHTML = originalLabel;
      btn.disabled = false;
    }
  });
}

// ---- BACK TO TOP ----
const backToTopBtn = $("backToTop");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

function observeRevealElements() {
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.querySelectorAll(
  ".why-feature, .ci-card, .offer-card"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// ---- INIT ----
if ($("productsGrid")) {
  // Pick up ?search= param coming from another page's search bar
  const params = new URLSearchParams(window.location.search);
  const q = params.get("search");
  renderProducts();
  if (q && searchInput) {
    searchInput.value = q;
    applySearch(q);
  }
}
updateCartUI();
observeRevealElements();
