import { useContext, useState } from "react";
import ItemList from "./ItemList";
import { ItemContext } from "../../context/ItemContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContainerItemList = () => {
    const { traerItems, items } = useContext(ItemContext);
    const { categoryName } = useParams();
    useEffect(() => {
        traerItems(categoryName);
    }, [categoryName]);

    return <ItemList productos={items} />;
};

export default ContainerItemList;
