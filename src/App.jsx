import { useState } from "react";
import { Footer, Guitar, Header } from "./components";
import { db } from './db'
import { useEffect } from "react";

function App() {

  const [guitars, setGuitars] = useState([])
  
  useEffect(()=>{
    setGuitars(db)
  },[])

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            guitars.map((guitar)=>(
              <Guitar
                key={guitar.id} 
                model={guitar.name} 
                description={guitar.description}
                price={guitar.price}
                image={guitar.image}/>

            ))
          }

        </div>
      </main>

    <Footer />
    </>
  );
}

export default App;
