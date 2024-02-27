import React from 'react'
import Card from './Card'
import Images from '../../assets'
import Category from '../Category'
import Search from '../Search'


function Products() {
    
  return (
    <div className='px-4'>

    <Search/>
    
    <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
        {
            categories.map((category,index)=>(
                <Category category={category} key={index}/>
            ))
        }
    </div>


    
    {
        products.length > 0 ? <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            products.map((product,index)=>(
                <Card key={index} product={product} />
            ))
        }
    </div> : <div className='flex justify-center items-center w-full h-24 rounded bg-green-200'>No Product Found</div>
    }

    
    </div>
  )
}


const products = [
    {
        id:1,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:2,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:3,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:4,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:5,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:6,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:7,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:8,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:9,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:10,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:11,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:12,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:13,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:14,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    },
    {
        id:15,
        title:'Pure White Polo',
        price:'43',
        category:'Men Fashion',
        image:Images.product
    }
    
]

// const products = []


const categories = [
    {
        id:1,
        title:'All Categories',
    },
    {
        id:2,
        title:'Electronics',
    },
    {
        id:3,
        title:'Home',
    },
    {
        id:4,
        title:'Men Fashion',
    },
    {
        id:5,
        title:'Women Fashion',
    }
]

export default Products