<script setup lang="ts">
// AppFooter Component
</script>

<template>
  <footer class="app-footer">
    <!-- Newsletter Section (often sits right above footer or overlaps) -->
    <div class="newsletter-wrapper">
      <div class="newsletter-content">
        <div class="newsletter-info">
          <h2>Schrijf je in voor onze bakkersmail</h2>
          <p>Meld je aan voor onze nieuwsbrief en blijf op de hoogte van de lekkerste smaken, de nieuwste producten en nieuwtjes van Vue Bakery.</p>
        </div>
        <form class="newsletter-form" @submit.prevent>
          <input type="text" placeholder="Naam" required />
          <input type="email" placeholder="E-mailadres" required />
          <button type="submit">➔</button>
        </form>
      </div>
    </div>

    <!-- The actual footer -->
    <div class="footer-main">
      <div class="footer-grid">
        <!-- Col 1 -->
        <div class="footer-col">
          <h3>Vue Bakery</h3>
          <ul>
            <li><NuxtLink to="/over-ons">Over Vue Bakery</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Ons Ambacht</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Nieuws</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Contact</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Werken bij</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Col 2 -->
        <div class="footer-col">
          <h3>Assortiment</h3>
          <ul>
            <li><NuxtLink to="/zuurdesem">Vers Brood</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Croissants</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Gebakjes</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Taarten</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Koekjes</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Koffie</NuxtLink></li>
            <li><NuxtLink to="/zuurdesem">Ontbijtboxen</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3 -->
        <div class="footer-col">
          <h3>Openingstijden</h3>
          <ul>
            <li>Maandag: <span>Gesloten</span></li>
            <li>Dinsdag: <span>08:30 - 18:00</span></li>
            <li>Woensdag: <span>08:30 - 18:00</span></li>
            <li>Donderdag: <span>08:30 - 18:00</span></li>
            <li>Vrijdag: <span>08:30 - 20:00</span></li>
            <li>Zaterdag: <span>08:30 - 17:00</span></li>
            <li>Zondag: <span>Gesloten</span></li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div class="footer-col contact-col">
          <h3>Contactgegevens</h3>
          <p>Hoofdstraat 1<br>1234 AB Bakkerstad</p>
          <p>T <a href="tel:0123456789">012 345 67 89</a></p>
          <p>E <a href="mailto:info@vuebakery.nl">info@vuebakery.nl</a></p>
        </div>
      </div>
    </div>

    <!-- Copyright / Bottom Bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; {{ new Date().getFullYear() }} Vue Bakery</p>
        <ul class="legal-links">
          <li><NuxtLink to="/algemene-voorwaarden">Algemene voorwaarden</NuxtLink></li>
          <li><NuxtLink to="/privacyverklaring">Privacyverklaring</NuxtLink></li>
          <li><NuxtLink to="/cookiebeleid">Cookiebeleid</NuxtLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: 6rem;
  background-color: var(--color-rust-brown);
  color: var(--color-white);
  position: relative;
}

/* Skyline Silhouette */
.app-footer::before {
  content: "";
  position: absolute;
  top: -80px; /* Adjust based on asset height */
  left: 0;
  right: 0;
  height: 80px;
  /* Placeholder for the skyline silhouette SVG */
  background: 
    linear-gradient(transparent 50%, var(--color-rust-brown) 50%, var(--color-rust-brown) 100%),
    url('data:image/svg+xml;utf8,<svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg"><path d="M0,100 L0,80 L20,80 L20,40 L40,40 L40,60 L60,60 L60,20 L80,20 L80,50 L100,50 L100,30 L150,30 L150,60 L200,60 L200,10 L250,10 L250,50 L300,50 L300,80 L1000,80 L1000,100 Z" fill="%23A65628"/></svg>') repeat-x bottom left;
  background-size: 500px 100px;
  z-index: 10;
}



.newsletter-wrapper {
  background-color: #3e332c; /* The dark image background color fallback */
  padding: 3rem 2rem;
  position: relative;
  z-index: 20;
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506084868230-bb9d95c24e59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  margin-top: -3rem;
  margin-bottom: 2rem;
}

.newsletter-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
}

.newsletter-info h2 {
  color: var(--color-white);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.newsletter-info p {
  font-size: 1rem;
  line-height: 1.5;
  color: #ddd;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  min-width: 400px;
}

.newsletter-form input {
  padding: 0.8rem 1rem;
  border: none;
  background-color: rgba(255,255,255,0.9);
  border-radius: 4px;
  outline: none;
  width: 100%;
}

.newsletter-form button {
  background-color: var(--color-rust-brown);
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.footer-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer-col h3 {
  color: var(--color-white);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.footer-col ul {
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
  line-height: 2;
  color: #f1e2d9;
}

.footer-col ul li {
  display: flex;
  justify-content: space-between;
}

.footer-col a {
  transition: opacity 0.2s;
}

.footer-col a:hover {
  opacity: 0.7;
  text-decoration: underline;
}

.contact-col p {
  color: #f1e2d9;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  background-color: var(--color-cream);
  color: var(--color-rust-brown);
  padding: 1.5rem 2rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.legal-links a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .newsletter-content {
    flex-direction: column;
  }
  .newsletter-form {
    min-width: 100%;
  }
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
