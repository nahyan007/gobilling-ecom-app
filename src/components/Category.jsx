import React from 'react'

function Category({category}) {
  return (
    <button className=' py-2 px-5 text-black font-medium border border-black rounded text-xs'>{category.title}</button>

  )
}

export default Category