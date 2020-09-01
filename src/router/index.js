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
    path: "/kadra",
    name: "Crew",
    component: () => import("../views/Crew.vue")
  },
  {
    path: "/regulamin",
    name: "Rules",
    component: () => import("../views/Rules.vue")
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
