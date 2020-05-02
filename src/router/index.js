import Vue from "vue";
import VueRouter from "vue-router";
import Table from "@/components/Table";

Vue.use(VueRouter);

const routes = [
  {
    path: "/table",
    name: "Table",
    component: Table
  },
  {
    path: "/",
    name: "GoogleMap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "googlemap" */ "@/components/GoogleMap")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
