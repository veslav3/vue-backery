<template>
  <div class="assortiment-page">
    <div class="header">
      <h1>Ons Assortiment</h1>
      <p>Vers gebakken, speciaal voor u.</p>
    </div>

    <div class="main-content">
      <div class="products-section">
        <div class="product-grid">
          <!-- Product Card -->
          <div v-for="product in products" :key="product.productId" class="product-card">
            <div class="product-image">
              <div class="image-placeholder">🥐</div>
            </div>
            <div class="product-info">
              <h2>{{ product.name }}</h2>
              <p class="price">€{{ product.price.toFixed(2) }}</p>
              <button 
                @click="handleAddToCart(product)" 
                :disabled="loading"
                class="add-btn"
              >
                {{ loading ? 'Toevoegen...' : 'In winkelmandje' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-sidebar">
        <!-- Cart Status Display -->
        <div class="cart-status" v-if="cart">
          <div class="cart-summary">
            <span>🛒 Winkelmandje: {{ cartItemsCount }} item(s)</span>
            <span class="total">Totaal: €{{ formattedTotal }}</span>
          </div>
          
          <!-- Cart Items List -->
          <div class="cart-items" v-if="cart.items && cart.items.length > 0">
            <div v-for="item in cart.items" :key="item.productId" class="cart-item">
              <span class="item-name">{{ item.name }}</span>
              <div class="item-controls">
                <button @click="handleUpdateQuantity(item, -1)" class="qty-btn" :disabled="loading" aria-label="Verminderen" title="Verminderen">-</button>
                <span class="item-qty">{{ item.quantity }}</span>
                <button @click="handleUpdateQuantity(item, 1)" class="qty-btn" :disabled="loading" aria-label="Vermeerderen" title="Vermeerderen">+</button>
              </div>
              <span class="item-price">€{{ (item.price * item.quantity).toFixed(2) }}</span>
              <button @click="handleRemoveFromCart(item.productId)" class="remove-btn" :disabled="loading" aria-label="Verwijderen" title="Verwijderen">
                ❌
              </button>
            </div>
          </div>
        </div>
        <div class="cart-status empty" v-else>
          <span v-if="!token">🛒 Winkelmandje (Log in om te bekijken)</span>
          <span v-else>🛒 Winkelmandje (Leeg of aan het laden...)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCart } from '~/composables/useCart';
import { useAuth } from '~/composables/useAuth';
import type { AddToCartDto } from '@vue-backery/shared';

// Initialize Composables
const { token } = useAuth();
const { cart, loading, fetchCart, addToCart, removeFromCart } = useCart();

// Fetch initial data smoothly gracefully handling mock auth
onMounted(async () => {
  await fetchCart();
});

// Mock Products
const products: AddToCartDto[] = [
  {
    productId: 'croissant-naturel-01',
    name: 'Croissant Naturel',
    price: 2.50,
    quantity: 1, // Default quantity to add
  },
  {
    productId: 'croissant-pistache-01',
    name: 'Croissant Pistache',
    price: 3.50,
    quantity: 1,
  }
];

const handleAddToCart = async (product: AddToCartDto) => {
  await addToCart(product);
};

const handleRemoveFromCart = async (productId: string) => {
  await removeFromCart(productId);
};

const handleUpdateQuantity = async (item: any, change: number) => {
  await addToCart({
    productId: item.productId,
    name: item.name,
    price: item.price,
    quantity: change
  });
};

// Computed Helpers for the UI
const cartItemsCount = computed(() => {
  if (!cart.value?.items) return 0;
  return cart.value.items.reduce((sum, item) => sum + item.quantity, 0);
});

const formattedTotal = computed(() => {
  if (!cart.value?.total) return '0.00';
  return cart.value.total.toFixed(2);
});
</script>

<style scoped>
.assortiment-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.header p {
  color: #666;
  font-size: 1.1rem;
}

.main-content {
  display: flex;
  flex-direction: column-reverse; /* Puts sidebar on top on mobile */
  gap: 2rem;
}

@media (min-width: 1024px) {
  .main-content {
    flex-direction: row; /* Sidebar goes to right on desktop within natural DOM order */
    align-items: flex-start;
  }
  
  .products-section {
    flex: 1;
  }
  
  .cart-sidebar {
    width: 380px;
    flex-shrink: 0;
    position: sticky;
    top: 2rem;
  }
}

.cart-status {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  color: #495057;
  width: 100%;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.cart-status .total {
  color: #e67e22; /* Warning orange for emphasis */
  font-weight: 700;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  gap: 1rem;
}

.item-name {
  flex: 1;
  text-align: left;
  font-weight: 500;
  color: #343a40;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.qty-btn {
  background-color: #f1f3f5;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  color: #495057;
  transition: background-color 0.2s;
}

.qty-btn:hover:not(:disabled) {
  background-color: #e2e6ea;
  color: #212529;
}

.qty-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.item-qty {
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.item-price {
  font-weight: 600;
  color: #2c3e50;
  min-width: 60px;
  text-align: right;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: opacity 0.2s, transform 0.1s;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover:not(:disabled) {
  opacity: 1;
  transform: scale(1.1);
}

.remove-btn:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 350px;
  border: 1px solid #f1f3f5;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  font-size: 5rem;
}

.product-info {
  padding: 1.5rem;
  text-align: center;
}

.product-info h2 {
  font-size: 1.25rem;
  color: #343a40;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.1rem;
  color: #e67e22;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.add-btn {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
}

.add-btn:hover:not(:disabled) {
  background-color: #1a252f;
}

.add-btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
