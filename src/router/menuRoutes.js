import ContainerDetail from "../pages/detalle/ContainerDetail";
import Home from "../pages/home/Home";
import ContainerItemList from "../pages/itemList/ContainerItemList";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: Home,
    },
    {
        id: "productos",
        path: "/productos",
        Element: ContainerItemList,
    },
    {
        id: "detalle",
        path: "/detalle/:id",
        Element: ContainerDetail,
    },
];
