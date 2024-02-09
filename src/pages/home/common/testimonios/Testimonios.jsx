import Testimonio from "../../../../common/testimonio/Testimonio";
import "./Testimonios.css";
import opinionBackground from "./../../../../img/opinion.jpg";

const Testimonios = () => {
    return (
        <div className="container-testimonios">
            <img
                src={opinionBackground}
                alt="fondo opiniones grace dietetica frutos secos"
                className="opinionBackground"
            />
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
