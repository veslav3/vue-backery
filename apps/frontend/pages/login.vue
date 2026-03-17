<template>
  <div class="login-page">
    <div class="auth-card">
      <div v-if="token">
        <div class="icon-header">👋</div>
        <h2>Welkom terug, {{ user?.name || 'Klant' }}!</h2>
        <p>Je bent succesvol ingelogd met je mock-account.</p>
        
        <div class="actions">
          <NuxtLink to="/assortiment" class="btn primary-btn">Naar Assortiment</NuxtLink>
          <button @click="handleLogout" class="btn outline-btn">Uitloggen</button>
        </div>
      </div>
      
      <div v-else>
        <div class="icon-header">👤</div>
        <h2>Inloggen</h2>
        <p>Dit is een mock-login. Klik op de knop om direct in te loggen en producten aan je winkelmandje te kunnen toevoegen.</p>
        
        <div class="actions">
          <button @click="handleLogin" class="btn primary-btn">Mock Login Activeren</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';
import { useCart } from '~/composables/useCart';
import { useRouter } from 'nuxt/app';

const { token, user, login, logout } = useAuth();
const { cart } = useCart();
const router = useRouter();

const handleLogin = async () => {
  await login();
  // Optional: redirect to assortiment automatically after login
  // router.push('/assortiment');
};

const handleLogout = () => {
  logout();
  // Clear cart state purely on the frontend on logout
  if (cart.value) {
    cart.value.items = [];
    cart.value.total = 0;
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
  background-color: #f8f9fa;
}

.auth-card {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 450px;
  width: 100%;
}

.icon-header {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.auth-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.auth-card p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.primary-btn {
  background-color: #2c3e50;
  color: white;
  border: none;
}

.primary-btn:hover {
  background-color: #1a252f;
}

.outline-btn {
  background-color: transparent;
  color: #e74c3c;
  border: 2px solid #e74c3c;
}

.outline-btn:hover {
  background-color: #e74c3c;
  color: white;
}
</style>
