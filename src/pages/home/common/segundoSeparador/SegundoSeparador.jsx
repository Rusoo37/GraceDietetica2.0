import "./SegundoSeparador.css";
import delivery from "./../../../../img/delivery.png";
import retorno from "./../../../../img/retorno.png";
import descuento from "./../../../../img/descuento.png";

const SegundoSeparador = () => {
    return (
        <div className="container-segundo-separador">
            <div className="container-info-segundo-separador">
                <img src={delivery} alt="delivery" />
                <div className="info-detallado-separador">
                    <h3>Delivery</h3>
                    <p>Solo $300</p>
                </div>
            </div>
            <div className="container-info-segundo-separador">
                <img src={retorno} alt="delivery" />
                <div className="info-detallado-separador">
                    <h3>Devolución</h3>
                    <p>dentro de 30 días</p>
                </div>
            </div>
            <div className="container-info-segundo-separador">
                <img src={descuento} alt="delivery" />
                <div className="info-detallado-separador">
                    <h3>Delivery</h3>
                    <p>Solo $300</p>
                </div>
            </div>
        </div>
    );
};

export default SegundoSeparador;
