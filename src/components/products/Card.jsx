import React from "react";
import { useCart } from "../../context/CartContext";

function Card({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="w-full max-w-sm  rounded  shadow">
      <div className="h-40">
        <img src={product?.image} alt="Product" className="w-full h-full" />
      </div>
      <div>
        <h3 className=" text-center tracking-tight ">${product?.price}</h3>
        <div className="w-full h-[0.7px] bg-[#E5E7E8]"></div>
        <h3 className=" text-center tracking-tight ">{product?.title}</h3>
        <div className="w-full h-[0.7px] bg-[#E5E7E8]"></div>
      </div>
      <button
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="text-white bg-gray-700 hover:bg-gray-800 font-medium text-sm w-full   px-5 py-2.5 "
        >
          Add to Cart
        </button>
    </div>
  );
}

export default Card;
