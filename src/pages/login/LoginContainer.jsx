import { useContext } from "react";
import Login from "./Login";
import { LoginContext } from "../../context/LoginContext";

const LoginContainer = () => {
    const { email, setEmail, password, setPassword, handleLogin } =
        useContext(LoginContext);
    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
        />
    );
};

export default LoginContainer;
