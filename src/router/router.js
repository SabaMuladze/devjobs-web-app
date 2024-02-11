import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Details from "../components/Details.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/details", component: Details },
  ],
});

export default router;
