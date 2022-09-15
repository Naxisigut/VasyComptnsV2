import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/layout"),
  },
  {
    path: "/serchBox",
    name: "SearchBox",
    component: () => import("@/views/search-box"),
  },
];

const router = new Router({
  routes,
});

export default router;
