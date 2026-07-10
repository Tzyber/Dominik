<template>
  <main class="legal">
    <article class="legal-card">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Dominik Dörrier<br>
        Lothringerstraße 41<br>
        42107 Wuppertal
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 01525 281 38 04<br>
        E-Mail: mail@dominik-webdeveloper.com
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Dominik Dörrier<br>
        Lothringerstraße 41<br>
        42107 Wuppertal
      </p>

      <p class="source">Quelle: <a href="https://www.e-recht24.de" rel="noopener" target="_blank">e-recht24.de</a></p>

      <router-link class="back" to="/">← Zurück zur Startseite</router-link>
    </article>
  </main>
</template>

<script setup lang="ts">
  // Impressum page
</script>

<style scoped>
.legal {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 120px 24px 80px;
}
.legal-card {
  width: 100%;
  max-width: 760px;
  background: var(--panel, #10152a);
  border: 1px solid var(--hairline, rgba(140, 155, 220, 0.14));
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 0 60px rgba(124, 60, 180, 0.15);
}
.legal-card h1 {
  font-family: var(--font-display, sans-serif);
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.legal-card h2 {
  font-family: var(--font-display, sans-serif);
  font-size: 1.15rem;
  margin: 1.75rem 0 0.5rem;
}
.legal-card p {
  color: var(--ink-dim, #9aa3c4);
  margin-bottom: 0.5rem;
  line-height: 1.7;
}
.legal-card a { color: var(--signal, #7c8cff); }
.legal-card .source { font-size: 0.85rem; margin-top: 1.5rem; }
.legal-card .back {
  display: inline-block;
  margin-top: 2rem;
  font-family: var(--font-mono, monospace);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-decoration: none;
  color: var(--signal, #7c8cff);
}
.legal-card .back:hover { text-decoration: underline; }
</style>
