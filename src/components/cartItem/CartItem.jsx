export const CartItem = ({ guitar, removeItem, decreaseItem }) => {
  return (
    <tr key={guitar.id}>
      <td>
        <img
          className="img-fluid"
          src={`./public/img/${guitar.image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{guitar.name}</td>
      <td className="fw-bold">${guitar.price}</td>
      <td className="flex align-items-start gap-4">
        <button type="button" className="btn btn-dark" onClick={()=>decreaseItem(guitar)}>
          -
        </button>
        {guitar.quantity}
        <button type="button" className="btn btn-dark">
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
