import { createRouter, createWebHistory } from "vue-router";

//import the components
import HomePage from "./pages/Home.vue";
import ChiSiamoPage from "./pages/ChiSiamo.vue";
import ContattiPage from "./pages/Contatti.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/chi-siamo",
        name: "chi-siamo",
        component: ChiSiamoPage
    },
    {
        path: "/contatti",
        name: "contatti",
        component: ContattiPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };