import { useContext, useEffect, useState } from "react";
import "./Destacados.css";
import ProductCard from "../../../../common/productCard/ProductCard";
import { ItemContext } from "../../../../context/ItemContext";

const Destacados = () => {
    const { traerItems, items } = useContext(ItemContext);
    useEffect(() => {
        traerItems();
    }, []);
    const productosDestacados =
        items.length > 0 && items.filter((producto) => producto.destacado);
    return (
        <div className="container-destacados">
            <div>
                <h2>Productos Destacados</h2>
            </div>
            <div className="destacados">
                {productosDestacados.length > 0 &&
                    productosDestacados.map((producto, index) => (
                        <ProductCard producto={producto} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default Destacados;
