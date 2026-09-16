/**
 * The Holy Grill — Vanilla JavaScript Application
 * Quality Food. Bold Flavour. Livingstone, Zambia.
 */

// ==========================================================================
// Configuration & Constants
// ==========================================================================
const CONFIG = {
  phoneDisplay: "+26077 160 9900",
  whatsappNumber: "260771609900",
  location: "Maramba Market, Livingstone, Zambia",
  hours: "Monday – Sunday · 10:00 – 20:00"
};

// Menu Database
const MENU_ITEMS = [
  // Kota
  {
    id: "regular-kota",
    name: "Regular Kota",
    category: "Kota",
    price: 75,
    description: "Classic kota comfort with a generous stack of fillings and a smoky finish.",
    image: "images/regular-kota.png"
  },
  {
    id: "kota-meal",
    name: "Kota Meal",
    category: "Kota",
    price: 99,
    description: "Loaded kota served with crisp fries and a cold 330ml drink.",
    image: "images/kota-meal.jpg",
    tag: "Full meal"
  },
  // Shawarma
  {
    id: "shawarma-regular",
    name: "Shawarma Regular",
    category: "Shawarma",
    price: 45,
    description: "Warm wrap, seasoned grilled chicken, crunchy salad, and our house sauce.",
    image: "images/shawarma.jpeg"
  },
  {
    id: "mini-platter",
    name: "Mini Shawarma Platter",
    category: "Shawarma",
    price: 50,
    description: "Sliced shawarma with fries, slaw, and a dip for easy sharing.",
    image: "images/mini-platter.png"
  },
  {
    id: "large-platter",
    name: "Large Shawarma Platter",
    category: "Shawarma",
    price: 65,
    description: "A bigger grilled shawarma plate with extra fries and all the good bits.",
    image: "images/shawarma large.jpeg",
    tag: "Made to share"
  },
  // Quesadilla
  {
    id: "burger-regular",
    name: "Quesadilla",
    category: "Shawarma",
    price: 120,
    description: "Juicy grilled patty, fresh.",
    image: "images/Quesadilla.png"
  },
  // Burgers
  {
    id: "burger-regular",
    name: "Burger Regular",
    category: "Burgers",
    price: 35,
    description: "Juicy grilled patty, fresh lettuce, tomato, and a soft toasted bun.",
    image: "images/burger-regular.png"
  },
  {
    id: "double-burger",
    name: "Double Burger",
    category: "Burgers",
    price: 65,
    description: "Two flame-grilled patties, melted cheese, pickles, and bold house sauce.",
    image: "images/double-burger.png",
    tag: "Hungry?"
  },
  {
    id: "max-burger",
    name: "Max Burger combo",
    category: "Burgers",
    price: 85,
    description: "The big one: double patty, cheese, onion, tomato, and extra sauce.",
    image: "images/maxburgercombo.jpeg"
  },
  // Sides
  {
    id: "fries",
    name: "Fries",
    category: "Sides",
    price: 25,
    description: "Crispy, golden, and made for dipping.",
    image: "images/fries.png"
  },
  {
    id: "sausage",
    name: "Sausage",
    category: "Sides",
    price: 15,
    description: "Grilled, smoky, and ready to add to anything.",
    image: "images/sausage.jpg"
  },
  // Drinks
  {
    id: "500-frutiana",
    name: "500ml Fruticana",
    category: "Drinks",
    price: 10,
    description: "All flavours available",
    image: "images/fruticana.png"
  },
  {
    id: "500-cocacola",
    name: "500ml Cocacola",
    category: "Drinks",
    price: 15,
    description: "A cold drink to finish the feast.",
    image: "images/cocacola.webp"
  },
  {
    id: "330-cocacola",
    name: "350ml Cocacola",
    category: "Drinks",
    price: 10,
    description: "A cold drink to finish the feast.",
    image: "images/coc.avif"
  },
  {
    id: "500-water",
    name: "500ml Water",
    category: "Drinks",
    price: 8,
    description: "cold water to refresh yourselft",
    image: "images/water.jpeg"
  },
  {
    id: "500-sprite",
    name: "500ml Sprite",
    category: "Drinks",
    price: 15,
    description: "A cold drink to finish the feast.",
    image: "images/sprite.avif"
  },
  {
    id: "330-sprite",
    name: "350ml Sprite",
    category: "Drinks",
    price: 10,
    description: "A cold drink to finish the feast.",
    image: "images/spri.jpg"
  },
  {
    id: "330-fanta",
    name: "350ml fanta",
    category: "Drinks",
    price: 10,
    description: "A cold drink to finish the feast.",
    image: "images/fan.jpg"
  },
  {
    id: "fanta-500",
    name: "500ml Fanta",
    category: "Drinks",
    price: 15,
    description: "Bright, bubbly, and best served ice cold.",
    image: "images/fanta.avif"
  }
];

