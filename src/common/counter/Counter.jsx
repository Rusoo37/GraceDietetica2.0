import "./Counter.css";

const Counter = ({ stock, contador, setContador, agregarAlCarrito }) => {
    return (
        <div className="container-counter">
            {stock !== 0 ? (
                <div className="counter">
                    <button
                        disabled={contador <= 1}
                        variant="outlined"
                        onClick={() =>
                            setContador((prevContador) => prevContador - 1)
                        }
                    >
                        -
                    </button>
                    <h2>{contador}</h2>
                    <button
                        disabled={contador >= stock}
                        variant="outlined"
                        onClick={() =>
                            setContador((prevContador) => prevContador + 1)
                        }
                    >
                        +
                    </button>{" "}
                </div>
            ) : (
                <p variant="h4">Sin stock</p>
            )}
            <div className="container-agregar-counter">
                <button
                    variant="outlined"
                    onClick={() => agregarAlCarrito(contador)}
                    disabled={stock === 0 ? true : false}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Counter;
