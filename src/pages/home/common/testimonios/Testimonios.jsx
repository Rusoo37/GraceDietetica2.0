import Testimonio from "../../../../common/testimonio/Testimonio";
import "./Testimonios.css";
import opinionBackground from "./../../../../img/opinion.jpg";
import persona1 from "./../../../../img/persona1.webp";
import persona2 from "./../../../../img/persona2.webp";
import persona3 from "./../../../../img/persona3.webp";
import persona4 from "./../../../../img/persona4.png";

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
                        imagen={persona1}
                    />
                    <Testimonio
                        descripcion={"Muy buena calidad"}
                        imagen={persona2}
                    />
                </div>
                <div className="dos-testimonios">
                    <Testimonio
                        descripcion={"Excelente atención"}
                        imagen={persona3}
                    />
                    <Testimonio
                        descripcion={"Muy recomendable"}
                        imagen={"persona4"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonios;
