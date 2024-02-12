import "./Testimonio.css";
import cita from "./../../img/cita.png";

const Testimonio = ({ descripcion, imagen }) => {
    return (
        <div className="testimonio">
            <img src={cita} alt="Cita" className="cita" />
            <p>{descripcion}</p>
            <img
                src={imagen}
                alt="persona grace dietetica frutos secos cereales despensa"
            />
        </div>
    );
};

export default Testimonio;
