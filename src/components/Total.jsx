import React, { useContext } from 'react'
import CartContext from '../utils/CartContext'

const Total = () => {
    const {total} = useContext(CartContext)
  return (
    <>
        <p>{total} </p>
       
    </>
  )
}

export default Total