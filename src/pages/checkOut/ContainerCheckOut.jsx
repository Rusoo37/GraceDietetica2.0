import { useContext } from "react";
import CheckOut from "./CheckOut";
import { ItemContext } from "../../context/ItemContext";
import { notifyExitoso } from "../../../utils/Alerts";

const ContainerCheckOut = () => {
    const { cart } = useContext(ItemContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        notifyExitoso(
            "Su compra ha sido exitosa, dentro de 48 horas llegará su pedido"
        );
    };
    return <CheckOut compras={cart} handleSubmit={handleSubmit} />;
};

export default ContainerCheckOut;
