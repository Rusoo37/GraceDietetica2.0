import { Route, Routes } from "react-router-dom";
import LayOut from "../layout/LayOut";
import NotFound from "../pages/notFound/NotFound";
import { routes } from "./menuRoutes.js";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<LayOut />}>
                {routes.map(({ id, path, Element }) => (
                    <Route key={id} path={path} element={<Element />} />
                ))}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
