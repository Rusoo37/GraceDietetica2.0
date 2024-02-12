import { ToastContainer } from "react-toastify";
import Titulos from "../../../../common/titulos/Titulos";
import "./Editar.css";

const Editar = ({
    producto,
    setProducto,
    handleEditProduct,
    handleImageChange,
}) => {
    return (
        <div className="container-editar">
            <Titulos titulo={"Editar producto"} />
            <form className="form-editar" onSubmit={handleEditProduct}>
                <h2>Editar</h2>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    required
                    value={producto.nombre}
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            nombre: e.target.value,
                        })
                    }
                />
                <input
                    type="number"
                    placeholder="Cantidad de producto"
                    required
                    value={producto.cantidad}
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            cantidad: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Categoria del producto"
                    required
                    value={producto.categoria}
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            categoria: e.target.value,
                        })
                    }
                />
                <div
                    style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <label htmlFor="nuevaImagen">Nueva imagen</label>
                    <input
                        type="file"
                        id="nuevaImagen"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <textarea
                    type="text"
                    placeholder="Descripción"
                    required
                    value={producto.descripcion}
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            descripcion: e.target.value,
                        })
                    }
                />
                <input
                    type="number"
                    placeholder="Precio"
                    required
                    value={producto.precio}
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            precio: e.target.value,
                        })
                    }
                />
                <div
                    style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >
                    <label htmlFor="nuevo">Nuevo:</label>
                    <input
                        type="checkbox"
                        name="nuevo"
                        id="nuevo"
                        style={{ width: "10%" }}
                        checked={producto.nuevo}
                        onChange={(e) =>
                            setProducto({
                                ...producto,
                                nuevo: e.target.value,
                            })
                        }
                    />
                </div>
                <div
                    style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >
                    <label htmlFor="destacado">Destacado:</label>
                    <input
                        type="checkbox"
                        name="destacado"
                        id="destacado"
                        style={{ width: "10%" }}
                        checked={producto.destacado}
                        onChange={(e) =>
                            setProducto({
                                ...producto,
                                destacado: e.target.value,
                            })
                        }
                    />
                </div>
                <button>Guardar Cambios</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Editar;
