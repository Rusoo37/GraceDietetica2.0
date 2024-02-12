import { Link, useNavigate, useParams } from "react-router-dom";
import Editar from "./Editar";
import { useContext, useEffect, useState } from "react";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { notifyExitoso } from "../../../../../utils/Alerts";
import { db } from "../../../../firebaseconfig/FirebaseConfig";
import { LoginContext } from "../../../../context/LoginContext";
import { ItemContext } from "../../../../context/ItemContext";

const ContainerEditar = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    const navigate = useNavigate();
    const { isLog } = useContext(LoginContext);
    const { traerItems } = useContext(ItemContext);
    const coleccionDb = import.meta.env.VITE_COLECCION;

    useEffect(() => {
        let refCollection = collection(db, coleccionDb);
        let refDoc = doc(refCollection, id);
        getDoc(refDoc).then((res) =>
            setProducto({ ...res.data(), id: res.id })
        );
        setLoading(false);
    }, [id]);

    /* EDITAR PRODUCTO */

    const handleEditProduct = async (e) => {
        e.preventDefault();
        const propiedadRef = doc(db, coleccionDb, id);
        try {
            await updateDoc(propiedadRef, producto);
            console.log("Propiedad actualizada con éxito");
            setTimeout(() => {
                notifyExitoso("Cambios guardados con éxito");
            }, 1000);
            traerItems();
            navigate("/dashboard");
        } catch (error) {
            console.error("Error al actualizar la propiedad:", error.message);
        }
    };

    /* CAMBIAR IMAGEN */
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

    return loading ? (
        <p>Cargando</p>
    ) : isLog ? (
        <Editar
            setProducto={setProducto}
            producto={producto}
            handleEditProduct={handleEditProduct}
            handleImageChange={handleImageChange}
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

export default ContainerEditar;
