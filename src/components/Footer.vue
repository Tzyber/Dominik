<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="fnote">This site serves as a personal portfolio and application document.</div>
      <div class="legal">
        <router-link to="/impressum">Impressum</router-link>
        <span class="sep">/</span>
        <router-link to="/datenschutz">Datenschutz</router-link>
      </div>
      <div class="copy">© {{ new Date().getFullYear() }} · DOMINIK DÖRRIER</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--hairline);
  padding: 34px 0;
  text-align: center;
  position: relative;
  z-index: 2;
  background: var(--void);
}

.fnote {
  font-size: 0.82rem;
  color: var(--ink-faint);
}

.legal {
  margin-top: 12px;
  display: flex;
  gap: 14px;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.legal a {
  color: var(--ink-dim);
  text-decoration: none;
}

.legal a:hover {
  color: var(--signal);
}

.sep {
  color: var(--ink-faint);
}

.copy {
  margin-top: 16px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--ink-faint);
}
</style>
