import { useContext } from "react";
import Carrito from "./Carrito";
import { ItemContext } from "../../context/ItemContext";

const ContainerCarrito = () => {
    const { cart, getTotalPrice, clearCart } = useContext(ItemContext);
    return (
        <Carrito
            cart={cart}
            getTotalPrice={getTotalPrice}
            clearCart={clearCart}
        />
    );
};

export default ContainerCarrito;
