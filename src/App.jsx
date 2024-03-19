import { useContext } from "react";
import { Footer, Guitar, Header } from "./components";
import { CartContext } from "./context/CartContext";

function App() {
  const { guitars } = useContext(CartContext)
  
  return (
    <>
      <Header/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            guitars?.map((guitar)=>(
              <Guitar
                key={guitar.id} 
                guitar={guitar}/>

            ))
          }

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
