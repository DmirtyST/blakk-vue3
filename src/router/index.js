import { createWebHistory, createRouter } from "vue-router";
import home from "../views/home.vue";
import notFound from '../views/404.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  
  {
    path: "/:catchAll(.*)",
    component: notFound,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;