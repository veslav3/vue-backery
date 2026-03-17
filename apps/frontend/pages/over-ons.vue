<template>
  <div class="about-page">
    <div class="about-header">
      <h1>Over Vue Bakery</h1>
      <p class="subtitle">Lokale passie, ambachtelijke kwaliteit</p>
    </div>

    <div class="about-content">
      <section class="story-section">
        <div class="text-block">
          <h2>Ons Verhaal</h2>
          <p>
            Welkom bij Vue Bakery, dé plek waar ambacht en passie samenkomen. Wat in 2024
            begon als een kleine droom om de buurt te voorzien van écht lekker en puur brood,
            is inmiddels uitgegroeid tot een geliefde bakkerij in het hart van de stad. 
            Wij geloven in de kracht van eenvoud: meel, water, zout en tijd. Vooral dat laatste 
            is ons geheime ingrediënt.
          </p>
          <p>
            Onze bakkers staan elke nacht vroeg op om ervoor te zorgen dat jij de dag
            kunt beginnen met een verse, knapperige bite. Van ons dagelijkse zuurdesembrood 
            tot verfijnde Franse patisserie, elk product wordt met de hand en veel liefde gemaakt.
          </p>
        </div>
        <div class="image-block">
          <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGJha2VydGV4dHxlbnwwfHx8fDE3NzMxNTk3MjF8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" alt="Bakkers aan het werk" />
        </div>
      </section>

      <section class="values-section">
        <h2>Waar wij voor staan</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>🥖 Ambachtelijk</h3>
            <p>Geen fabriekswerk, maar handgemaakt door gepassioneerde bakkers die hun vak verstaan.</p>
          </div>
          <div class="value-card">
            <h3>🌾 Lokaal & Puur</h3>
            <p>We gebruiken zoveel mogelijk ingrediënten van lokale boeren en molenaars. Geen gekke toevoegingen.</p>
          </div>
          <div class="value-card">
            <h3>⏱️ Tijd & Geduld</h3>
            <p>Echt brood heeft tijd nodig. Ons deeg krijgt minimaal 24 uur om op smaak te komen.</p>
          </div>
        </div>
      </section>

      <section class="team-section">
        <h2>Kom eens langs!</h2>
        <p>
          We bouwen niet alleen aan een mooi assortiment, maar ook aan een gezellige community. 
          Heb je vragen over ons proces, zoek je een specifieke taart of heb je gewoon zin in een leuk 
          praatje onder het genot van een goede kop koffie? Je bent altijd welkom in onze bakkerij aan 
          de Hoofdstraat 1.
        </p>
        <NuxtLink to="/assortiment" class="btn-assortiment">Bekijk ons assortiment ➔</NuxtLink>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--color-cream);
  min-height: 80vh;
}

.about-header {
  background-color: var(--color-rust-brown);
  color: var(--color-white);
  padding: 6rem 2rem;
  text-align: center;
}

.about-header h1 {
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  color: #f1e2d9;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.story-section {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
}

.text-block {
  flex: 1;
}

.text-block h2 {
  color: var(--color-olive-green);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.text-block p {
  color: #444;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.image-block {
  flex: 1;
}

.image-block img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.values-section {
  text-align: center;
  margin-bottom: 6rem;
}

.values-section h2 {
  color: var(--color-rust-brown);
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  background-color: var(--color-white);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card h3 {
  color: var(--color-olive-green);
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.value-card p {
  color: #555;
  line-height: 1.6;
}

.team-section {
  text-align: center;
  background-color: var(--color-white);
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.team-section h2 {
  color: var(--color-rust-brown);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.team-section p {
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2.5rem;
}

.btn-assortiment {
  display: inline-block;
  background-color: var(--color-olive-green);
  color: var(--color-white);
  padding: 1rem 2.5rem;
  font-weight: 700;
  border-radius: 4px;
  transition: opacity 0.2s;
}

.btn-assortiment:hover {
  opacity: 0.9;
}

@media (max-width: 900px) {
  .story-section {
    flex-direction: column;
    gap: 2rem;
  }
  
  .about-header h1 {
    font-size: 2.2rem;
  }
}
</style>
