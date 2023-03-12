import React from "react";
import { useParams } from "react-router-dom";

import { products } from "../../productsMocks";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productsSelected = products.find(
    (element) => element.id === Number(id)
  );

  const onAdd = (cantidad) => {
    console.log(`Tienes ${cantidad} productos `);
  };

  return (
    <div>
      <h1>{productsSelected.title}</h1>
      <img src={productsSelected.img} alt="" />
      <ItemCount stock={productsSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
