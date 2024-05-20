import React, { useState } from 'react'
import { Products } from '../utils/Products'
import ProductCard from './ProductCard'

const MUITest = () => {
  const [product,setProduct] = useState(Products)
  return (
   <>
    {/* <div className="cardstyle"> */}
      {/* {product.map(()=>{<ProductCard/>})} */}
    {/* </div> */}
    
    {/* <h3>Hello</h3> */}
    <div className="cardstyle">
      {product.map((e)=><ProductCard title={e.title} price={e.price} rating={e.rating} category={e.category} brand={e.brand} desc={e.description} />)}
    </div>
   </>
  )
}

export default MUITest