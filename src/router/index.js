import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/crew",
    name: "Crew",
    component: () => import("../views/Crew.vue")
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("../views/Rules.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
