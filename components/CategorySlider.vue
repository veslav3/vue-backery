<script setup lang="ts">
import { ref } from 'vue';

const categories = [
  { name: 'VERS BROOD', image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJha2VyeXxlbnwwfHx8fDE3NzMxNTU0NzR8MA&ixlib=rb-4.1.0' },
  { name: 'CROISSANTS', image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y3JvaXNzYW50fGVufDB8fHx8MTc3MzE1NTQ3NHww&ixlib=rb-4.1.0' },
  { name: 'GEBAKJES', image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fHx8MTc3MzE1NTQ3NHww&ixlib=rb-4.1.0' },
  { name: 'TAARTEN', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGNha2V8ZW58MHx8fHwxNzczMTU1NDc0fDA&ixlib=rb-4.1.0' },
  { name: 'KOEKJES', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGJha2VyeXxlbnwwfHx8fDE3NzMxNTU0NzR8MA&ixlib=rb-4.1.0' },
  { name: 'KOFFIE', image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNha2V8ZW58MHx8fHwxNzczMTU1NDc0fDA&ixlib=rb-4.1.0' },
  { name: 'BELEGDE BROODJES', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGNyb2lzc2FudHxlbnwwfHx8fDE3NzMxNTU0NzR8MA&ixlib=rb-4.1.0' },
  { name: 'ONTBIJTBOXEN', image: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGJha2VyeXxlbnwwfHx8fDE3NzMxNTU0NzR8MA&ixlib=rb-4.1.0' }
];

const sliderTrack = ref<HTMLElement | null>(null);

const scroll = (direction: 'left' | 'right') => {
  if (sliderTrack.value) {
    const scrollAmount = 300; // Pixels to scroll per click
    if (direction === 'left') {
      sliderTrack.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      sliderTrack.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <section class="category-slider-section">
    <div class="slider-header">
      <h2 class="section-title">ONZE SPECIALITEITEN</h2>
      <p class="section-subtitle">Proef onze versgebakken lekkernijen!</p>
      
      <div class="nav-buttons">
        <button class="nav-btn prev" aria-label="Previous" @click="scroll('left')">←</button>
        <button class="nav-btn next" aria-label="Next" @click="scroll('right')">→</button>
      </div>
    </div>

    <div class="slider-container">
        <div class="slider-track" ref="sliderTrack">
          <!-- Iterate over categories and map the background image securely -->
          <div 
            class="category-card" 
            v-for="(category, index) in categories" 
            :key="index"
          >
             <div class="card-image-wrapper">
               <img :src="`${category.image}&auto=format&fit=crop&w=400&q=80`" :alt="category.name" class="card-image" />
             </div>
             <div class="card-button">
               <span class="card-title">{{ category.name }}</span>
             </div>
          </div>
        </div>
    </div>

    <div class="view-all">
      <NuxtLink to="/assortiment" class="view-all-link">Bekijk ons gehele assortiment ></NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.category-slider-section {
  padding: 4rem 2rem;
  background-color: var(--color-cream);
}

.slider-header {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 2rem;
}

.section-title {
  color: var(--color-rust-brown);
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
}

.section-subtitle {
  color: var(--color-rust-brown);
  font-weight: 700;
  font-size: 1.1rem;
}

.nav-buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 1rem;
}

.nav-btn {
  background-color: var(--color-rust-brown);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.nav-btn:hover {
  opacity: 0.8;
}

.slider-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.slider-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-behavior: smooth;
  /* Hide scrollbar */
  scrollbar-width: none; 
}
.slider-track::-webkit-scrollbar {
  display: none;
}

.category-card {
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background-color: var(--color-white);
}

.card-image-wrapper {
  height: 250px;
  width: 100%;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-button {
  background-color: var(--color-olive-green);
  color: white;
  font-weight: 700;
  text-align: center;
  padding: 1.2rem 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-top: -10px; /* Overlap image slightly if needed, or just regular */
  position: relative;
  z-index: 2;
}

.view-all {
  max-width: 1200px;
  margin: 2rem auto 0;
}

.view-all-link {
  color: var(--color-rust-brown);
  font-weight: 700;
  font-size: 1.1rem;
}
.view-all-link:hover {
  text-decoration: underline;
}
</style>
