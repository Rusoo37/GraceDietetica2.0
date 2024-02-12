import { useContext, useState } from "react";
import Titulos from "../../common/titulos/Titulos";
import "./AboutUs.css";
import { LoginContext } from "../../context/LoginContext";

const AboutUs = () => {
    const { isLog, dataInfo, handleChangeInfo } = useContext(LoginContext);
    const [edicion, setEdicion] = useState(true);
    return (
        <div className="container-about-us">
            <Titulos titulo={"Sobre Nosotros"} />
            <div className="container-info-about">
                <div>
                    {isLog ? (
                        <textarea
                            type="text"
                            name="nosotros"
                            value={dataInfo ? dataInfo.nosotros : "Cargando.."}
                            onChange={handleChangeInfo}
                            disabled={edicion}
                            className={
                                !edicion
                                    ? "inputContactoEdicion"
                                    : "inputContacto"
                            }
                        />
                    ) : (
                        <p>{dataInfo && dataInfo.nosotros}</p>
                    )}
                    {isLog && (
                        <button onClick={() => setEdicion(!edicion)}>
                            Editar
                        </button>
                    )}
                </div>
                <div>
                    <img src="imagen" alt="imagen" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
