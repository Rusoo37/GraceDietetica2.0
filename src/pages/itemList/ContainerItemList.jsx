import { useState } from "react";
import ItemList from "./ItemList";

const ContainerItemList = () => {
    const [productos, setProductos] = useState([1, 2, 3, 4]);
    return <ItemList productos={productos} />;
};

export default ContainerItemList;
