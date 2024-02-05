import "./Footer.css";
import logo from "./../../img/logo.png";

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="primera-parte-footer">
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
                    <p>(2262) 48-6975</p>
                    <p>contact@youroceanwpsite.com</p>
                    <p>Lun - Vie / 9:00 - 21:00</p>
                </div>
                <div className="info-footer">
                    <h5>INFORMACIÓN</h5>
                    <p>Sobre Nosotros</p>
                    <p>Contacto</p>
                    <p>Suscribirse</p>
                </div>
                <div className="info-footer">
                    <h5>NUESTROS SERVICIO</h5>
                    <p>Términos y condiciones</p>
                    <p>Privacidad</p>
                    <p>Métodos de pago</p>
                </div>
            </div>
            <div className="segunda-parte-footer">
                <p>© Developed by Nicolás Angladette</p>
            </div>
        </div>
    );
};

export default Footer;
