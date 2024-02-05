import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ producto }) => {
    return (
        <Link
            to={`/detalle/${producto.id}`}
            className="container-carta-producto"
        >
            <img src="producto" alt="producto" />
            <p>Nombre</p>
            <p className="price">$25.32</p>
        </Link>
    );
};

export default ProductCard;
