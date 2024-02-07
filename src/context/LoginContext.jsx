import { createContext, useEffect } from "react";
import { useState } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getIdToken,
    signOut,
} from "firebase/auth";
import { notifyErroneo, notifyExitoso } from "./../../utils/Alerts.js";
import { useNavigate } from "react-router-dom";
import { app } from "../firebaseconfig/FirebaseConfig.js";

export const LoginContext = createContext();

const LoginContextComponent = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLog, setIsLog] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth(app);

    useEffect(() => {
        const checkAuthStatus = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        const token = await getIdToken(user);
                        localStorage.setItem("authToken", token);

                        setIsLog(true);
                        notifyExitoso("Usuario autenticado.");
                    } catch (error) {
                        console.error("Error al obtener el token: ", error);
                    }
                } else {
                    setIsLog(false);
                    localStorage.removeItem("authToken");
                }
            });
        };

        checkAuthStatus();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            notifyExitoso("Inicio de sesión exitoso");

            setIsLog(true);
            navigate("/");
        } catch (error) {
            console.error("Error al iniciar sesión", error);
            notifyErroneo("El mail o la contraseña es incorrecta");
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            setIsLog(false);
            localStorage.removeItem("authToken");
            notifyExitoso("Se ha cerrado sesión");
            location.reload();
        } catch (error) {
            console.error("Error al cerrar sesión", error);
            notifyErroneo("Error al cerrar sesión");
        }
    };

    const data = {
        email,
        setEmail,
        password,
        setPassword,
        isLog,
        handleLogin,
        logOut,
    };

    return (
        <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
    );
};

export default LoginContextComponent;
