import React from 'react'
import Products from '../components/products/Products'
import Cart from '../components/cart/Cart'
import { useCart } from '../context/CartContext'

function Home() {
  const {productCart}  = useCart();
  console.log(productCart);
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div>
            <Cart/>
        </div>
        <div>
            <Products/>
        </div>
    </div>
  )
}

export default Home