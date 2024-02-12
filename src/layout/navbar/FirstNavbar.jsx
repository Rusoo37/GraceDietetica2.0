import "./Navbar.css";
import whatsapp from "./../../img/whatsapp.png";
import instagram from "./../../img/instagram.png";
import telefono from "./../../img/telefono.png";
import correo from "./../../img/correo.png";

const FirstNavbar = () => {
    /* WHATSAPP */

    const phoneNumber = import.meta.env.VITE_NUMERO_TELEFONO;
    const message = import.meta.env.VITE_MENSAJE_WHATSAPP;
    const handleWhatsAppButtonClick = () => {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappLink, "_blank");
    };
    return (
        <div className="container-first-navbar">
            <div className="first-navbar">
                <div className="container-redes-navbar">
                    <img
                        src={whatsapp}
                        alt="icono whatsapp grace dietetica frutos secos semillas"
                        onClick={handleWhatsAppButtonClick}
                    />
                    <a href="https://www.instagram.com/grace.dietetica/">
                        <img
                            src={instagram}
                            alt="icono instagram grace dietetica frutos secos semillas"
                        />
                    </a>
                    <img
                        src={telefono}
                        alt="icono telefono grace dietetica frutos secos semillas"
                    />
                    <img
                        src={correo}
                        alt="icono correo grace dietetica frutos secos semillas"
                    />
                </div>
                <div
                    className="container-redes-navbar"
                    style={{ justifyContent: "end" }}
                >
                    <p>Grace Dietetica</p>
                </div>
            </div>
        </div>
    );
};

export default FirstNavbar;
