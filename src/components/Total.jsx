import React, { useContext } from 'react'
import CartContext from '../utils/CartContext'

const Total = () => {
    const data = useContext(CartContext)
  return (
    <>
        <p>{data} </p>
       
    </>
  )
}

export default Total