import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home';
import Country from '@/views/Country';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/country/:slug",
    name: "Country",
    component: Country
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
