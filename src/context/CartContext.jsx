import { createContext, useState, useEffect } from 'react'
import { db } from '../db'
import Proptypes from 'prop-types'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  CartProvider.propTypes = {
    children: Proptypes.func
  }
    const initialCart = JSON.parse(localStorage.getItem('cart')) || []
    const [guitars, setGuitars] = useState([])

    const [cart, setCart] = useState(initialCart)
    useEffect(()=>{
      setGuitars(db)
    },[])

    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

  return (
    <CartContext.Provider value={{
        guitars,
        cart,
        setCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
