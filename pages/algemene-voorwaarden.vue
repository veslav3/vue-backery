<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Algemene Voorwaarden</h1>
      <p class="last-updated">Laatst gewijzigd: {{ new Date().toLocaleDateString('nl-NL') }}</p>
      
      <section class="legal-section">
        <h2>1. Toepasselijkheid</h2>
        <p>Deze algemene voorwaarden zijn van toepassing op elk aanbod van Vue Bakery en op elke tot stand gekomen overeenkomst op afstand tussen de bakkerij en de consument.</p>
        
        <h2>2. Het Aanbod</h2>
        <p>Indien een aanbod een beperkte geldigheidsduur heeft of onder voorwaarden geschiedt, wordt dit nadrukkelijk in het aanbod vermeld. Het aanbod bevat een volledige en nauwkeurige omschrijving van de aangeboden producten.</p>
        
        <h2>3. De Overeenkomst</h2>
        <p>De overeenkomst komt tot stand op het moment van aanvaarding door de consument van het aanbod en het voldoen aan de daarbij gestelde voorwaarden.</p>

        <h2>4. Prijs en Betaling</h2>
        <p>De in het aanbod van producten of diensten genoemde prijzen zijn inclusief BTW. Voor zover niet anders is bepaald in de overeenkomst of aanvullende voorwaarden, dienen de door de consument verschuldigde bedragen te worden voldaan binnen 14 dagen na het ingaan van de bedenktermijn.</p>

        <h2>5. Levering en Uitvoering</h2>
        <p>Vue Bakery zal de grootst mogelijke zorgvuldigheid in acht nemen bij het in ontvangst nemen en bij de uitvoering van bestellingen van producten. De plaats van levering is het adres dat de consument aan de bakkerij kenbaar heeft gemaakt.</p>
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
</style>
