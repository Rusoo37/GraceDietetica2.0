import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../../../firebaseconfig/FirebaseConfig";
import Agregar from "./Agregar";
import { Link, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext, useState } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { notifyExitoso } from "../../../../../utils/Alerts";
import { ItemContext } from "../../../../context/ItemContext";

const ContainerAgregar = () => {
    const [loading, setLoading] = useState(true);
    const { isLog } = useContext(LoginContext);
    const { traerItems } = useContext(ItemContext);
    const navigate = useNavigate();
    const [producto, setProducto] = useState({
        nombre: "",
        cantidad: "",
        categoria: "",
        precio: "",
        descripcion: "",
        nuevo: false,
        destacado: false,
        imagen: "",
    });

    const handleImageChange = async (e) => {
        const logoImage = e.target.files[0];

        if (logoImage) {
            const storageRef = ref(storage, `imagenes/${logoImage.name}`);
            await uploadBytes(storageRef, logoImage);
            const logoUrl = await getDownloadURL(storageRef);
            setProducto((prevProduct) => ({
                ...prevProduct,
                imagen: logoUrl,
            }));
        }
    };

    /* AGREGAR */

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const coleccionDb = import.meta.env.VITE_COLECCION;
        let propiedadColeccion = collection(db, coleccionDb);

        try {
            const docRef = await addDoc(propiedadColeccion, producto);
            console.log("Propiedad guardada en Firebase con ID:", docRef.id);
            notifyExitoso("Producto agregado exitosamente!");
            traerItems();
            navigate("/dashboard");
        } catch (error) {
            console.error(error.message);
            notifyErroneo("Error al guardar la propiedad");
        }
    };

    return isLog ? (
        <Agregar
            producto={producto}
            setProducto={setProducto}
            handleAddProduct={handleAddProduct}
            handleImageChange={handleImageChange}
            loading={loading}
        />
    ) : (
        <div
            style={{
                minHeight: "60vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>Por favor, inicie sesión</h1>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default ContainerAgregar;
