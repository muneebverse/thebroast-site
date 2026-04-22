/**
 * The Broast - Complete Cart Management System
 * Single source of truth for menu data and cart operations
 * Persistent cart using localStorage
 */

// ─── CART STATE ───
let cart = [];
let currentFilter = 'all';

// ─── LOAD CART ON INIT ───
function loadCart() {
  const saved = localStorage.getItem('broastCart');
  cart = saved ? JSON.parse(saved) : [];
}

/**
 * COMPLETE MENU ITEMS - All categories
 */
const menuItems = [
  // ── BROAST ──
  {
    id: 1,
    name: 'Full Broast',
    price: 550,
    category: 'broast',
    desc: 'Crispy fried chicken, perfectly spiced',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Half Broast',
    price: 320,
    category: 'broast',
    desc: 'Half portion of our signature broast',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80&fit=crop',
    badge: null
  },
  {
    id: 3,
    name: 'Quarter Broast',
    price: 180,
    category: 'broast',
    desc: 'Single crispy piece — perfect snack',
    image: 'https://images.unsplash.com/photo-1587245741195-4cde0ed027b0?w=600&q=80&fit=crop',
    badge: null
  },

  // ── TIKKA & KABAB ──
  {
    id: 4,
    name: 'Tikka Kabab',
    price: 420,
    category: 'tikka',
    desc: 'Tandoori marinated, charcoal grilled',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80&fit=crop',
    badge: null
  },
  {
    id: 5,
    name: 'Beef Karahi',
    price: 480,
    category: 'tikka',
    desc: 'Traditional beef karahi with spices',
    image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop',
    badge: null
  },
  {
    id: 6,
    name: 'Mutton Karahi',
    price: 520,
    category: 'tikka',
    desc: 'Tender mutton in aromatic gravy',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cfd45e?w=600&q=80&fit=crop',
    badge: "Chef's Pick"
  },

  // ── FAST FOOD ──
  {
    id: 7,
    name: 'Crispy Fries',
    price: 120,
    category: 'fastfood',
    desc: 'Golden seasoned fries',
    image: 'https://images.unsplash.com/photo-1585238341710-4edd9fe8e713?w=600&q=80&fit=crop',
    badge: null
  },
  {
    id: 8,
    name: 'Broast Burger',
    price: 220,
    category: 'fastfood',
    desc: 'Crispy broast patty with fresh toppings',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&fit=crop',
    badge: null
  },
  {
    id: 9,
    name: 'Cold Drink',
    price: 80,
    category: 'fastfood',
    desc: 'Chilled beverages (various brands)',
    image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop',
    badge: null
  },
];

/**
 * Save cart to localStorage
 */
function saveCart() {
  localStorage.setItem('broastCart', JSON.stringify(cart));
}

/**
 * Update cart — add or remove items
 */
function updateCart(itemId, quantity, price) {
  const existingItem = cart.find(c => c.id === itemId);

  if (existingItem) {
    existingItem.quantity += quantity;
    if (existingItem.quantity <= 0) {
      cart = cart.filter(c => c.id !== itemId);
    }
  } else if (quantity > 0) {
    const item = menuItems.find(m => m.id === itemId);
    if (item) {
      cart.push({
        id: itemId,
        name: item.name,
        price: price,
        quantity: quantity
      });
    }
  }

  saveCart();
  updateCartBadge();
  renderCart();
  renderMenuIfExists();
}

/**
 * Update cart badge count
 */
function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  if (badge) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
  }
}

/**
 * Render cart items in sidebar
 */
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    if (checkoutBtn) checkoutBtn.disabled = true;
    updateCartSummary();
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCart(${item.id}, -1, ${item.price})">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCart(${item.id}, 1, ${item.price})">+</button>
        </div>
        <div class="cart-item-total">
          Rs. ${item.price * item.quantity}
        </div>
        <button class="cart-item-remove" onclick="updateCart(${item.id}, -${item.quantity}, ${item.price})">✕</button>
      </div>
    `;
  }).join('');

  if (checkoutBtn) checkoutBtn.disabled = false;
  updateCartSummary();
}

/**
 * Update cart summary (subtotal, delivery, total)
 */
function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 100 : 0;
  const total = subtotal + delivery;

  const subtotalEl = document.getElementById('subtotal');
  const deliveryEl = document.getElementById('delivery');
  const totalEl = document.getElementById('total');

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal}`;
  if (deliveryEl) deliveryEl.textContent = `Rs. ${delivery}`;
  if (totalEl) totalEl.textContent = `Rs. ${total}`;
}

/**
 * Toggle cart sidebar
 */
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');

  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open');
}

/**
 * Checkout via WhatsApp with formatted message
 */
function checkoutWhatsApp() {
  if (!cart.length) return;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 100;
  const total = subtotal + delivery;

  let message = '*🍗 THE BROAST - ORDER*\n\n';

  cart.forEach(item => {
    message += `${item.name} × ${item.quantity} = Rs. ${item.price * item.quantity}\n`;
  });

  message += `\n*────────────────*\n`;
  message += `*Subtotal:* Rs. ${subtotal}\n`;
  message += `*Delivery:* Rs. ${delivery}\n`;
  message += `*TOTAL:* Rs. ${total}\n`;
  message += `*────────────────*\n\n`;
  message += `📍 Noor Park, Sahiwal\n`;
  message += `⏰ Open Daily - 10 AM to 1 AM`;

  const whatsappURL = `https://wa.me/923214466766?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');

  // Clear cart after checkout
  cart = [];
  saveCart();
  renderCart();
  renderMenuIfExists();
  toggleCart();
}

/**
 * Get all menu items
 */
function getAllMenuItems() {
  return menuItems;
}

/**
 * Re-render menu if it exists
 */
function renderMenuIfExists() {
  if (typeof renderMenu === 'function') {
    renderMenu(currentFilter || 'all');
  }
  if (typeof renderFeatured === 'function') {
    renderFeatured();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartBadge();
  renderCart();
});

// Sync cart when window regains focus
window.addEventListener('focus', () => {
  const savedCart = JSON.parse(localStorage.getItem('broastCart')) || [];
  if (JSON.stringify(savedCart) !== JSON.stringify(cart)) {
    cart = savedCart;
    updateCartBadge();
    renderCart();
    renderMenuIfExists();
  }
});

// Close cart on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('cartSidebar')?.classList.contains('open')) {
    toggleCart();
  }
});
