<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Cookiebeleid</h1>
      <p class="last-updated">Laatst gewijzigd: {{ new Date().toLocaleDateString('nl-NL') }}</p>
      
      <section class="legal-section">
        <h2>Wat zijn cookies?</h2>
        <p>Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone. Vue Bakery gebruikt cookies met een puur technische functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden.</p>

        <h2>Welke cookies gebruiken wij?</h2>
        <p>Wij maken gebruik van de volgende soorten cookies:</p>
        <ul>
          <li><strong>Functionele cookies:</strong> Deze zijn noodzakelijk voor de technische werking van de website en uw gebruiksgemak.</li>
          <li><strong>Analytische cookies:</strong> Hiermee verzamelen wij anonieme gegevens over het gebruik van onze website om deze te kunnen optimaliseren.</li>
          <li><strong>Tracking cookies:</strong> Deze cookies houden uw surfgedrag bij, zodat we op maat gemaakte content en advertenties kunnen aanbieden.</li>
        </ul>

        <h2>Cookies weigeren of verwijderen</h2>
        <p>U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.</p>
        
        <h2>Vragen?</h2>
        <p>Als u vragen heeft over ons cookiebeleid, kunt u contact met ons opnemen via info@vuebakery.nl.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 4rem 2rem;
  background-color: var(--color-cream);
  min-height: 60vh;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--color-white);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

h1 {
  color: var(--color-rust-brown);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.last-updated {
  color: #666;
  font-style: italic;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.legal-section h2 {
  color: var(--color-olive-green);
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.legal-section p {
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}

.legal-section ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  color: #444;
  line-height: 1.8;
}
</style>
