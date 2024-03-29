import Filtros from "../../common/filtros/Filtros";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";
import Titulos from "../../common/titulos/Titulos";
import ScrollToUp from "../../common/scrollUp/ScrollToUp";

const ItemList = ({ productos }) => {
    return (
        <div className="container-item-list">
            <Titulos titulo={"Productos"} />
            <Filtros />
            <div className="container-productos">
                {productos.length > 0 &&
                    productos.map((producto, index) => (
                        <ProductCard producto={producto} key={index} />
                    ))}
            </div>
            <ScrollToUp />
        </div>
    );
};

export default ItemList;
