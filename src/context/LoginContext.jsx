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
import { app, db } from "../firebaseconfig/FirebaseConfig.js";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const LoginContext = createContext();

const LoginContextComponent = ({ children }) => {
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [password, setPassword] = useState(
        localStorage.getItem("password") || ""
    );
    const [recordar, setRecordar] = useState(false);
    const [isLog, setIsLog] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [dataInfo, setDataInfo] = useState({});
    const coleccionInfoDb = import.meta.env.VITE_COLECCION_INFORMACION;
    const idInfoDoc = import.meta.env.VITE_ID_DOC_INFORMACION;

    /* INFORMACION */

    useEffect(() => {
        let infoColeccion = collection(db, coleccionInfoDb);

        getDocs(infoColeccion)
            .then((res) => {
                let newArr = res.docs.map((inf) => ({
                    ...inf.data(),
                    id: inf.id,
                }));
                setDataInfo(newArr[0]);
            })
            .catch((error) => {
                console.error("Error al cargar la información:", error);
            });
    }, []);

    const handleChangeInfo = (e) => {
        const { name, value } = e.target;
        setDataInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const guardarCambios = () => {
        const infoDocRef = doc(db, coleccionInfoDb, idInfoDoc);
        // Utiliza setDoc para sobrescribir la información en el documento
        updateDoc(infoDocRef, dataInfo)
            .then(() => {
                console.log("Documento actualizado exitosamente");
                notifyExitoso("Cambios actualizados correctamente");
                // Puedes realizar más acciones después de que el documento se haya actualizado con éxito.
            })
            .catch((error) => {
                console.error("Error al actualizar el documento:", error);
                notifyErroneo("Error al actualizar los datos");
                // Manejar el error si la operación falla.
            });
    };

    /* LOGIN */

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
            if (recordar) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            }
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
        recordar,
        setRecordar,
        handleLogin,
        logOut,
        dataInfo,
        handleChangeInfo,
        guardarCambios,
    };

    return (
        <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
    );
};

export default LoginContextComponent;
