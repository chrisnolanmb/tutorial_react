// App.jsx
import "./App.css";
import Header from "./Header.jsx";
import Cards from "./Cards";
import Texto from "./Texto";

import { useState, useEffect } from "react";
import textos from "./textos.json";
import TodoList from "./ToDo";
//hooks
import {
  Contador,
  EjemploUseEffect,
  EjemploUseContext,
  EjemploUseReducer,
  EjemploUseCallback,
  EjemploUseMemo,
  EjemploUseRef,
  EjemploUseImperativeHandle,
} from "./Hooks";
import Whisper from "./Whisper";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(textos);
  }, []);

  const CardContainer = ({ children }) => {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <Header> </Header>
      <p className="HolaMundo"> Hola mundo</p>
      <CardContainer>
        <Cards
          title="Titulo de la tarjeta"
          text={"Este es un ejemplo de contenido del componente."}
        />
        <Cards
          title="Titulo de la tarjeta 2"
          text="Este es un ejemplo de otro contenido del componente."
        />
        <Cards title="Titulo de la tarjeta 3" text="Texto de la tarjeta 3" />
        <Cards title="Titulo de la tarjeta 4" text="Texto de la tarjeta 4" />
      </CardContainer>
      {data.map((texto) => (
        <Texto title={texto.titulo} text={texto.texto} key={texto.id} />
      ))}
      <TodoList />
      <Contador />
      <EjemploUseEffect />
      <EjemploUseContext value={"Nolan"} />
      <EjemploUseReducer />
      <EjemploUseCallback />
      <EjemploUseMemo />
      <EjemploUseRef />
      <EjemploUseImperativeHandle />

      <Whisper />
    </>
  );
}

export default App;
