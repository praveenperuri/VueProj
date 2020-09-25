import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import About from "../views/About.vue";
import Application from "../views/Application/Application.vue";
import Instructions from "../views/Application/Instructions.vue";
import FundingSource from "../views/Application/FundingSource.vue";
import Facility from "../views/Application/Facility.vue";
// import store from './store/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/application",
    //name: "NewApplication",
    component: Application,
    children: [  
      {
        path: "", 
        name: "application", 
        redirect: { name: "Instructions" }
      },     
      {
        path: "instructions", 
        name: "Instructions", 
        component: Instructions
      }, 
      {
        path: "funding", 
        name: "Funding", 
        component: FundingSource
      },      
      {
        path: "facility", 
        name: "Facility", 
        component: Facility
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

// router.beforeEach((to: any, from: any, next: any) => {
//   if (to.matched.some((record: any) => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters['auth/isAuthenticated']) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

export default router;
