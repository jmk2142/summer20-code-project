import Vue from "vue";
import VueRouter from "vue-router";
import Tasksets from '../views/Tasksets.vue'
import Photos from '../views/Photos.vue'
import About from '../views/About.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/tasksets",
    name: "Tasksets",
    component: Tasksets
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
