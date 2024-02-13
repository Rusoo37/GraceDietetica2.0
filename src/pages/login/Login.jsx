import { Link } from "react-router-dom";
import "./Login.css";
import Titulos from "../../common/titulos/Titulos";
import logo from "./../../img/logoOscuro.webp";
import { ToastContainer } from "react-toastify";

const Login = ({
    email,
    setEmail,
    password,
    setPassword,
    recordar,
    setRecordar,
    handleLogin,
    recuperarPassword,
}) => {
    return (
        <div className="container-login">
            <Titulos titulo={"Login"} />
            <div className="login">
                <form onSubmit={handleLogin} className="form-login">
                    <img src={logo} alt="logo grace dietetica frutos secos" />
                    <h1>Login</h1>
                    <div className="separador-login"></div>
                    <input
                        type="text"
                        placeholder="Ingrese el mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="datos-login">
                        <div>
                            <input
                                type="checkbox"
                                id="recordarContraseña"
                                name="recordarContraseña"
                                value={recordar}
                                onChange={(e) => setRecordar(e.target.value)}
                            />
                            <label htmlFor="recordarContraseña">
                                Recordarme
                            </label>
                        </div>
                        <label
                            style={{ cursor: "pointer" }}
                            onClick={recuperarPassword}
                        >
                            Recuperar Contraseña
                        </label>
                    </div>

                    <button type="submit" className="boton">
                        Ingresar
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
