import Home from "../views/Home.vue";
// import App from "../App.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:name",
    name: "faq",
    props: true,
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
  },
  {
    path: "/:name/:id",
    name: "fleet",
    props: true,
    component: () =>
      import(/* webpackChunkName: "fleet" */ "../views/Fleet.vue"),
  },
  {
    path: "*",
    component: Home,
  },
];
