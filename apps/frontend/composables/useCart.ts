import { useState, useRouter } from 'nuxt/app';
import { useAuth } from './useAuth';
import type { Cart, AddToCartDto } from '@vue-backery/shared';

export const useCart = () => {
  const router = useRouter();
  const cart = useState<Cart | null>('shopping_cart', () => null);
  const { token } = useAuth();
  const loading = useState<boolean>('cart_loading', () => false);

  const fetchCart = async () => {
    if (!token.value) {
      cart.value = null;
      return;
    }
    
    if (token.value) {
      loading.value = true;
      try {
        const data = await $fetch<Cart>('/api/cart', {
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        });
        cart.value = data;
      } catch (err) {
        console.error('Failed to fetch cart', err);
      } finally {
        loading.value = false;
      }
    }
  };

  const addToCart = async (product: AddToCartDto) => {
    // Ensure we are logged in before adding
    if (!token.value) {
      router.push('/login');
      return;
    }

    if (token.value) {
      loading.value = true;
      try {
        const data = await $fetch<Cart>('/api/cart/items', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token.value}`
          },
          body: product
        });
        // Update the reactive cart state with the new backend state
        cart.value = data;
      } catch (err) {
        console.error('Failed to add to cart', err);
      } finally {
        loading.value = false;
      }
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!token.value) {
      return;
    }

    if (token.value) {
      loading.value = true;
      try {
        const data = await $fetch<Cart>(`/api/cart/items/${productId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        });
        cart.value = data;
      } catch (err) {
        console.error('Failed to remove from cart', err);
      } finally {
        loading.value = false;
      }
    }
  };

  return {
    cart,
    loading,
    fetchCart,
    addToCart,
    removeFromCart
  };
};
