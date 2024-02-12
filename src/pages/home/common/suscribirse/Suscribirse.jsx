import { addDoc, collection } from "firebase/firestore";
import { notifyErroneo, notifyExitoso } from "../../../../../utils/Alerts";
import { db } from "../../../../firebaseconfig/FirebaseConfig";
import "./Suscribirse.css";
import { useState } from "react";

const Suscribirse = () => {
    const [mail, setMail] = useState("");
    const handleSuscribirse = async (e) => {
        e.preventDefault();
        let mailColeccion = collection(db, "suscripciones");
        try {
            const docRef = await addDoc(mailColeccion, {
                mail,
                timestamp: new Date(),
            });
            console.log("Mail guardado en Firebase con ID:", docRef.id);
            notifyExitoso("Mail agregado exitosamente!");
            setMail("");
        } catch (error) {
            console.error(error.message);
            notifyErroneo("Error al guardar el mail");
        }
    };
    return (
        <div className="container-suscribirse">
            <h1>Suscribite para nuevas ofertas</h1>
            <p>Y recibi cupones de descuentos!</p>
            <form className="form-suscribirse" onSubmit={handleSuscribirse}>
                <input
                    type="mail"
                    placeholder="Ingresa tu email"
                    required
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Suscribirse;
