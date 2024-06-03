import Home from "../views/Home.vue";
// import App from "../App.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blog",
    name: "blog",
    props: true,
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    props: true,
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
  },
  {
    path: "/rentals/vehicle/:id",
    name: "vehicle",
    props: true,
    component: () =>
      import(/* webpackChunkName: "vehicle" */ "../views/Vehicle.vue"),
  },
  {
    path: "*",
    component: Home,
  },
];
