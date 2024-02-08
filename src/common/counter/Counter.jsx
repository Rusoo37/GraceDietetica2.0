const Counter = ({ stock, contador, setContador, agregarAlCarrito }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "10px",
            }}
        >
            {stock !== 0 ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        gap: "20px",
                    }}
                >
                    <button
                        disabled={contador <= 1}
                        variant="outlined"
                        onClick={() =>
                            setContador((prevContador) => prevContador - 1)
                        }
                    >
                        -
                    </button>
                    <h2 style={{ color: "black" }}>{contador}</h2>
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <button
                    variant="outlined"
                    onClick={() => agregarAlCarrito(contador)}
                    sx={{ width: 200, height: 40 }}
                    disabled={stock === 0 ? true : false}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Counter;
