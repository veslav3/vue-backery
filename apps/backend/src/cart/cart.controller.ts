import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CartService } from './cart.service';
import { MockAuthGuard } from '../auth/mock-auth.guard';
import type { AddToCartDto, Cart } from '@vue-backery/shared';

// Helper type for the decorated request
interface AuthenticatedRequest extends Request {
  user: { id: string, name: string, email: string };
}

@Controller('cart')
@UseGuards(MockAuthGuard) // Protect all cart routes
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Request() req: AuthenticatedRequest): Cart {
    // req.user is set by MockAuthGuard
    return this.cartService.getCart(req.user.id);
  }

  @Post('items')
  addToCart(@Request() req: AuthenticatedRequest, @Body() addToCartDto: AddToCartDto): Cart {
    return this.cartService.addToCart(req.user.id, addToCartDto);
  }
}
