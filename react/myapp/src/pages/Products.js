import React from "react";
import { NavLink } from "react-router-dom";

function Products(props) {
  return (
    <div className="products">
      <form onSubmit={props.addProduct}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => props.setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Price"
          onChange={(e) => props.setPrice(e.target.value)}
        />
        <input type="submit" value="Add Product" />
      </form>

      {props.data.map(function (item) {
        return (
          <div className="box">
            <NavLink to={"/products/" + item.id}>
              <h2> {item.name}</h2>
              <p>{item.price}</p>
            </NavLink>
            <button onClick={() => props.deleteProduct(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
