import "./ProductCarrito.css";

const ProductCarrito = ({ producto }) => {
    return (
        <div className="container-card-carrito">
            <div className="primera-parte-carrito">
                <img src="hola" alt="hola" />
            </div>
            <div className="segunda-parte-carrito">
                <div className="primera-segunda-parte-carrito">
                    <h1>{"producto.nombre"}</h1>
                    <p>{"producto.precio"}</p>
                </div>
                <p>{"producto.descripcion"}</p>
                <p>{"cantidad"}</p>
            </div>
        </div>
    );
};

export default ProductCarrito;
