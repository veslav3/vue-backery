<script setup lang="ts">
// Maison Le Forgeron Section
</script>

<template>
  <section class="maison-section">
    <div class="maison-container">
      <div class="maison-content">
        <h2 class="maison-title">ONTDEK ONS ZUURDESEMBROOD</h2>
        <p class="maison-text">
          Onze trots is ons authentieke zuurdesembrood. Gebakken op traditionele wijze
          met een eigen desemcultuur die jarenlang zorgvuldig is onderhouden. 
          De knapperige korst en volle smaak maken dit brood onweerstaanbaar. 
          Lees meer over ons bereidingsproces!
        </p>
        <NuxtLink to="/zuurdesem" class="btn-read-more">Lees meer ➔</NuxtLink>
      </div>
      <div class="maison-image-wrapper">
        <img src="https://images.unsplash.com/photo-1501721358449-1505ca840822?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGNyb2lzc2FudHxlbnwwfHx8fDE3NzMxNTU0NzR8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" alt="Zuurdesembrood" class="maison-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.maison-section {
  background-color: var(--color-olive-green);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Optional: Faint background pattern using CSS or a subtle SVG grid */
.maison-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  opacity: 0.05;
  background-image: radial-gradient(var(--color-white) 2px, transparent 2px);
  background-size: 30px 30px;
}

.maison-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.maison-content {
  flex: 1;
  color: var(--color-white);
}

.maison-title {
  color: var(--color-white);
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.maison-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.btn-read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-white);
  color: var(--color-rust-brown);
  padding: 0.8rem 2rem;
  font-weight: 700;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.btn-read-more:hover {
  background-color: var(--color-cream);
}

.maison-image-wrapper {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.maison-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .maison-container {
    flex-direction: column;
  }
}
</style>
