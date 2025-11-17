<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Te has perdido en el espacio</h2>
    <p>La página que buscas no existe o ha sido eliminada</p>
    <router-link :to="{ name: 'Home' }" class="home-btn"
      >🚀 Volver al inicio</router-link
    >
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 20px;
}
h1 {
  font-size: 6rem;
  margin: 0;
  color: var(--color-accent);
  font-family: var(--font-display);
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  color: var(--color-text-secondary);
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.home-btn {
  background-color: var(--color-accent);
  color: #000;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  transition: transform 0.2s;
}

.home-btn:hover {
  transform: scale(1.05);
}
</style>
