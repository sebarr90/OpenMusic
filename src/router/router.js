import { createRouter, createWebHistory } from "vue-router";
import CategoritaVinilos from "@/components/CategoritaVinilos.vue"; // Asegúrate de crear este componente

const routes = [
  {
    path: "/categoria/:categoria",
    name: "CategoriaVinilos",
    component: CategoritaVinilos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
