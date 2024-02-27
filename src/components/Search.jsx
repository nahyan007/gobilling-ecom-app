import React from 'react'
import { IoMdSearch,IoIosBarcode  } from "react-icons/io";


const Search = () => {
  return (
    <div className='flex gap-4 items-center px-3 bg-[#F9FAFB]'>
        <IoMdSearch size={35} />
        <input type="text" name="search" className='bg-transparent w-full h-10 rounded focus:border-none outline-none p-3 my-2' placeholder='Search products..' />
        <IoIosBarcode size={35}  />
    </div>
  )
}

export default Search