import { useState } from "react";
import "./Filtros.css";
import { Link } from "react-router-dom";

const Filtros = () => {
    const [botonActivo, setBotonActivo] = useState(null);

    const handleBotonClick = (index) => {
        if (botonActivo === index) {
            setBotonActivo(null);
        } else {
            setBotonActivo(index);
        }
    };
    return (
        <div className="container-filtros">
            <Link to="/categoria/cereales">
                <button
                    className={`botonFiltros ${
                        botonActivo === 0 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(0)}
                >
                    Cereales
                </button>
            </Link>
            <Link to="/categoria/frutos-secos">
                <button
                    className={`botonFiltros ${
                        botonActivo === 1 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(1)}
                >
                    Frutos secos
                </button>
            </Link>
            <Link to="/categoria/despensa">
                <button
                    className={`botonFiltros ${
                        botonActivo === 2 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(2)}
                >
                    Despensa
                </button>
            </Link>
            <Link to="/categoria/suplementos">
                <button
                    className={`botonFiltros ${
                        botonActivo === 3 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(3)}
                >
                    Suplementos
                </button>
            </Link>
            <Link to="/categoria/bebidas">
                <button
                    className={`botonFiltros ${
                        botonActivo === 4 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(4)}
                >
                    Bebidas
                </button>
            </Link>
            <Link to="/categoria/cereales">
                <button
                    className={`botonFiltros ${
                        botonActivo === 5 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(5)}
                >
                    Semillas
                </button>
            </Link>
            <Link to="/categoria/condimentos">
                <button
                    className={`botonFiltros ${
                        botonActivo === 6 ? "activo" : ""
                    }`}
                    onClick={() => handleBotonClick(6)}
                >
                    Condimentos
                </button>
            </Link>
        </div>
    );
};

export default Filtros;
