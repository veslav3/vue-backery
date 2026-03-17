<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>Privacyverklaring</h1>
      <p class="last-updated">Laatst gewijzigd: {{ new Date().toLocaleDateString('nl-NL') }}</p>
      
      <section class="legal-section">
        <h2>Persoonsgegevens die wij verwerken</h2>
        <p>Vue Bakery verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:</p>
        <ul>
          <li>Voor- en achternaam</li>
          <li>Adresgegevens</li>
          <li>Telefoonnummer</li>
          <li>E-mailadres</li>
          <li>IP-adres</li>
        </ul>

        <h2>Bijzondere en/of gevoelige persoonsgegevens</h2>
        <p>Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is.</p>

        <h2>Met welk doel wij persoonsgegevens verwerken</h2>
        <p>Vue Bakery verwerkt uw persoonsgegevens voor de volgende doelen:</p>
        <ul>
          <li>Het afhandelen van uw betaling</li>
          <li>Verzenden van onze nieuwsbrief en/of reclamefolder</li>
          <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
          <li>Om goederen en diensten bij u af te leveren</li>
        </ul>

        <h2>Hoe lang we persoonsgegevens bewaren</h2>
        <p>Vue Bakery bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld.</p>
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
