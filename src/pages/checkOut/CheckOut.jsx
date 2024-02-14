import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Titulos from "../../common/titulos/Titulos";
import "./CheckOut.css";

const CheckOut = ({ handleSubmit, handleChange, formData }) => {
    return (
        <div className="container-checkout">
            <Titulos titulo={"Checkout"} />
            <form className="form-checkout" onSubmit={handleSubmit}>
                <h2>Enviar Formulario</h2>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="mail"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        placeholder="Dirección"
                        value={formData.direccion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Comprar</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;
