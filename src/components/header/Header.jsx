import { CartList } from "../";

export const Header = ({ cart, setCart }) => {

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./public/img/carrito.png"
                alt="imagen carrito"
              />
              <CartList cart={cart} removeItem={removeItem}  setCart={setCart}/>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
