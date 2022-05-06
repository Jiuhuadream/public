import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import Home from "../pages/Home";
// import Users from "../pages/Users";

const routes = [
  { path: "/aa", component: () => import("../pages/库/Aa") },
  {
    path: "/home",
    component: () => import(/*webPackChunkName:"home-chunk" */ "../pages/Home"),
  },

  {
    path: "/users/:id",
    component: () =>
      import(/*webPackChunkName:"users-chunk" */ "../pages/Users"),
  },
  //配置404
  {
    path: "*",
    component: () => import(/*webPackChunkName:"404" */ "../pages/Page404"),
  },
];

export default new VueRouter({
  mode: "hash",
  routes,
});
