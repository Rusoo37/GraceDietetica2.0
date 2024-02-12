import "./SeparadorHome.css";

const SeparadorHome = () => {
    return (
        <div className="container-separador-home">
            <div className="container-info-separador">
                <div className="div-info-separador">
                    <h3>DELIVERY RÁPIDO</h3>
                    <p>Por tan solo $300.</p>
                </div>
                <div className="div-info-separador">
                    <h3>PEDIDOS SEGUROS</h3>
                    <p>Realiza tu pedido por Whatsapp o mail.</p>
                </div>
                <div className="div-info-separador">
                    <h3>REEMBOLSO GRATIS</h3>
                    <p>
                        Ante cualquier inconveniente, te reembolsaremos tu
                        pedido.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SeparadorHome;
