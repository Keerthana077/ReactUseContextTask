import React, { useState } from 'react'
import MUITest from './MUITest'
import NavBar from './NavBar'
import { Cart } from './Cart'
import Total from './Total'
import CartContext from '../utils/CartContext'

const MainApp = () => {
 let [total,setTotal] = useState(1000)
 const setTotalPrice=(currentPrice)=>{
    setTotal(currentPrice)
 }
  return (
    <CartContext.Provider value={[total,setTotalPrice]}>
        
        <NavBar />
        <MUITest />
    </CartContext.Provider>
  )
}

export default MainApp