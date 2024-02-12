import React, { useState } from "react";
import CheckOut from "./CheckOut";
import { notifyExitoso } from "../../../utils/Alerts";
/* import { enviarMail } from "../../../server"; */

const ContainerCheckOut = () => {
    const [formData, setFormData] = useState({
        email: "",
        telefono: "",
        direccion: "",
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        /* enviarMail(formData.email, formData.telefono); */
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
