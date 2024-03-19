import { useContext, useMemo } from 'react'
import { CartItem } from "../";
import { CartContext } from '../../context/CartContext';
import { useCart } from '../../hooks/useCart';

export const CartList = () => {

  const {cart} = useContext(CartContext)
  const {dumpCart} = useCart()

  //state derivado
  const isEmpty = useMemo( () => cart.length === 0, [cart]); 

  //array.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial)
  const cartTotal = useMemo(()=> cart.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  ),[cart]);
  
  return (
    <div id="carrito" className="bg-white p-3">
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
          {!isEmpty ? (
            cart?.map((guitar) => (
              <CartItem
                key={guitar.id}
                guitar={guitar}
              />
            ))
          ) : (
            <tr className="text-center">
              <td colSpan={5}>El carrito esta vacío</td>
            </tr>
          )}
        </tbody>
      </table>
      {!isEmpty ? (
        <>
          <p className="text-end">
            Total pagar: <span className="fw-bold">${cartTotal}</span>
          </p>
          <button className="btn btn-dark w-100 mt-3 p-2" onClick={dumpCart}>
            Vaciar Carrito
          </button>
        </>
      ) : null}
    </div>
  );
};
