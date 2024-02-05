import { Link } from "react-router-dom";
import Filtros from "../../common/filtros/Filtros";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ productos }) => {
    return (
        <div className="container-item-list">
            <div className="container-titulo">
                <div className="titulo">
                    <h3>Productos</h3>
                    <Link to="/" className="link">
                        Volver
                    </Link>
                </div>
            </div>
            <Filtros />
            <div className="container-productos">
                {productos.map((producto, index) => (
                    <ProductCard producto={producto} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
