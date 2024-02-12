import "./Footer.css";
import logo from "./../../img/logo.png";
import { Link } from "react-router-dom";

const Footer = ({ scrollToSection }) => {
    return (
        <div className="container-footer">
            <div className="primera-parte-footer" id="footer">
                <div className="info-empresa">
                    <div className="logo-footer">
                        <img src={logo} alt="logo" />
                        <div>
                            <h4>Grace</h4>
                            <h4>Dietetica</h4>
                        </div>
                    </div>
                    <p>Grace Dietetica, la mejor de la costa Atlantica.</p>
                    <p>Av 75 N°1234, Necochea, Argentina.</p>
                    <p>(2262) 23-8371</p>
                    <p>contact@youroceanwpsite.com</p>
                    <p>Lun - Vie / 9:00 - 21:00</p>
                </div>
                <div className="container-info-footer">
                    <div className="info-footer">
                        <h5>INFORMACIÓN</h5>
                        <Link to="/nosotros" className="link-footer">
                            Sobre Nosotros
                        </Link>
                        <button
                            className="link-footer-boton"
                            onClick={() => scrollToSection("footer")}
                        >
                            Contacto
                        </button>
                        <p>Suscribirse</p>
                    </div>
                    <div className="info-footer">
                        <h5>NUESTROS SERVICIO</h5>
                        <Link
                            to="/terminos&condiciones"
                            className="link-footer"
                        >
                            Términos y condiciones
                        </Link>
                        <Link to="/privacidad" className="link-footer">
                            Privacidad
                        </Link>
                        <p>Métodos de pago</p>
                    </div>
                </div>
            </div>
            <div className="segunda-parte-footer">
                <p>© Developed by Nicolás Angladette</p>
            </div>
        </div>
    );
};

export default Footer;
