import "./Navbar.css";
import whatsapp from "./../../img/whatsapp.png";
import instagram from "./../../img/instagram.png";
import telefono from "./../../img/telefono.png";
import correo from "./../../img/correo.png";

const FirstNavbar = () => {
    return (
        <div className="container-first-navbar">
            <div className="container-redes-navbar" style={{ width: "30%" }}>
                <img src={whatsapp} alt="" />
                <img src={instagram} alt="" />
                <img src={telefono} alt="" />
                <img src={correo} alt="" />
            </div>
            <div className="container-redes-navbar">
                <p>Grace Dietetica</p>
            </div>
        </div>
    );
};

export default FirstNavbar;
