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
        <p>Log in om producten aan je winkelmandje te kunnen toevoegen.</p>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username">Gebruikersnaam</label>
            <input type="text" id="username" v-model="username" required placeholder="Bijv. Henk" />
          </div>
          <div class="form-group">
            <label for="password">Wachtwoord</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          
          <div v-if="errorMsg" class="error-msg">
            {{ errorMsg }}
          </div>
          
          <div class="actions">
            <button type="submit" class="btn primary-btn" :disabled="isLoading">
              {{ isLoading ? 'Bezig...' : 'Inloggen' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useCart } from '~/composables/useCart';
import { useRouter } from 'nuxt/app';

const { token, user, login, logout } = useAuth();
const { cart } = useCart();
const router = useRouter();

const username = ref('');
const password = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  errorMsg.value = '';
  isLoading.value = true;
  
  const result = await login(username.value, password.value);
  
  isLoading.value = false;
  
  if (result !== true) {
    errorMsg.value = result as string;
  }
};

const handleLogout = () => {
  logout();
  // Clear cart state purely on the frontend on logout
  if (cart.value) {
    cart.value.items = [];
    cart.value.total = 0;
  }
  username.value = '';
  password.value = '';
  errorMsg.value = '';
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

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;
}

.form-group input {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
  font-family: inherit;
}

.form-group input:focus {
  outline: none;
  border-color: #2c3e50;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.9rem;
  padding: 0.8rem;
  background-color: #fdf0ed;
  border-radius: 6px;
  border-left: 4px solid #e74c3c;
  margin-bottom: 1rem;
}
</style>
