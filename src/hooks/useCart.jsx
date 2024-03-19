import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const useCart = () => {
    
    const {cart, setCart} = useContext(CartContext)
    
    const addToCart = (item) => {
        const itemExist = cart?.findIndex(guitar => guitar.id === item.id )
        if(itemExist>=0){
          const newCart = [...cart]
          newCart[itemExist].quantity++
          setCart(newCart)
        }else{
          item.quantity = 1
          setCart([...cart, item])
        }
    }
    const removeItem = (id) => {
        const newCart = cart?.filter(item => item.id !== id)
        setCart(newCart)
    }
    const decreaseItem = (guitar) => {
        const itemSelected = cart.findIndex((item) => item.id === guitar.id);
        if (guitar.quantity > 1) {
          const newCart = structuredClone(cart);
          newCart[itemSelected].quantity--;
          setCart(newCart);
        } else if (guitar.quantity == 1) {
          removeItem(guitar.id);
        }
      };
      //forma 1
      const increaseItem = (guitar) => {
        const itemSelected = cart.findIndex((item) => item.id === guitar.id);
        const newCart = structuredClone(cart);
        newCart[itemSelected].quantity++;
        setCart(newCart);
      };

      //forma 2
    //   const increaseItem2 = (id) => {
    //     const newCart = cart.map( item => {
    //         if(item.id === id){
    //             return{
    //                 ...item,
    //                 quantity: item.quantity + 1
    //             }
    //         }
    //         return item
    //     })
    //     setCart(newCart)
    //   }
      
      const dumpCart = () => {
        setCart([])
      }
  
    return {
        addToCart,
        removeItem,
        decreaseItem,
        increaseItem,
        dumpCart
    }
}