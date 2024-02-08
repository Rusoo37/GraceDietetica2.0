import { ToastContainer } from "react-toastify";
import "./Home.css";
import BestSeller from "./common/bestSeller/BestSeller";
import Destacados from "./common/destacado/Destacados";
import Header from "./common/header/Header";
import NuevosProductos from "./common/nuevosProductos/NuevosProductos";
import SegundoSeparador from "./common/segundoSeparador/SegundoSeparador";
import SeparadorHome from "./common/separador/SeparadorHome";
import Suscribirse from "./common/suscribirse/Suscribirse";
import Testimonios from "./common/testimonios/Testimonios";
import ScrollToUp from "../../common/scrollUp/ScrollToUp";

const Home = () => {
    return (
        <div className="container-home">
            <Header />
            <NuevosProductos />
            <BestSeller />
            <SeparadorHome />
            <Destacados />
            <Testimonios />
            <SegundoSeparador />
            <Suscribirse />
            <ToastContainer />
            <ScrollToUp />
        </div>
    );
};

export default Home;
