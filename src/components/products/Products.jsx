import React from 'react'
import Card from './Card'
import Images from '../../assets'
import Category from '../Category'
import Search from '../Search'


function Products() {
    
  return (
    <div className='px-4'>

    <Search/>
    
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
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
        title:'Blue T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.blueTShirt
    },
    {
        id:2,
        title:'Grey full T-Shirt',
        price:'50',
        category:'Men Fashion',
        image:Images.greyLongSleeveTShirt
    },
    {
        id:3,
        title:'Sky Blue T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.skyBlueTShirt
    },
    {
        id:4,
        title:'Pink T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.pinkTShirt
    },
    {
        id:5,
        title:'White T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.whiteTShirt
    },
    {
        id:6,
        title:'Gray T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.grayTShirt
    },
    {
        id:7,
        title:'Olive Green T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.oliveGreenTShirt
    },
    {
        id:8,
        title:'Green T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.greenTShirt
    },
    {
        id:9,
        title:'Smart Watch',
        price:'109',
        category:'Electronic',
        image:Images.product
    },
    {
        id:10,
        title:'Black T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.blackTShirt
    },
    {
        id:11,
        title:'Red T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.redTShirt
    },
    {
        id:12,
        title:'Blue T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.blueTShirt
    },
    {
        id:13,
        title:'Women Red T-Shirt',
        price:'43',
        category:'Women Fashion',
        image:Images.womenRedTShirt
    },
    {
        id:14,
        title:'Light Green T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.lightGreenTShirt
    },
    {
        id:15,
        title:'Women Black T-Shirt',
        price:'43',
        category:'Men Fashion',
        image:Images.womenBlackTShirt
    }
    
]




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
        id:4,
        title:'Men Fashion',
    },
    {
        id:5,
        title:'Women Fashion',
    }
]

export default Products