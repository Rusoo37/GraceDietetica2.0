import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Pagination } from "@mui/material";
import { ItemContext } from "../../context/ItemContext.jsx";
import ItemDashboard from "../../common/itemDashboard/ItemDashboard.jsx";
import Titulos from "../../common/titulos/Titulos.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToUp from "../../common/scrollUp/ScrollToUp.jsx";

const Dashboard = ({
    items,
    productsPerPage,
    totalProducts,
    paginate,
    currentPage,
}) => {
    const pageCount = Math.ceil(totalProducts / productsPerPage);
    const { eliminarPropiedad } = useContext(ItemContext);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));
    return (
        <div className="container-dashboard">
            <Titulos titulo={"Propiedades"} />
            <Link to="/agregar" className="btn-agregar-propiedad">
                Agregar
            </Link>
            <TableContainer sx={{ minHeight: "70vh" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nombre</StyledTableCell>
                            <StyledTableCell align="left">
                                Cantidad
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Categoria
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Descripción
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Precio
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Nuevo
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Destacado
                            </StyledTableCell>
                            <StyledTableCell>Editar</StyledTableCell>
                            <StyledTableCell>Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ maxHeight: "15rem" }}>
                        {items.length > 0 &&
                            items.map((item) => (
                                <ItemDashboard
                                    item={item}
                                    key={item.id}
                                    eliminarPropiedad={eliminarPropiedad}
                                />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="paginacion">
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={(event, value) => paginate(value)}
                />
            </div>
            <ToastContainer />
            <ScrollToUp />
        </div>
    );
};

export default Dashboard;
