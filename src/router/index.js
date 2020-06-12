import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import userManager from "../auth/userManager";
import auth from "../auth/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../components/Profile.vue"),
  },
  ,
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () =>
      import(
        /* webpackChunkName: "unauthorized" */ "../components/Unauthorized.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  auth.user = await userManager.getUser();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth.user) {
      return next({
        path: "/unauthorized",
      });
    }
  }
  return next();
});

export default router;
