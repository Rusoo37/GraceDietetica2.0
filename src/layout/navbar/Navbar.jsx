import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";
import carrito from "./../../img/carrito.png";
import { LoginContext } from "../../context/LoginContext";

const Navbar = ({ scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isLog, logOut } = useContext(LoginContext);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`container-navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo-container-navbar">
                <Link to="/" className="logo-navbar">
                    <img src={logo} alt="logo" />
                    <div>
                        <h4>Grace</h4>
                        <h4>Dietetica</h4>
                    </div>
                </Link>
            </div>
            <div className="links-navbar">
                <Link to="/productos" className="link-nav">
                    Productos
                </Link>
                <button
                    className="link-nav"
                    style={{
                        background: "none",
                        border: "none",
                    }}
                    onClick={() => scrollToSection("footer")}
                >
                    Contacto
                </button>
                {isLog ? (
                    <Link to="/dashboard" className="link-nav">
                        Dashboard
                    </Link>
                ) : (
                    <Link to="/nosotros" className="link-nav">
                        Sobre Nosotros
                    </Link>
                )}
                {isLog ? (
                    <button onClick={logOut} className="btn-cerrar">
                        Cerrar sesión
                    </button>
                ) : (
                    <Link to="login" className="link-nav">
                        Mi cuenta
                    </Link>
                )}
                <Link to="/carrito" className="carrito-navbar">
                    <img src={carrito} alt="Carrito de compras" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
