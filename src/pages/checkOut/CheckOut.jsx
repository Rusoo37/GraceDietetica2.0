import { ToastContainer } from "react-toastify";
import Titulos from "../../common/titulos/Titulos";
import "./CheckOut.css";

const CheckOut = ({ compras, handleSubmit }) => {
    return (
        <div className="container-checkout">
            <Titulos titulo={"Checkout"} />
            <form className="form-checkout" onSubmit={handleSubmit}>
                <h2>Enviar Formulario</h2>
                <input type="mail" placeholder="Email" />
                <input type="text" placeholder="Teléfono" />
                <input type="text" placeholder="Dirección" />
                <div></div>
                <button>Comprar</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;
