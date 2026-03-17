<script setup lang="ts">
// Promo Cards
</script>

<template>
  <section class="promo-section">
    <div class="promo-container">
      
      <!-- Card 1 -->
      <div class="promo-card">
        <div class="promo-content">
          <h3 class="promo-title">Bestel je<br>verjaardagstaart</h3>
          <div class="promo-arrow">➔</div>
        </div>
        <div class="promo-image">
          <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Verjaardagstaart" />
        </div>
      </div>

      <!-- Card 2 -->
      <div class="promo-card">
        <div class="promo-content">
          <h3 class="promo-title">Bekijk onze<br>gebakjesboxen</h3>
          <div class="promo-arrow">➔</div>
        </div>
        <div class="promo-image">
          <img src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Gebakjesboxen" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.promo-section {
  padding: 5rem 2rem;
  background-color: var(--color-cream);
}

.promo-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
}

.promo-card {
  flex: 1;
  background-color: var(--color-rust-brown);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 3rem 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 10px 20px rgba(166, 86, 40, 0.15);
}

.promo-card:hover {
  transform: translateY(-5px);
}

/* Semi-circle background element inside the card */
.promo-card::before {
  content: "";
  position: absolute;
  right: -10%;
  top: -20%;
  width: 60%;
  height: 140%;
  background-color: rgba(0,0,0,0.1);
  border-radius: 50%;
  z-index: 1;
}

.promo-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.promo-title {
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
}

.promo-arrow {
  background-color: var(--color-white);
  color: var(--color-rust-brown);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 2rem;
}

.promo-image {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.promo-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Depending if it's supposed to be cutout or just an image */
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

@media (max-width: 800px) {
  .promo-container {
    flex-direction: column;
  }
}
</style>
