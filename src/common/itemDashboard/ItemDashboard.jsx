import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDashboard = ({ item, eliminarProducto }) => {
    const handleDelete = () => {
        Swal.fire({
            title: "¿Estás seguro de eliminar esta propiedad?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(item.id);
            }
        });
    };
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
        <StyledTableRow key={item.id}>
            <StyledTableCell align="left">{item.nombre}</StyledTableCell>
            <StyledTableCell align="left">{item.cantidad}</StyledTableCell>
            <StyledTableCell align="left">{item.categoria}</StyledTableCell>
            <StyledTableCell align="left">{item.descripcion}</StyledTableCell>
            <StyledTableCell align="left">${item.precio}</StyledTableCell>
            <StyledTableCell align="left">
                {item.nuevo ? "Si" : "No"}
            </StyledTableCell>
            <StyledTableCell align="left">
                {item.destacado ? "Si" : "No"}
            </StyledTableCell>
            <StyledTableCell>
                <Link
                    to={`/editar/${item.id}`}
                    style={{
                        color: "black",
                        cursor: "pointer",
                        textDecoration: "none",
                    }}
                >
                    Editar
                </Link>
            </StyledTableCell>
            <StyledTableCell sx={{ cursor: "pointer" }} onClick={handleDelete}>
                Eliminar
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default ItemDashboard;
