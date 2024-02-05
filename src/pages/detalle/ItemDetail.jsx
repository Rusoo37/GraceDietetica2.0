import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
    return (
        <div className="container-detalle">
            <div className="container-titulo">
                <div className="titulo">
                    <h3>Nombre Producto</h3>
                    <Link to="/" className="link">
                        Volver
                    </Link>
                </div>
            </div>
            <div className="detalle">
                <div className="primera-parte-detalle">
                    <img src="producto" alt="producto imagen" />
                </div>
                <div className="segunda-parte-detalle">
                    <div className="div-titulo-detalle">
                        <h1>Nombre Producto</h1>
                    </div>
                    <div className="div-info-detalle">
                        <h2>$25.35</h2>
                        <p>
                            Aenean lectus elit, fermentum non, convallis id,
                            sagittis at, neque. Nullam mauris orci, aliquet et,
                            iaculis et, viverra vitae, ligula. Nulla ut felis in
                            purus aliquam imperdiet. Maecenas aliquet mollis
                            lectus. Vivamus consectetuer risus et tortor. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer nec odio. Praesent libero.
                        </p>
                    </div>
                    <div className="div-button-detalle">
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
