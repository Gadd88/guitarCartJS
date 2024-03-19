import { useState } from "react";
import { Footer, Guitar, Header } from "./components";
import { db } from './db'
import { useEffect } from "react";

function App() {

  const [guitars, setGuitars] = useState([])
  const [cart, setCart] = useState([])
  
  useEffect(()=>{
    setGuitars(db)
  },[])

  const addToCart = (item) => {
    const itemExist = cart.findIndex(guitar => guitar.id === item.id )
    if(itemExist>=0){
      const newCart = [...cart]
      newCart[itemExist].quantity++
      setCart(newCart)
    }else{
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  return (
    <>
      <Header cart={cart} setCart={setCart}/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            guitars.map((guitar)=>(
              <Guitar
                key={guitar.id} 
                guitar={guitar}
                addToCart={addToCart}/>

            ))
          }

        </div>
      </main>

    <Footer />
    </>
  );
}

export default App;
