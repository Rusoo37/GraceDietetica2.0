import { Link } from "react-router-dom";
import "./Titulos.css";

const Titulos = ({ titulo }) => {
    return (
        <div className="container-titulo">
            <div className="titulo">
                <h3>{titulo}</h3>
                {titulo && titulo !== "Productos" ? (
                    <Link to="/productos" className="link">
                        Volver
                    </Link>
                ) : (
                    <Link to="/" className="link">
                        Volver
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Titulos;
