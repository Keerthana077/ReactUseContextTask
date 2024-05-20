import React, { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartContext from '../utils/CartContext';
import Total from './Total';

export const Cart = ({price}) => {
  let [cartVal,setCartVal] = useState(0)
  let {total,setTotalPrice} = useContext(CartContext)
  return (
    <>
      <div className="cart">
            <h6 className="cartItem" title='Add Item' onClick={()=>{
              setTotalPrice(total +price)
              setCartVal(cartVal+1)
              console.log("after +",total)
              }}><AddIcon/></h6>
            <h6 className="cartValue">{cartVal}</h6>
            <h6 className="cartItem"  title='Remove Item' onClick={()=>{
              if(cartVal>0){
                  setTotalPrice(total-price)
                  setCartVal(cartVal-1)
                  console.log("after -",total)
              }
              // cartVal>0?setCartVal(cartVal-1):setCartVal(0)
              }}><RemoveIcon/></h6>
        </div>
    
    </>
        
  )
}
