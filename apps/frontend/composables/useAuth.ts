import { useCookie, useState } from 'nuxt/app';
import type { User, AuthResponse } from '@vue-backery/shared';

export const useAuth = () => {
  const token = useCookie<string | null>('auth_token');
  const user = useState<User | null>('auth_user', () => null);

  const login = async (username?: string, password?: string) => {
    try {
      // If we already have a token, we don't strictly need to login again.
      if (!token.value) {
        const response = await $fetch<AuthResponse>('/api/auth/login', {
          method: 'POST',
          body: {
            username: username || 'Henk',
            password: password || '12345'
          }
        });
        
        token.value = response.accessToken;
        user.value = response.user;
      }
      return true;
    } catch (err: any) {
      console.error('Login failed:', err);
      return err.data?.message || 'Login failed';
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
