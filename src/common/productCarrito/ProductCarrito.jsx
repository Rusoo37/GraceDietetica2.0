import { useEffect, useState } from "react";
import "./ProductCarrito.css";

const ProductCarrito = ({ producto, total }) => {
    const [kilos, setKilos] = useState(false);
    useEffect(() => {
        if (
            producto.categoria === "frutos-secos" ||
            producto.categoria === "cereales"
        ) {
            setKilos(true);
        }
    }, []);
    return (
        <div className="container-card-carrito">
            <div className="primera-parte-carrito">
                <img src={producto.imagen} alt="hola" />
            </div>
            <div className="segunda-parte-carrito">
                <div className="primera-segunda-parte-carrito">
                    <h1>{producto.nombre}</h1>
                    <p>{producto.precio}</p>
                </div>
                <p>{producto.descripcion}</p>
                <p>
                    Cantidad: {producto.cantidad}{" "}
                    <strong>{kilos && "Kg"}</strong>
                </p>
                {total && (
                    <p>
                        Total: <strong>${total}</strong>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCarrito;
