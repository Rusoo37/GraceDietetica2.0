import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import LoginContextComponent from "./context/LoginContext";
import { ToastContainer } from "react-toastify";
import ItemContextComponent from "./context/ItemContext";

function App() {
    return (
        <BrowserRouter>
            <LoginContextComponent>
                <ItemContextComponent>
                    <AppRouter />
                </ItemContextComponent>
            </LoginContextComponent>
        </BrowserRouter>
    );
}

export default App;
