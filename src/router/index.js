import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import cpntRoutes from "./cpntRoutes";
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/views/index"),
  },
  {
    path: "/cpnt",
    component: () => import("@/layout"),
    children: cpntRoutes,
  },
];

const router = new Router({
  routes,
});

export default router;
