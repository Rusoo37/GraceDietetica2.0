import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
                <p>Contacto</p>
                <p>Sobre Nosotros</p>
                <p>Mi cuenta</p>
            </div>
        </div>
    );
};

export default Navbar;
