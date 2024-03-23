import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    // {
    //     path: "/fleet",
    //     name: "fleet",
    //     component: () => import(/* webpackChunkName: "fleet" */ "../views/Fleet.vue")
    // }
];

export default routes;