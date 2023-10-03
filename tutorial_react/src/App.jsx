// App.jsx
import "./App.css";
import Header from "./Header.jsx";
import Cards from "./Cards";
import Texto from "./Texto";

import { useState, useEffect } from "react";
import textos from "./textos.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(textos);
  }, []);

  return (
    <>
      <Header> </Header>
      <p className="HolaMundo"> Hola mundo</p>
      <Cards title="Titulo de la tarjeta"></Cards>
      <Cards title="Titulo de la tarjeta 2" text="DSFSDF"></Cards>
      {data.map((texto) => (
        <Texto title={texto.titulo} text={texto.texto} key={texto.id} />
      ))}
    </>
  );
}

export default App;
