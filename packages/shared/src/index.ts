export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginDto {
  email: string;
  password?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  userId: string;
  items: CartItem[];
  total: number;
}

export interface AddToCartDto {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}
