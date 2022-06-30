import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const params = useParams();

  let product = props.data.find(function (item) {
    return item.id == params.id;
  });

  return (
    <h1>
      {product.name} - {product.price}
    </h1>
  );
}

export default ProductDetails;
