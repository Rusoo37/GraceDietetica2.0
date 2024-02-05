import ProductCard from "../../../../common/productCard/ProductCard";
import "./nuevosProductos.css";
import { useState } from "react";

const NuevosProductos = () => {
    const [productos, setProductos] = useState([1, 2, 3, 4]);
    return (
        <div className="container-nuevos-productos">
            <div>
                <h2>Nuevos Productos</h2>
            </div>
            <div className="container-coleccion">
                {productos.map((producto, index) => (
                    <ProductCard producto={producto} key={index} />
                ))}
            </div>
        </div>
    );
};

export default NuevosProductos;
