import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./add-product.css"

function AddProduct() {
  const [productName, setProductName] = useState("this product");
  const [productPrice, setProductPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const [errorAddProduct, setErrorAddProduct] = useState("");
  const productNameHandel = (e) => setProductName(e.target.value);
  const productPriceHandel = (e) => setProductPrice(e.target.value);
  const productCostPriceHandel = (e) => setProductPrice(e.target.value);
  const productQuantityHandel = (e) => setProductPrice(e.target.value);

    let allowed = false;

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  return (
    <div className="add-product">
      <h3> {productName} was added on {currentDate} </h3>
      <form>
        <input
          onChange={productNameHandel}
          placeholder="Product name"
          type="text"
          required
        />
        <input
                  onChange={productPriceHandel}

          type="number"
          min="1"
          placeholder="Product price"
          required
        />
        <input
        onChange={productCostPriceHandel}
          type="number"
          min="1"
          placeholder="Cost price"
          required
        />
        <textarea placeholder="product description ( optionnal )" />
        <input
        onChange={productQuantityHandel}
          type="number"
          min="1"
          placeholder="Quantity"
          required
        />
        <input
          type="text"
          placeholder="kg... ( optionnal )"
        />
        <Link to="/view-sell-product">
            <button type="submmit">
                Add Product
            </button>
        </Link>
      </form>
      <p style={{ color: "red" }}>{errorAddProduct}</p>

    </div>
  );
}

export default AddProduct;
