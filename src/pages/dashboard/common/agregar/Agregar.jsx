import { ToastContainer } from "react-toastify";
import "./Agregar.css";
import Titulos from "../../../../common/titulos/Titulos";

const Agregar = ({
    producto,
    setProducto,
    handleAddProduct,
    handleImageChange,
}) => {
    return (
        <div className="container-agregar">
            <Titulos titulo={"Agregar producto"} />
            <form className="form-agregar" onSubmit={handleAddProduct}>
                <h2>Editar</h2>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    required
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
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            cantidad: e.target.value,
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
                    <label htmlFor="imagen">Ingresar una imagen</label>
                    <input
                        type="file"
                        id="imagen"
                        accept="image/*"
                        required
                        onChange={handleImageChange}
                    />
                </div>
                <select
                    id="miSelect"
                    required
                    onChange={(e) =>
                        setProducto({
                            ...producto,
                            categoria: e.target.value,
                        })
                    }
                >
                    <option value="">Seleccionar categoria</option>
                    <option value="cereales">Cereal</option>
                    <option value="frutos-secos">Fruto Seco</option>
                    <option value="despensa">Despensa</option>
                    <option value="bebidas">Bebida</option>
                    <option value="suplementos">Suplemento</option>
                    <option value="semilla">Semilla</option>
                    <option value="condimentos">Condimento</option>
                </select>
                <textarea
                    type="text"
                    placeholder="Descripción"
                    required
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
                        onChange={(e) =>
                            setProducto({
                                ...producto,
                                destacado: e.target.value,
                            })
                        }
                    />
                </div>
                <button>Agregar Producto</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Agregar;
