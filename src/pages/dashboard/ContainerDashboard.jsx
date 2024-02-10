import { useContext, useState } from "react";
import Dashboard from "./Dashboard";
import { ItemContext } from "../../context/ItemContext";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

const ContainerDashboard = () => {
    const { items } = useContext(ItemContext);
    const { isLog } = useContext(LoginContext);

    // Lógica para paginación
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = items.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // Cambia la página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return isLog ? (
        <Dashboard
            items={items}
            productsPerPage={productsPerPage}
            totalProducts={items.length}
            paginate={paginate}
            currentPage={currentPage}
        />
    ) : (
        <Link to="/">Inicie Sesión</Link>
    );
};

export default ContainerDashboard;
