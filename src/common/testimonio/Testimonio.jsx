import "./Testimonio.css";
import cita from "./../../img/cita.png";

const Testimonio = ({ descripcion }) => {
    return (
        <div className="testimonio">
            <img src={cita} alt="Cita" className="cita" />
            <p>{descripcion}</p>
        </div>
    );
};

export default Testimonio;
