<script setup lang="ts">
// Hero Section Component
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">De lekkerste bakkerij van de stad</h1>
        <p class="hero-text">
          Welkom bij Vue Bakery, jouw lokale ambachtelijke bakkerij. Wij bakken elke dag vers 
          brood, heerlijke patisserie en de mooiste taarten. Onze bakkers gebruiken alleen 
          de beste, natuurlijke ingrediënten en werken met passie aan elke creatie. 
          Kom langs en proef de liefde voor het bakkersvak in elke hap!
        </p>
      </div>
      <div class="hero-image">
        <!-- Gorgeous bakery counter display -->
        <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixid=M3wxMjA3fDF8MXxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8fHx8MTc3MzE1NTQ3NHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" alt="Vue Bakery" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 6rem 2rem 4rem; /* Extra top padding to account for overlapping logo */
  background-color: var(--color-cream);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-content {
  flex: 1;
}

.hero-title {
  color: var(--color-rust-brown);
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 2rem;
  padding-right: 2rem;
}

.hero-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444; /* Slightly softer than pure black/dark gray */
}

.hero-image {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15); /* Gives that slight depth seen in the screenshot */
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 16/10;
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
    padding-right: 0;
  }
}
</style>
