import { CartItem } from "../"


export const CartList = ({cart, removeItem}) => {
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
                cart.map(guitar=>(
                    <CartItem key={guitar.id} guitar={guitar} removeItem={removeItem}/>
                ))
            }
            </tbody>
        </table>
        <p className="text-end">
            Total pagar: <span className="fw-bold">$899</span>
        </p>
        <button className="btn btn-dark w-100 mt-3 p-2">
            Vaciar Carrito
        </button>
    </div>
  )
}
