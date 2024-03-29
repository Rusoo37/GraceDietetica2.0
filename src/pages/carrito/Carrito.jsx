import { Link } from "react-router-dom";
import ProductCarrito from "../../common/productCarrito/ProductCarrito";
import Titulos from "../../common/titulos/Titulos";
import "./Carrito.css";
import ScrollToUp from "../../common/scrollUp/ScrollToUp";

const Carrito = ({
    cart,
    getTotalPrice,
    clearCart,
    handleWhatsAppButtonClick,
}) => {
    let total = getTotalPrice();
    return (
        <div className="container-carrito">
            <Titulos titulo={"Carrito"} />
            <div className="container-cartas-carrito">
                {cart.length > 0 ? (
                    cart.map((producto, index) => (
                        <ProductCarrito
                            producto={producto}
                            key={index}
                            total={total}
                        />
                    ))
                ) : (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                    >
                        <img
                            src="https://res.cloudinary.com/dqonbozpq/image/upload/v1690132374/2762885_fmsghs.png"
                            alt="CarritoVacio"
                            style={{ height: "10rem" }}
                        />
                        <p>El carrito está vacio..</p>
                    </div>
                )}
            </div>
            <div className="container-btns-cart">
                {/* <Link to="/checkOut" className="solicitar-pedido">
                    Solicitar pedido
                </Link> */}
                <button
                    className="solicitar-pedido"
                    onClick={handleWhatsAppButtonClick}
                >
                    Solicitar pedido
                </button>
                <button
                    onClick={clearCart}
                    style={{
                        backgroundColor: "rgb(212, 43, 43)",
                        color: "white",
                    }}
                >
                    Limpiar carrito
                </button>
            </div>
            <ScrollToUp />
        </div>
    );
};

export default Carrito;
