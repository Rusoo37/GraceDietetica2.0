import AboutUs from "../pages/aboutUs/AboutUs";
import ContainerCarrito from "../pages/carrito/ContainerCarrito";
import ContainerCheckOut from "../pages/checkOut/ContainerCheckOut";
import ContainerDetail from "../pages/detalle/ContainerDetail";
import Home from "../pages/home/Home";
import ContainerItemList from "../pages/itemList/ContainerItemList";
import LoginContainer from "../pages/login/LoginContainer";
import Privacidad from "../pages/terminos/Privacidad";
import Terminos from "../pages/terminos/Terminos";

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
    {
        id: "nosotros",
        path: "/nosotros",
        Element: AboutUs,
    },
    {
        id: "login",
        path: "/login",
        Element: LoginContainer,
    },
    {
        id: "carrito",
        path: "/carrito",
        Element: ContainerCarrito,
    },
    {
        id: "categoria",
        path: "/categoria/:categoryName",
        Element: ContainerItemList,
    },
    {
        id: "terminos",
        path: "/terminos&condiciones",
        Element: Terminos,
    },
    {
        id: "privacidad",
        path: "/privacidad",
        Element: Privacidad,
    },
    {
        id: "checkOut",
        path: "/checkOut",
        Element: ContainerCheckOut,
    },
];
