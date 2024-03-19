import { useCart } from "../../hooks/useCart";
import Proptypes from 'prop-types'

export const CartItem = ({ guitar }) => {
    CartItem.propTypes = {
        guitar: Proptypes.object 
    }

    const {removeItem, decreaseItem, increaseItem} = useCart()
    
  return (
    <tr key={guitar.id} className="">
      <td>
        <img
          className="img-fluid"
          src={`/img/${guitar.image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{guitar.name}</td>
      <td className="fw-bold">${guitar.price}</td>
      <td className="flex align-items-start gap-4 h-24">
        <button type="button" className="btn btn-dark" onClick={()=>decreaseItem(guitar)}>
          -
        </button>
        {guitar.quantity}
        <button type="button" className="btn btn-dark" onClick={()=>increaseItem(guitar)}>
          +
        </button>
      </td>
      <td>
        <button className="btn btn-danger" type="button" onClick={()=>removeItem(guitar.id)}>
          X
        </button>
      </td>
    </tr>
  );
};
