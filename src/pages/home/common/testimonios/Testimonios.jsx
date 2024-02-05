import Testimonio from "../../../../common/testimonio/Testimonio";
import "./Testimonios.css";

const Testimonios = () => {
    return (
        <div className="container-testimonios">
            <div className="testimonios">
                <h1>Testimonios</h1>
                <div className="dos-testimonios">
                    <Testimonio
                        descripcion={"La mejor dietetica de Necochea"}
                    />
                    <Testimonio descripcion={"Muy buena calidad"} />
                </div>
                <div className="dos-testimonios">
                    <Testimonio descripcion={"Excelente atención"} />
                    <Testimonio descripcion={"Muy recomendable"} />
                </div>
            </div>
        </div>
    );
};

export default Testimonios;
