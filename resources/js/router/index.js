import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home";
import Crud from "../components/crud/Crud";
import Create from "../components/crud/Create";
import Edit from "../components/crud/Edit";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "crud",
        path: "/crud",
        component: Crud,
    },
    {
        name: "create",
        path: "/create",
        component: Create,
    },
    {
        name: "edit",
        path: "/edit:id",
        component: Edit,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
