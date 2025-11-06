import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import MovieDetails from "@/views/MovieDetails.vue";
import Favorites from "@/views/Favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "movieDetails",
    component: MovieDetails,
    props: true,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
