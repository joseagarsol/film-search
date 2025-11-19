<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("favorites/loadFavorites");
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState("theme", ["isDarkMode"]),
  },
  watch: {
    isDarkMode: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          document.documentElement.classList.add("dark-mode");
        } else {
          document.documentElement.classList.remove("dark-mode");
        }
      },
    },
  },
};
</script>
<style></style>