// Specials & Combos Definitions
const SPECIAL_ITEMS = {
  "today-special": {
    id: "today-special",
    name: "Parked Burger Special",
    category: "Burgers",
    price: 54.99,
    description: "Parked Burger + crispy fries + coleslaw + a free drink.",
    image: "images/special.jpg",
    tag: "Today Only"
  },
  "hh-burger": {
    id: "hh-burger",
    name: "Happy Hour: Parked Burger Meal",
    category: "Burgers",
    price: 54.99,
    description: "Parked burger with crispy fries, coleslaw, and free drink.",
    image: "images/burger-regular.jpg",
    tag: "Happy Hour"
  },
  "hh-shawarma": {
    id: "hh-shawarma",
    name: "Happy Hour: Tasty Shawarma Wrap Meal",
    category: "Shawarma",
    price: 54.99,
    description: "Warm wrap with fries, coleslaw, and free drink.",
    image: "images/shawarma.jpg",
    tag: "Happy Hour"
  },
  "hh-kota": {
    id: "hh-kota",
    name: "Happy Hour: Loaded Kota Meal",
    category: "Kota",
    price: 99.99,
    description: "Full loaded kota with crispy fries, coleslaw, and free drink.",
    image: "images/kota-meal.jpg",
    tag: "Happy Hour"
  }
};

// ==========================================================================
// Application State
// ==========================================================================
const state = {
  cart: JSON.parse(localStorage.getItem("holy_grill_cart") || "[]"),
  currentCategory: "All",
  searchQuery: "",
  isDrawerOpen: false,
  isCheckoutView: false,
  orderType: "Pickup",
  customerInfo: {
    name: localStorage.getItem("holy_grill_name") || "",
    phone: localStorage.getItem("holy_grill_phone") || "",
    location: localStorage.getItem("holy_grill_loc") || "",
    instructions: ""
  },
  cardQuantities: {}
};

// Format Currency
function formatKwacha(amount) {
  return `K${Number(amount).toFixed(amount % 1 ? 2 : 0)}`;
}

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : "toast-success"}`;

  const icon = type === "error" ? "⚠️" : "✓";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastSlideOut 0.25s forwards";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// ==========================================================================
// Cart Management
// ==========================================================================
function saveCart() {
  localStorage.setItem("holy_grill_cart", JSON.stringify(state.cart));
  updateCartCounters();
}

function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function addToCart(product, quantity = 1) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  saveCart();
  renderCartDrawer();
  showToast(`${product.name} added to your order!`);
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }
  saveCart();
  renderCartDrawer();
}

function removeFromCart(productId) {
  const item = state.cart.find(i => i.id === productId);
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  renderCartDrawer();
  if (item) {
    showToast(`Removed ${item.name} from order`);
  }
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCartDrawer();
  showToast("Order cleared");
}

function updateCartCounters() {
  const count = getCartCount();
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-grid" : "none";
  });
}

// ==========================================================================
// Drawer / Modal Controls
// ==========================================================================
function openDrawer(checkoutMode = false) {
  state.isDrawerOpen = true;
  state.isCheckoutView = checkoutMode;
  const overlay = document.getElementById("cart-overlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderCartDrawer();
}

function closeDrawer() {
  state.isDrawerOpen = false;
  const overlay = document.getElementById("cart-overlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// WhatsApp Order Formatting & Submission
// ==========================================================================
function buildWhatsAppMessage() {
  const itemsText = state.cart
    .map(item => `• ${item.quantity} × ${item.name} — ${formatKwacha(item.price * item.quantity)}`)
    .join("\n");

  const totalText = formatKwacha(getCartTotal());

  let locationLine = "";
  if (state.orderType === "Delivery") {
    locationLine = `\nDelivery Location: ${state.customerInfo.location}`;
  }

  const instructions = state.customerInfo.instructions.trim() || "None";

  return `Hello The Holy Grill!

I would like to place an order.

ORDER DETAILS
${itemsText}

TOTAL: ${totalText}

CUSTOMER DETAILS
Name: ${state.customerInfo.name}
Phone: ${state.customerInfo.phone}
Order Type: ${state.orderType}${locationLine}

Additional Instructions:
${instructions}

