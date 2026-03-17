<template>
  <div class="zuurdesem-page">
    <div class="zuurdesem-hero">
      <div class="hero-content">
        <h1>Ons Authentieke Zuurdesem</h1>
        <p>Gebakken met tijd, water, meel en liefde.</p>
      </div>
    </div>

    <div class="page-container">
      <section class="process-section">
        <div class="text-col">
          <h2>Het Geheim van de Bakker</h2>
          <p>
            Bij Vue Bakery geloven we dat echt brood tijd nodig heeft. Ons zuurdesembrood 
            wordt uitsluitend gemaakt met onze eigen, jarenoude desemcultuur ('de moeder'). 
            Er komt geen grammetje commerciële gist aan te pas.
          </p>
          <p>
            Door het deeg een fermentatieproces van minimaal 24 tot 36 uur te geven, 
            krijgt het brood niet alleen zijn kenmerkende robuuste, luchtige kruim en 
            krokante korst, maar wordt het ook veel lichter verteerbaar. Het resultaat 
            is een complexe, diepe smaak die je nergens anders vindt.
          </p>
        </div>
        <div class="image-col">
          <img src="https://images.unsplash.com/photo-1620921586333-b7566c34550a?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8c291cmRvdWdofGVufDB8fHx8MTc3MzE1NTc2NXww&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" alt="Zuurdesembrood doorsnede" />
        </div>
      </section>

      <section class="care-section">
        <h2>Hoe bewaar je zuurdesembrood?</h2>
        <div class="care-grid">
          <div class="care-card">
            <h3>Op het aanrecht</h3>
            <p>Bewaar je brood in een papieren zak of katoenen broodzak. Dit houdt de korst knapperig en voorkomt dat het brood "stikt" zoals in plastic.</p>
          </div>
          <div class="care-card">
            <h3>Invriezen</h3>
            <p>Wil je het langer bewaren? Snijd het brood in plakken en vries het goed afgesloten in. Piep het even op in de broodrooster voor die verse bite!</p>
          </div>
          <div class="care-card">
            <h3>Niet in de koelkast!</h3>
            <p>De kou van een koelkast trekt al het vocht uit het brood, waardoor het veel sneller uitdroogt en hard wordt. Zonde van de smaak.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.zuurdesem-hero {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}

.hero-content p {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f1e2d9;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.process-section {
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.text-col {
  flex: 1;
}

.text-col h2 {
  color: var(--color-rust-brown);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.text-col p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

.image-col {
  flex: 1;
}

.image-col img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.care-section {
  text-align: center;
}

.care-section h2 {
  color: var(--color-olive-green);
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.care-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.care-card {
  background-color: var(--color-cream);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.care-card h3 {
  color: var(--color-rust-brown);
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.care-card p {
  color: #555;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .process-section {
    flex-direction: column;
  }
  .zuurdesem-hero {
    height: 300px;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>
