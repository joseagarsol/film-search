<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><router-link to="/">Home</router-link></li>
      <li class="navbar-item">
        <router-link to="/favorites">Favorites</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 24px;
  background-color: #f5c518;
}

.navbar-list {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar a {
  color: #000000;
  font-weight: bold;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  text-decoration: underline;
}
</style>
