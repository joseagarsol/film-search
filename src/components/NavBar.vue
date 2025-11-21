<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-link">
        <span class="navbar-item"><router-link to="/">Home</router-link></span>
        <span class="navbar-item">
          <router-link to="/favorites">Favorites</router-link>
        </span>
      </li>
      <li class="navbar-item">
        <SearchBar />
        <SwitchDarkMode />
      </li>
    </ul>
  </nav>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import SwitchDarkMode from "@/components/SwitchDarkMode.vue";

export default {
  name: "NavBar",
  components: {
    SearchBar,
    SwitchDarkMode,
  },
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
  justify-content: space-between;
  align-items: center;
}

.navbar-link {
  display: flex;
  gap: 20px;
}

.navbar-link a {
  color: #000000;
  font-weight: bold;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  text-decoration: underline;
}

.navbar-item {
  display: flex;
  align-items: center;
  gap: 1vh;
}
</style>
