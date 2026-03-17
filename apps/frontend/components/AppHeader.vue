<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCart } from '~/composables/useCart';

const { cart, fetchCart } = useCart();

// Fetch initial cart state for the header badge
onMounted(async () => {
  await fetchCart();
});

const cartItemsCount = computed(() => {
  if (!cart.value?.items) return 0;
  return cart.value.items.reduce((sum, item) => sum + item.quantity, 0);
});
</script>

<template>
  <header class="app-header">
    <!-- Top Contact Bar -->
    <div class="top-bar">
      <div class="top-bar-content">
        <a href="mailto:info@vuebakery.nl" class="contact-link">
          <span class="icon">✉</span> info@vuebakery.nl
        </a>
        <a href="tel:0123456789" class="contact-link">
          <span class="icon">📞</span> 012 345 67 89
        </a>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="main-nav-wrapper">
      <nav class="main-nav">
        <!-- Left Nav -->
        <ul class="nav-list left-nav">
          <li><NuxtLink to="/" class="icon-link">🏠</NuxtLink></li>
          <li><NuxtLink to="/assortiment">ASSORTIMENT</NuxtLink></li>
          <li><NuxtLink to="/zuurdesem">ONZE SPECIALS</NuxtLink></li>
        </ul>

      <!-- Center Logo -->
        <div class="logo-wrapper">
          <NuxtLink to="/">
            <div class="logo-circle">
              <span class="logo-text">VUE BAKERY</span>
              <span class="logo-subtext">sinds {{ new Date().getFullYear() }}</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Right Nav -->
        <ul class="nav-list right-nav">
          <li><NuxtLink to="/over-ons">OVER ONS</NuxtLink></li>
          <li><NuxtLink to="/zuurdesem">CONTACT</NuxtLink></li>
          <li><NuxtLink to="/login" class="icon-link">👤</NuxtLink></li>
          <li>
            <NuxtLink to="/assortiment" class="cart-link icon-link">
              🛒 <span class="cart-badge">{{ cartItemsCount }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  position: relative;
  z-index: 100;
}

/* Top Bar */
.top-bar {
  background-color: var(--color-rust-brown);
  color: var(--color-cream);
  padding: 0.5rem 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
}

.top-bar-content {
  display: flex;
  gap: 1.5rem;
}

.top-bar .contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.top-bar .contact-link:hover {
  text-decoration: underline;
}

/* Main Navigation */
.main-nav-wrapper {
  background-color: var(--color-rust-brown);
  color: var(--color-white);
  padding: 0 2rem;
  position: relative;
}

.main-nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.nav-list a {
  position: relative;
  padding: 0.5rem 0;
  transition: opacity 0.2s;
}

.nav-list a:hover {
  opacity: 0.8;
}

.nav-list a.icon-link {
  display: inline-flex;
  align-items: center;
  font-size: 1.1rem;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
}

.nav-list a.icon-link:hover {
  transform: scale(1.4);
  opacity: 1;
}

/* Logo */
.logo-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -20px; /* Overlaps top and bottom */
  z-index: 10;
}

.logo-circle {
  background-color: var(--color-white);
  border: 4px solid var(--color-white);
  border-radius: 50%;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  color: var(--color-rust-brown);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.1;
}

.logo-subtext {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 2px;
}

/* Cart */
.cart-link {
  display: flex;
  align-items: center;
  position: relative;
}

.cart-badge {
  background-color: var(--color-olive-green);
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -10px;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .logo-wrapper {
    position: relative;
    top: 0;
    transform: none;
    left: 0;
  }
  .logo-circle {
    width: 60px;
    height: 60px;
  }
  .logo-text { font-size: 0.8rem; }
  .logo-subtext { display: none; }
  .main-nav {
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
    gap: 1rem;
  }
  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
