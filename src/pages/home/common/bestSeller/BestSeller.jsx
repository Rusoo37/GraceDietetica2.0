import { useContext, useState } from "react";
import "./BestSeller.css";
import { LoginContext } from "../../../../context/LoginContext";

const BestSeller = () => {
    const { isLog, dataInfo, handleChangeInfo } = useContext(LoginContext);
    const [edicion, setEdicion] = useState(true);
    return (
        <div className="container-best-seller">
            <div className="info-best-seller">
                {isLog ? (
                    <textarea
                        type="text"
                        name="bestSellerTitulo"
                        value={
                            dataInfo ? dataInfo.bestSellerTitulo : "Cargando.."
                        }
                        onChange={handleChangeInfo}
                        disabled={edicion}
                        className={
                            !edicion
                                ? "inputBestSellerEdicion"
                                : "inputBestSeller"
                        }
                    />
                ) : (
                    <h1>{dataInfo && dataInfo.bestSellerTitulo}</h1>
                )}
                {isLog ? (
                    <textarea
                        type="text"
                        name="bestSellerSubtitulo"
                        value={
                            dataInfo
                                ? dataInfo.bestSellerSubtitulo
                                : "Cargando.."
                        }
                        onChange={handleChangeInfo}
                        disabled={edicion}
                        className={
                            !edicion
                                ? "inputBestSellerEdicion"
                                : "inputBestSeller"
                        }
                    />
                ) : (
                    <h3>{dataInfo && dataInfo.bestSellerSubtitulo}</h3>
                )}
                {isLog ? (
                    <textarea
                        type="text"
                        name="bestSellerInfo"
                        value={
                            dataInfo ? dataInfo.bestSellerInfo : "Cargando.."
                        }
                        onChange={handleChangeInfo}
                        disabled={edicion}
                        className={
                            !edicion
                                ? "inputBestSellerEdicionInfo"
                                : "inputBestSellerInfo"
                        }
                    />
                ) : (
                    <p>{dataInfo && dataInfo.bestSellerInfo}</p>
                )}
                {isLog && (
                    <button onClick={() => setEdicion(!edicion)}>Editar</button>
                )}
            </div>
        </div>
    );
};

export default BestSeller;
