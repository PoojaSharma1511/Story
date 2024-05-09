import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const { Image, title, status } = product;

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(product))
  };
  

  return (
    <div className="product">
      <img src={Image} alt="" />
      <h1>{title} </h1>
      <span>
        <h3>status : {status}</h3>
        <button className="add_cart" onClick={() => handleClick()}>
          Add to cart
        </button>
      </span>
    </div>
  );
}

export default ProductCard;
