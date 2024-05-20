import React, { useState } from 'react'
import MUITest from './MUITest'
import NavBar from './NavBar'
import CartContext from '../utils/CartContext'

const MainApp = () => {
 let [total,setTotal] = useState(0)
 let [cartValue,setCartValue] = useState(0)
 const setTotalPrice=(currentPrice)=>{
    setTotal(currentPrice)
 }
 const updateCartVal=(value)=>{
  setCartValue(value)
 }
  return (
    <CartContext.Provider value={{total,setTotalPrice,cartValue,updateCartVal}}>
        
        <NavBar />
        <MUITest />
    </CartContext.Provider>
  )
}

export default MainApp