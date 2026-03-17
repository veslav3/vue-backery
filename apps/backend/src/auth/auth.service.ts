import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, AuthResponse, User } from '@vue-backery/shared';

@Injectable()
export class AuthService {
  // Hardcoded mock user for demonstration
  private readonly mockUser: User = {
    id: 'mock-user-123',
    name: 'Test Client',
    email: 'client@vue-backery.local',
  };

  login(loginDto: LoginDto): AuthResponse {
    // In a real app we'd check passwords and hash them. 
    // Here we just ensure the email is provided.
    if (!loginDto.email) {
      throw new UnauthorizedException('Email is required');
    }

    // Return a simple mock token
    return {
      accessToken: `mock-jwt-token-${this.mockUser.id}`,
      user: this.mockUser,
    };
  }

  // Helper method meant to be used by the MockAuthGuard
  validateToken(token: string): User | null {
    if (token === `mock-jwt-token-${this.mockUser.id}`) {
      return this.mockUser;
    }
    return null;
  }
}
