import React from "react";
import { FaRegEdit, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity,decreaseQuantity,removeProductFromCart } = useCart();
  return (
    <div className="flex items-center gap-3 p-2 text-[#84919C]">
      <button>
        <FaRegEdit size={24} />
      </button>
      <div className="flex gap-3 w-full justify-between border p-2">
        <p>{item?.title}</p>
        <p>${item?.price}</p>
        <div className="flex gap-4 items-center">
          <button onClick={()=>increaseQuantity(item.id)}>
            <FaPlusCircle color={"#84919C"} />
          </button>
          <input
          disabled
            type="text"
            value={item?.quantity}
            className="w-8 text-center"
          />
          <button onClick={()=>decreaseQuantity(item.id)} disabled={item.quantity===1}>
            <FaMinusCircle color={"#84919C"} />
          </button>
        </div>
        <p>${item?.totalPrice}</p>
      </div>
      <button onClick={() => removeProductFromCart(item.id)}>
        <RiDeleteBinLine size={24} color={"#E55C57"} />
      </button>
    </div>
  );
}
