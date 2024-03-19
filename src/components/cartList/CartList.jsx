import { CartItem } from "../"
import Proptypes from 'prop-types'

export const CartList = ({cart, removeItem, setCart}) => {
    CartList.propTypes = {
        cart: Proptypes.array,
        removeItem: Proptypes.func,
        setCart: Proptypes.func,
    }
    const decreaseItem = (item) => {
        const itemSelected = cart.findIndex(item => item.id === item.id)
        if(item.quantity > 1){
            const newCart = structuredClone(cart)
            newCart[itemSelected].quantity--
            setCart(newCart)
        }else if(item.quantity==1){
            removeItem(item.id)
        }
    }
    //array.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial)
    const total = cart.reduce((acc, {quantity, price}) => acc + (quantity * price), 0)

  return (
    <div id="carrito" className="bg-white p-3">
        <p className="text-center">El carrito esta vacio</p>
        <table className="w-100 table">
            <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                cart.length > 0 
                    ?    cart.map(guitar=>(
                            <CartItem key={guitar.id} guitar={guitar} removeItem={removeItem} decreaseItem={decreaseItem}/>
                        ))
                    : <tr className="text-center"><td colSpan={5}>No tienes items en el carrito</td></tr>
            }
            </tbody>
        </table>
        <p className="text-end">
            Total pagar: <span className="fw-bold">${total}</span>
        </p>
        <button className="btn btn-dark w-100 mt-3 p-2">
            Vaciar Carrito
        </button>
    </div>
  )
}
