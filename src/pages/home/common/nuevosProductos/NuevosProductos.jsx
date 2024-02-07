import ProductCard from "../../../../common/productCard/ProductCard";
import { ItemContext } from "../../../../context/ItemContext";
import "./nuevosProductos.css";
import { useContext, useEffect, useState } from "react";

const NuevosProductos = () => {
    const { traerItems, items } = useContext(ItemContext);
    useEffect(() => {
        traerItems();
    }, []);
    const productosNuevos =
        items.length > 0 && items.filter((producto) => producto.nuevo);
    return (
        <div className="container-nuevos-productos">
            <div>
                <h2>Nuevos Productos</h2>
            </div>
            <div className="container-coleccion">
                {productosNuevos.length > 0 &&
                    productosNuevos.map((producto, index) => (
                        <ProductCard producto={producto} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default NuevosProductos;
