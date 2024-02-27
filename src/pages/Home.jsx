import React from 'react'
import Products from '../components/products/Products'
import Card from '../components/card/Card'

function Home() {
  return (
    <div className='grid grid-cols-2'>
        <div>
            <Card/>
        </div>
        <div>
            <Products/>
        </div>
    </div>
  )
}

export default Home