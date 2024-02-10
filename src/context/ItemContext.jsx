import { createContext } from "react";
import { useState } from "react";
import { db } from "../firebaseconfig/FirebaseConfig";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { notifyErroneo, notifyExitoso } from "../../utils/Alerts";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext();

const ItemContextComponent = ({ children }) => {
    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("carrito")) || []
    );
    const navigate = useNavigate();
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

    /* CARRITO */

    const addToCart = (product) => {
        const existe = cart.some((elemento) => elemento.id == product.id);
        if (existe) {
            let newArr = cart.map((elemento) => {
                if (product.id === elemento.id) {
                    return {
                        ...elemento,
                        cantidad: product.cantidad++,
                    };
                } else {
                    return elemento;
                }
            });
            localStorage.setItem("carrito", JSON.stringify(newArr));
            setCart(newArr);
        } else {
            localStorage.setItem("carrito", JSON.stringify([...cart, product]));
            setCart([...cart, product]);
        }
    };

    const clearCart = () => {
        localStorage.removeItem("carrito");
        setCart([]);
    };

    const deleteById = (id) => {
        let newArr = cart.filter((elemento) => elemento.id !== id);
        localStorage.setItem("carrito", JSON.stringify(newArr));
        setCart(newArr);
    };

    //RETORNAR EL TOTAL DE CANTIDADES

    const getTotalQuantity = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.cantidad;
        }, 0);
        return total;
    };

    //RETORNAR EL TOTAL DE PLATA

    const getTotalPrice = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.cantidad * elemento.precio;
        }, 0);
        return total;
    };

    //DADO UN ID, SABER LAS CANTIDADES QUE HAY

    const getQuantityById = (id) => {
        if (!cart) {
            return 0; // o cualquier valor predeterminado que desees
        }

        let producto = cart.find((elemento) => elemento.id === id);
        return producto && producto.cantidad ? producto.cantidad : 0;
    };

    /* ELIMINAR PRODUCTO */

    const eliminarPropiedad = async (propiedadId) => {
        try {
            const coleccionDb = import.meta.env.VITE_COLECCION;
            const propiedadRef = doc(db, coleccionDb, propiedadId);

            await deleteDoc(propiedadRef);

            notifyExitoso("Propiedad eliminada con éxito.");
            traerItems();
        } catch (error) {
            console.error("Error al eliminar la propiedad:", error.message);
            notifyErroneo("Error al eliminar la propiedad");
        }
    };

    const data = {
        items,
        traerItems,
        cart,
        addToCart,
        clearCart,
        deleteById,
        getTotalQuantity,
        getTotalPrice,
        getQuantityById,
        eliminarPropiedad,
    };

    return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export default ItemContextComponent;
