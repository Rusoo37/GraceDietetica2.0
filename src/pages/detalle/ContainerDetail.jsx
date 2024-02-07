import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig/FirebaseConfig";
import { useEffect, useState } from "react";
import { notifyExitoso } from "../../../utils/Alerts";

const ContainerDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const coleccionDb = import.meta.env.VITE_COLECCION;

    useEffect(() => {
        let refCollection = collection(db, coleccionDb);
        let refDoc = doc(refCollection, id);
        getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
    }, [id]);

    const agregarAlCarrito = () => {
        notifyExitoso("El producto se agrego al carrito");
    };

    return (
        <ItemDetail producto={product} agregarAlCarrito={agregarAlCarrito} />
    );
};

export default ContainerDetail;
