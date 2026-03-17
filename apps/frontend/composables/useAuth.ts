import { useCookie, useState } from 'nuxt/app';
import type { User, AuthResponse } from '@vue-backery/shared';

export const useAuth = () => {
  const token = useCookie<string | null>('auth_token');
  const user = useState<User | null>('auth_user', () => null);

  const login = async () => {
    try {
      // If we already have a token, we don't strictly need to mock-login again, 
      // but for this mock flow, we just force a login if the token is missing.
      if (!token.value) {
        const response = await $fetch<AuthResponse>('/api/auth/login', {
          method: 'POST',
          body: {
            email: 'client@vue-backery.local'
          }
        });
        
        token.value = response.accessToken;
        user.value = response.user;
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
  };

  return {
    token,
    user,
    login,
    logout
  };
};
