import { useContext, useState } from "react";
import "./Header.css";
import { LoginContext } from "../../../../context/LoginContext";

const Header = () => {
    const { isLog, dataInfo, handleChangeInfo } = useContext(LoginContext);
    const [edicion, setEdicion] = useState(true);
    return (
        <div className="container-header">
            <div className="container-info-header">
                <h1>Grace Dietetica</h1>
                {isLog ? (
                    <textarea
                        type="text"
                        name="header"
                        value={dataInfo ? dataInfo.header : "Cargando.."}
                        onChange={handleChangeInfo}
                        disabled={edicion}
                        className={
                            !edicion ? "inputHeaderEdicion" : "inputHeader"
                        }
                    />
                ) : (
                    <p>{dataInfo && dataInfo.header}</p>
                )}
                {isLog && (
                    <button
                        onClick={() => setEdicion(!edicion)}
                        className="btn-editar"
                    >
                        Editar
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
