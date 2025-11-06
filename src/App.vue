<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  created() {
    this.$store.dispatch("favorites/loadFavorites");
  },
  components: {
    NavBar,
  },
};
</script>
<style></style>
