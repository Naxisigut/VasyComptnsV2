import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [
  // {
  //   path: "/",
  //   name: "root",
  //   redirect: "/index",
  // },
  {
    path: "/index",
    name: "index",
    component: () => import("@/layout"),
  },
  {
    path: "/searchBox",
    name: "SearchBox",
    component: () => import("@/views/search-box"),
  },
];

const router = new Router({
  routes,
});

export default router;
