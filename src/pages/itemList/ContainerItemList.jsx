import { useContext, useState } from "react";
import ItemList from "./ItemList";
import { ItemContext } from "../../context/ItemContext";
import { useEffect } from "react";

const ContainerItemList = () => {
    const { traerItems, items } = useContext(ItemContext);
    useEffect(() => {
        traerItems();
    }, []);

    return <ItemList productos={items} />;
};

export default ContainerItemList;
