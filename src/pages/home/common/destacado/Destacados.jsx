import { useState } from "react";
import "./Destacados.css";
import ProductCard from "../../../../common/productCard/ProductCard";

const Destacados = () => {
    const [productos, setProductos] = useState([1, 2, 3, 4]);
    return (
        <div className="container-destacados">
            <div>
                <h2>Productos Destacados</h2>
            </div>
            <div className="destacados">
                {productos.map((producto, index) => (
                    <ProductCard producto={producto} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Destacados;
