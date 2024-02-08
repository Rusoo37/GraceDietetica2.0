import { createContext, useEffect } from "react";
import { useState } from "react";
import { db } from "../firebaseconfig/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemContext = createContext();

const ItemContextComponent = ({ children }) => {
    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("carrito")) || []
    );

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
    };

    return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export default ItemContextComponent;
