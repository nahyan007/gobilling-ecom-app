import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";

function Cart() {
 const {productCart} =  useCart()
  return (
    <div>
      <div>
        {
          productCart.cartItems.length === 0 ? <p>No  items in cart</p>: productCart.cartItems.map((item,index) => <CartItem item={item} />)
        }
      </div>

      <div className="flex lg:justify-end my-5">
        <div className="w-1/2">
          <table className="w-full text-sm text-left rtl:text-right text-[#8A96A0]">
            <tbody>
              <tr className=" border-y ">
                <td className="px-6 py-4">Sub Total</td>
                <td className="px-6 py-4">${productCart.subTotal}</td>
              </tr>
              <tr className=" border-b ">
                <td className="px-6 py-4">Tax</td>
                <td className="px-6 py-4">${productCart.tax}</td>
              </tr>
              <tr className=" border-b ">
                <td className="px-6 py-4">Shipping</td>
                <td className="px-6 py-4">${productCart.shippingCharge}</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4">Discount on Cart</td>
                <td className="px-6 py-4">${productCart.discount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-grow justify-between mt-6 px-5">
        <p>Products count({productCart.cartItems.length})</p>
        <div className="flex justify-between items-center space-x-14">
          <p>Total</p>
          <p>{(productCart.subTotal + productCart.shippingCharge + productCart.tax)-productCart.discount < 0 ?0  : (productCart.subTotal + productCart.shippingCharge + productCart.tax)-productCart.discount}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
