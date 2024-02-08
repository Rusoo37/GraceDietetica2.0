import { createContext, useEffect } from "react";
import { useState } from "react";
import { db } from "../firebaseconfig/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemContext = createContext();

const ItemContextComponent = ({ children }) => {
    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(true);
    const coleccionDb = import.meta.env.VITE_COLECCION;

    const traerItems = (categoryName) => {
        let productsCollection = collection(db, coleccionDb);

        let consulta;
        if (!categoryName) {
            consulta = productsCollection;
        } else {
            consulta = query(
                productsCollection,
                where("categoria", "==", categoryName)
            );
        }
        getDocs(consulta)
            .then((res) => {
                let newArr = res.docs.map((product) => ({
                    ...product.data(),
                    id: product.id,
                }));
                setItems(newArr);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar propiedades:", error);
                setLoading(false);
            });
    };

    const data = {
        items,
        traerItems,
    };

    return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export default ItemContextComponent;
