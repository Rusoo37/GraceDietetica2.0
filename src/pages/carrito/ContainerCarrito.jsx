import { useContext } from "react";
import Carrito from "./Carrito";
import { ItemContext } from "../../context/ItemContext";

const ContainerCarrito = () => {
    const { cart, getTotalPrice, clearCart } = useContext(ItemContext);
    const phoneNumber = import.meta.env.VITE_NUMERO_TELEFONO;

    const message = `Quisiera solicitar un pedido con los siguientes productos:\n${cart
        .map((producto) => `- ${producto.nombre}`)
        .join("\n")}`;

    const handleWhatsAppButtonClick = () => {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        clearCart();
        window.open(whatsappLink, "_blank");
    };

    return (
        <Carrito
            cart={cart}
            getTotalPrice={getTotalPrice}
            clearCart={clearCart}
            handleWhatsAppButtonClick={handleWhatsAppButtonClick}
        />
    );
};

export default ContainerCarrito;
