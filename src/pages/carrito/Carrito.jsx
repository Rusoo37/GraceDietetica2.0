import ProductCarrito from "../../common/productCarrito/ProductCarrito";
import Titulos from "../../common/titulos/Titulos";
import "./Carrito.css";

const Carrito = () => {
    const productos = [1, 2, 3, 4];
    return (
        <div className="container-carrito">
            <Titulos titulo={"Carrito"} />
            <div className="container-cartas-carrito">
                {productos.length > 0 &&
                    productos.map((producto, index) => (
                        <ProductCarrito producto={producto} key={index} />
                    ))}
            </div>
            <button>Solicitar pedido</button>
        </div>
    );
};

export default Carrito;
