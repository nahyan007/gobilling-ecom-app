import React from 'react'
import Images from '../../assets'

function Card({
    product
}) {
    
  return (
    
    <div className='border border-[#72818D]'>
        <div className='h-40'>
        <img src={product?.image} alt="Product" className='w-full h-full' />
        </div>
        <div className='text-[#637381] bg-[#F4F6F8] flex flex-col'>
        <h3 className='text-center font-medium'>${product?.price}</h3>
        <div className='w-full h-[0.7px] bg-[#E5E7E8]'></div>
        <p className='text-center'>{product?.title}</p>
        </div>
    </div>
  )
}

export default Card