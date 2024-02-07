import { Link } from "react-router-dom";
import "./ItemDetail.css";
import Titulos from "../../common/titulos/Titulos";
import { ToastContainer } from "react-toastify";

const ItemDetail = ({ producto, agregarAlCarrito }) => {
    return (
        <div className="container-detalle">
            <Titulos titulo={producto.nombre} />
            <div className="detalle">
                <div className="primera-parte-detalle">
                    <img src={producto.imagen} alt="producto imagen" />
                </div>
                <div className="segunda-parte-detalle">
                    <div className="div-titulo-detalle">
                        <h1>{producto.nombre}</h1>
                    </div>
                    <div className="div-info-detalle">
                        <h2>${producto.precio}</h2>
                        <p>{producto.descripcion}</p>
                    </div>
                    <div className="div-button-detalle">
                        <button onClick={agregarAlCarrito} type="button">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ItemDetail;
