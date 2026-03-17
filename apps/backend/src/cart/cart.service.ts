import { Injectable, NotFoundException } from '@nestjs/common';
import { Cart, CartItem, AddToCartDto } from '@vue-backery/shared';

@Injectable()
export class CartService {
  // In-memory store: Map<UserId, Cart>
  private carts: Map<string, Cart> = new Map();

  getCart(userId: string): Cart {
    if (!this.carts.has(userId)) {
      this.carts.set(userId, { userId, items: [], total: 0 });
    }
    return this.carts.get(userId)!;
  }

  addToCart(userId: string, addToCartDto: AddToCartDto): Cart {
    const cart = this.getCart(userId);
    
    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId === addToCartDto.productId
    );

    if (existingItemIndex > -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity += addToCartDto.quantity;
    } else {
      // Add new item
      const newItem: CartItem = {
        productId: addToCartDto.productId,
        name: addToCartDto.name,
        price: addToCartDto.price,
        quantity: addToCartDto.quantity,
      };
      cart.items.push(newItem);
    }

    // Recalculate total
    this.recalculateTotal(cart);

    return cart;
  }

  private recalculateTotal(cart: Cart) {
    cart.total = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
