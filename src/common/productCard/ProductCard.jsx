import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ producto }) => {
    return (
        <Link
            to={`/detalle/${producto.id}`}
            className="container-carta-producto"
        >
            <img src={producto.imagen} alt="producto" />
            <p>{producto.nombre}</p>
            <p className="price">${producto.precio}</p>
        </Link>
    );
};

export default ProductCard;
