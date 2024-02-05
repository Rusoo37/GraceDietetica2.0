import "./Suscribirse.css";

const Suscribirse = () => {
    return (
        <div className="container-suscribirse">
            <h1>Suscribite para nuevas ofertas</h1>
            <p>Y recibi cupones de descuentos!</p>
            <form className="form-suscribirse">
                <input type="mail" placeholder="Ingresa tu email" required />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Suscribirse;
