import React, { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  let [products, setProducts] = useState([
    {
      id: 1,
      name: "Lab",
      price: "8000 LE",
    },
    {
      id: 2,
      name: "Keyboard",
      price: "500 LE",
    },
    {
      id: 3,
      name: "Mouse",
      price: "200 LE",
    },
  ]);

  let [name, setName] = useState("");
  let [price, setPrice] = useState("");

  let deleteProduct = function (id) {
    setProducts(products.filter((item) => item.id != id));
  };

  let addProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      { id: products.length + 1, name: name, price: price },
    ]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              data={products}
              deleteProduct={deleteProduct}
              setName={setName}
              setPrice={setPrice}
              addProduct={addProduct}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products/:id"
          element={<ProductDetails data={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
