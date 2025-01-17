import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    
  },
  {
    path: "/GameInfo",
    name: "GameInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameInfo.vue")
  },
  {
    path: "/DetallesPartido/id/:id/title/:title/info/:info/date/:date/adress/:adress",
    name: "DetallesPartido",
    props: { id:'',title: '', info:'', date:''},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetallesPartido.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
