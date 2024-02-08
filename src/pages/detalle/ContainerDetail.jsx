import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig/FirebaseConfig";
import { useContext, useEffect, useState } from "react";
import { notifyExitoso } from "../../../utils/Alerts";
import { ItemContext } from "../../context/ItemContext";

const ContainerDetail = () => {
    const { addToCart, getQuantityById } = useContext(ItemContext);

    let { id } = useParams();

    const [product, setProduct] = useState({});

    const coleccionDb = import.meta.env.VITE_COLECCION;

    let cantidadEnCarrito = getQuantityById(id);
    useEffect(() => {
        let refCollection = collection(db, coleccionDb);
        let refDoc = doc(refCollection, id);
        getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
    }, [id]);

    const agregarAlCarrito = (cant) => {
        let data = {
            ...product,
            cantidad: cant,
        };
        notifyExitoso("El producto se agrego al carrito");
        addToCart(data);
    };

    return (
        <ItemDetail
            producto={product}
            agregarAlCarrito={agregarAlCarrito}
            cantidadEnCarrito={cantidadEnCarrito}
        />
    );
};

export default ContainerDetail;
