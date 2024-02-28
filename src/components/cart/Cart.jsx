import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import { FiPlusCircle } from "react-icons/fi";
import { RxAvatar, RxCountdownTimer  } from "react-icons/rx";
import Navbar from "./Navbar";
import { SlNote } from "react-icons/sl";
import { MdOutlineLocalShipping } from "react-icons/md";


function Cart() {
 const {productCart} =  useCart()
  return (
    <div className="ml-8">
      <div className="flex justify-around   items-center w-full h-14">
      {
            navItems.map((navItem,index)=>(
                <Navbar navItem={navItem} key={index}/>
            ))
        }
          
      </div>
      <div className='flex justify-around   items-center w-full h-14 rounded bg-[#E1EAF9] text-[#3674D9] '>
        <div className="flex items-center ">
        <div>
        <RxAvatar />
        </div>
        <h3>Steve Jobs</h3>
        </div>
        <div className="">
        <FiPlusCircle />
        </div>
      </div>
      <div>
        {
          productCart.cartItems.length === 0 ? <p className='flex justify-center items-center w-full h-10 rounded bg-green-200'>No  items in cart</p>: productCart.cartItems.map((item,index) => <CartItem item={item} />)
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
              <tr className="bg-[#E1EAF9] text-[#3674D9]">
                <td className="px-6 py-4 ">Discount on Cart</td>
                <td className="px-6 py-4">${productCart.discount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-grow justify-between mt-6 px-5 py-3 bg-[#E1EAF9] text-[#3674D9]">
        <p>Products count({productCart.cartItems.length})</p>
        <div className="flex justify-between items-center space-x-14">
          <p>Total</p>
          <p>{(productCart.subTotal + productCart.shippingCharge + productCart.tax)-productCart.discount < 0 ?0  : (productCart.subTotal + productCart.shippingCharge + productCart.tax)-productCart.discount}</p>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  {
    id:1,
    title: 'Note',
    icon:<SlNote />
  },
  {
    id:2,
    title: 'Shipping',
    icon:<MdOutlineLocalShipping />
  },
  {
    id:1,
    title: 'Hold Orders',
    icon:<RxCountdownTimer />
  },
  {
    id:1,
    title: 'New Item',
    icon:<FiPlusCircle />
  },
]

export default Cart;
