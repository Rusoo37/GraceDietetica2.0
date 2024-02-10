import { useContext, useState } from "react";
import CheckOut from "./CheckOut";
import { ItemContext } from "../../context/ItemContext";
import { notifyErroneo, notifyExitoso } from "../../../utils/Alerts";

const ContainerCheckOut = () => {
    const { cart } = useContext(ItemContext);

    /* nodemailer */
    const [formData, setFormData] = useState({
        email: "",
        telefono: "",
        direccion: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /* const serverUrl = import.meta.env.VITE_RUTA; */
    const serverUrl = "http://localhost:5173";
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${serverUrl}/checkOut`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                notifyExitoso(
                    "Su compra ha sido exitosa, dentro de 48 horas llegará su pedido"
                );
            } else {
                notifyErroneo("Error al enviar el correo");
            }
        } catch (error) {
            console.error("Error:", error);
            notifyErroneo("Error al enviar el correo 2");
        }
    };

    return (
        <CheckOut
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
        />
    );
};

export default ContainerCheckOut;
