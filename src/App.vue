<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("favorites/loadFavorites");
  },
};
</script>
<style></style>