Please confirm my order. Thank you!`;
}

function submitWhatsAppOrder(e) {
  if (e) e.preventDefault();

  if (state.cart.length === 0) {
    showToast("Please add at least one item before ordering.", "error");
    return;
  }

  // Extract form inputs
  const nameInput = document.getElementById("cust-name");
  const phoneInput = document.getElementById("cust-phone");
  const locInput = document.getElementById("cust-location");
  const instrInput = document.getElementById("cust-instructions");

  if (!nameInput || !phoneInput) return;

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const location = locInput ? locInput.value.trim() : "";
  const instructions = instrInput ? instrInput.value.trim() : "";

  if (!name || !phone) {
    showToast("Please enter your name and phone number.", "error");
    return;
  }

  if (state.orderType === "Delivery" && !location) {
    showToast("Please provide a delivery location.", "error");
    return;
  }

  // Update State & LocalStorage
  state.customerInfo = { name, phone, location, instructions };
  localStorage.setItem("holy_grill_name", name);
  localStorage.setItem("holy_grill_phone", phone);
  if (location) localStorage.setItem("holy_grill_loc", location);

  // Generate Message & WhatsApp URL
  const message = buildWhatsAppMessage();
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab
  window.open(waUrl, "_blank", "noopener,noreferrer");
  showToast("Opening WhatsApp with your order...", "success");
}

function copyOrderDetails() {
  if (state.cart.length === 0) {
    showToast("Cart is empty.", "error");
    return;
  }
  const message = buildWhatsAppMessage();
  navigator.clipboard.writeText(message).then(() => {
    showToast("Order message copied to clipboard!", "success");
  }).catch(() => {
    showToast("Failed to copy order.", "error");
  });
}

// ==========================================================================
// Render Functions
// ==========================================================================
function renderMenu() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const query = state.searchQuery.toLowerCase().trim();
  const filtered = MENU_ITEMS.filter(item => {
    const matchesCategory = state.currentCategory === "All" || item.category === state.currentCategory;
    const matchesSearch = !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #8c8378;">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No items found matching "${state.searchQuery}".</p>
        <button type="button" class="button button-dark" onclick="resetFilters()">View All Items</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const qty = state.cardQuantities[item.id] || 1;
    return `
      <article class="product-card" id="card-${item.id}">
        <div class="product-image-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          ${item.tag ? `<span class="product-tag">${item.tag}</span>` : ""}
        </div>
        <div class="product-content">
          <div class="product-title-row">
            <h3>${item.name}</h3>
            <strong>${formatKwacha(item.price)}</strong>
          </div>
          <p>${item.description}</p>
          <div class="product-action-row">
            <div class="quantity-control" aria-label="Quantity selector">
              <button type="button" aria-label="Decrease quantity" onclick="changeCardQty('${item.id}', -1)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
              <span id="qty-${item.id}">${qty}</span>
              <button type="button" aria-label="Increase quantity" onclick="changeCardQty('${item.id}', 1)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
            </div>
            <button type="button" class="add-button" onclick="handleAddFromCard('${item.id}')">
              Add to order
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function changeCardQty(id, delta) {
  const current = state.cardQuantities[id] || 1;
  const updated = Math.max(1, current + delta);
  state.cardQuantities[id] = updated;
  const span = document.getElementById(`qty-${id}`);
  if (span) span.textContent = updated;
}

function handleAddFromCard(id) {
  const product = MENU_ITEMS.find(i => i.id === id);
  if (!product) return;
  const qty = state.cardQuantities[id] || 1;
  addToCart(product, qty);
  state.cardQuantities[id] = 1;
  const span = document.getElementById(`qty-${id}`);
  if (span) span.textContent = "1";
}

function resetFilters() {
  state.currentCategory = "All";
  state.searchQuery = "";
  const searchInput = document.getElementById("menu-search");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".category-tabs button").forEach(b => {
    b.classList.toggle("active", b.dataset.category === "All");
  });
  renderMenu();
}

