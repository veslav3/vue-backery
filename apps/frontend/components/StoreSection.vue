<script setup lang="ts">
// Store Information Section
</script>

<template>
  <section class="store-section">
    <div class="store-container">
      <div class="store-image-wrapper">
        <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8YmFrZXJ5fGVufDB8fHx8MTc3MzE1NTQ3NHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" alt="Vue Bakery Winkel" class="store-image" />
      </div>
      <div class="store-content">
        <h2 class="store-title">ERVAAR ONZE SMAKEN ZELF IN ONZE BAKKERIJ</h2>
        <p class="store-text">
          Benieuwd naar onze specialiteiten? Kom langs in onze bakkerij in het
          centrum van de stad, aan de Hoofdstraat nummer 1. We helpen je graag!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.store-section {
  padding: 5rem 2rem;
  background-color: var(--color-cream);
}

.store-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.store-image-wrapper {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.store-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.store-content {
  flex: 1;
}

.store-title {
  color: var(--color-rust-brown);
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  line-height: 1.2;
}

.store-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

@media (max-width: 900px) {
  .store-container {
    flex-direction: column-reverse;
  }
}
</style>
