<template>
  <div class="assortiment-page">
    <div class="header">
      <h1>Ons Assortiment</h1>
      <p>Vers gebakken, speciaal voor u.</p>
      
      <!-- Cart Status Display (Simple) -->
      <div class="cart-status" v-if="cart">
        <span>🛒 Winkelmandje: {{ cartItemsCount }} item(s)</span>
        <span class="total">Totaal: €{{ formattedTotal }}</span>
      </div>
      <div class="cart-status empty" v-else>
        <span>🛒 Winkelmandje (Laden...)</span>
      </div>
    </div>

    <div class="product-grid">
      <!-- Product Card -->
      <div v-for="product in products" :key="product.productId" class="product-card">
        <div class="product-image">
          <!-- Placeholder using a generic croissant emoji/color or you can replace with real images later -->
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
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCart } from '~/composables/useCart';
import { useAuth } from '~/composables/useAuth';
import type { AddToCartDto } from '@vue-backery/shared';

// Initialize Composables
const { login } = useAuth();
const { cart, loading, fetchCart, addToCart } = useCart();

// Fetch initial data smoothly gracefully handling mock auth
onMounted(async () => {
  await login();
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

.cart-status {
  margin-top: 1.5rem;
  display: inline-flex;
  gap: 1.5rem;
  background-color: #f8f9fa;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  font-weight: 500;
  color: #495057;
  align-items: center;
}

.cart-status .total {
  color: #e67e22; /* Warning orange for emphasis */
  font-weight: 700;
  font-size: 1.1rem;
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