function renderCartDrawer() {
  const body = document.getElementById("drawer-body");
  const title = document.getElementById("drawer-title");
  if (!body || !title) return;

  const total = getCartTotal();

  if (state.isCheckoutView) {
    title.textContent = "Checkout";
    const summaryRows = state.cart.map(item => `
      <div class="summary-line">
        <span>${item.quantity} × ${item.name}</span>
        <span>${formatKwacha(item.quantity * item.price)}</span>
      </div>
    `).join("");

    body.innerHTML = `
      <form class="checkout-form" id="order-form" onsubmit="submitWhatsAppOrder(event)">
        <div class="checkout-summary">
          <div class="summary-header">
            <span>Order Summary</span>
            <strong>${formatKwacha(total)}</strong>
          </div>
          ${summaryRows}
        </div>

        <label for="cust-name">
          Customer Full Name *
          <input type="text" id="cust-name" required placeholder="e.g. Bwalya Mwape" value="${state.customerInfo.name}" />
        </label>

        <label for="cust-phone">
          WhatsApp Phone Number *
          <input type="tel" id="cust-phone" required placeholder="097 XXX XXXX" value="${state.customerInfo.phone}" />
        </label>

        <fieldset>
          <legend>Order Type</legend>
          <div class="order-type-options">
            <button type="button" class="${state.orderType === 'Pickup' ? 'selected' : ''}" onclick="setOrderType('Pickup')">
              Pickup
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V8H4v4"/><path d="M2 12h20"/><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/></svg>
            </button>
            <button type="button" class="${state.orderType === 'Delivery' ? 'selected' : ''}" onclick="setOrderType('Delivery')">
              Delivery
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </button>
          </div>
        </fieldset>

        <div id="delivery-location-wrap" style="display: ${state.orderType === 'Delivery' ? 'block' : 'none'};">
          <label for="cust-location">
            Delivery Location / Address in Livingstone *
            <input type="text" id="cust-location" placeholder="e.g. Maramba, Plot 42 / Near Market" value="${state.customerInfo.location}" ${state.orderType === 'Delivery' ? 'required' : ''} />
          </label>
        </div>

        <label for="cust-instructions">
          Additional Instructions
          <textarea id="cust-instructions" rows="2" placeholder="No onions, extra chilli sauce, bring change...">${state.customerInfo.instructions}</textarea>
        </label>

        <button type="submit" class="button button-whatsapp full-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
          Place Order in WhatsApp ↗
        </button>

        <button type="button" class="button-copy-order" onclick="copyOrderDetails()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          Copy Order Message (Offline / Fallback)
        </button>

        <button type="button" class="back-to-cart" onclick="toggleCheckoutView(false)">
          ← Back to Cart
        </button>
      </form>
    `;
    return;
  }

  // Cart View
  title.textContent = "Your Cart";

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div class="empty-cart">
        <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <h3>Your cart is waiting</h3>
        <p>Add something fresh, hot, and bold from our Livingstone grill menu.</p>
        <button type="button" class="button button-primary" onclick="closeDrawer(); document.querySelector('#menu')?.scrollIntoView({behavior: 'smooth'})">
          Browse the Menu ↘
        </button>
      </div>
    `;
    return;
  }

  const itemsHtml = state.cart.map(item => `
    <div class="cart-line">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>${formatKwacha(item.price)} each</p>
        <div class="quantity-control">
          <button type="button" aria-label="Decrease" onclick="updateCartQuantity('${item.id}', -1)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
          <span>${item.quantity}</span>
          <button type="button" aria-label="Increase" onclick="updateCartQuantity('${item.id}', 1)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
      <strong>${formatKwacha(item.price * item.quantity)}</strong>
      <button type="button" class="remove-button" aria-label="Remove item" onclick="removeFromCart('${item.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `).join("");

  body.innerHTML = `
    <div class="cart-lines">
      ${itemsHtml}
    </div>
    <div class="cart-total">
      <span>Total Order</span>
      <strong>${formatKwacha(total)}</strong>
    </div>
    <div class="drawer-actions">
      <button type="button" class="button button-primary full-button" onclick="toggleCheckoutView(true)">
        Checkout / Place Order ↘
      </button>
      <button type="button" class="clear-button" onclick="clearCart()">
        Clear Entire Order
      </button>
    </div>
  `;
}

function toggleCheckoutView(isCheckout) {
  state.isCheckoutView = isCheckout;
  renderCartDrawer();
}

function setOrderType(type) {
  state.orderType = type;
  const locWrap = document.getElementById("delivery-location-wrap");
  const locInput = document.getElementById("cust-location");
  if (locWrap) {
    locWrap.style.display = type === "Delivery" ? "block" : "none";
  }
  if (locInput) {
    locInput.required = type === "Delivery";
  }
  // update buttons state
  document.querySelectorAll(".order-type-options button").forEach(btn => {
    btn.classList.toggle("selected", btn.textContent.trim().startsWith(type));
  });
}

// Quick Add for Specials & Happy Hour Combos
function addSpecialOrder(specialKey) {
  const item = SPECIAL_ITEMS[specialKey];
  if (item) {
    addToCart(item, 1);
    openDrawer(false);
  }
}

// ==========================================================================
// Initialization & Event Listeners
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initial Render
  renderMenu();
  updateCartCounters();

  // Category Filter Tabs
  document.querySelectorAll(".category-tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tabs button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentCategory = btn.dataset.category || "All";
      renderMenu();
    });
  });

  // Search Input Listener
  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderMenu();
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const desktopNav = document.getElementById("desktop-nav");
  if (menuToggle && desktopNav) {
    menuToggle.addEventListener("click", () => {
      desktopNav.classList.toggle("mobile-nav-open");
    });
    desktopNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => desktopNav.classList.remove("mobile-nav-open"));
    });
  }

  // Keyboard Close (Escape)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.isDrawerOpen) {
      closeDrawer();
    }
  });

  // Close Drawer on backdrop click
  const overlay = document.getElementById("cart-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeDrawer();
      }
    });
  }
});
