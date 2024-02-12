import { useContext } from "react";
import Login from "./Login";
import { LoginContext } from "../../context/LoginContext";

const LoginContainer = () => {
    const {
        email,
        setEmail,
        password,
        recordar,
        setRecordar,
        setPassword,
        handleLogin,
    } = useContext(LoginContext);
    const message = "Quiero recuperar mi contraseña";
    const recuperarPassword = () => {
        const whatsappLink = `https://wa.me/226248697?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappLink, "_blank");
    };
    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            recordar={recordar}
            setRecordar={setRecordar}
            handleLogin={handleLogin}
            recuperarPassword={recuperarPassword}
        />
    );
};

export default LoginContainer;
