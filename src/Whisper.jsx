import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

import enFlag from "./flags/en.png";
import esFlag from "./flags/es.png";
import frFlag from "./flags/fr.png";

function Whisper() {
  const [texto, setTexto] = useState("");
  const [textoReconocido, setTextoReconocido] = useState("");
  const [idioma, setIdioma] = useState("en-US"); // El idioma predeterminado es el inglés
  const [palabras, setPalabras] = useState([
    { palabra: "hola", encontrado: false },
    { palabra: "mundo", encontrado: false },
    { palabra: "react", encontrado: false },
    { palabra: "javascript", encontrado: false },
    { palabra: "Hi", encontrado: false },
    { palabra: "world", encontrado: false },
    { palabra: "Ship", encontrado: false },
    { palabra: "Boat", encontrado: false },
    { palabra: "Car", encontrado: false },
    { palabra: "Bike", encontrado: false },
    { palabra: "Bicycle", encontrado: false },
    { palabra: "Plane", encontrado: false },
    { palabra: "Airplane", encontrado: false },
    { palabra: "Train", encontrado: false },
    { palabra: "Bus", encontrado: false },
    { palabra: "Truck", encontrado: false },
    { palabra: "Oui", encontrado: false },
    { palabra: "Non", encontrado: false },
    { palabra: "Bonjour", encontrado: false },
    { palabra: "Au revoir", encontrado: false },
    { palabra: "Merci", encontrado: false },
    { palabra: "S'il vous plaît", encontrado: false },
  ]);

  const manejarReconocimientoDeVoz = () => {
    console.log("Hablando...");
    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = idioma; // Establecer el idioma en el idioma seleccionado
    reconocimiento.maxDuration = 10; // Establecer la duración máxima en 10 segundos
    reconocimiento.start();

    reconocimiento.onresult = (evento) => {
      const textoDeVoz = evento.results[0][0].transcript;
      setTexto(textoDeVoz);
      setTextoReconocido(textoDeVoz);

      const palabrasActualizadas = palabras.map((palabra) => {
        if (palabra.palabra.toLowerCase() === textoDeVoz.toLowerCase()) {
          return { ...palabra, encontrado: true };
        } else {
          return palabra;
        }
      });

      setPalabras(palabrasActualizadas);
    };
  };

  const manejarCambioDeIdioma = (codigoDeIdioma) => {
    console.log(codigoDeIdioma);
    setIdioma(codigoDeIdioma);
  };

  const imagenesDeBandera = {
    "en-US": enFlag,
    "es-ES": esFlag,
    "fr-FR": frFlag,
  };

  return (
    <div>
      <div
        style={{
          //alinear el h1
          marginTop: "30px",
          textAlign: "center",
          verticalAlign: "middle",
          display: "center",
        }}
      >
        <h1> Practica tu pronunciación </h1>
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px", marginTop: "30px" }}>
        <h2> Selecciona un idioma para practicar.</h2>
      </div>
      <Container
        style={{
          alignContent: "center",
          alignItems: "center",
          padding: "30px",
          margin: "30px",
          //espaacion entre elementos de los botones
          gap: "10px",
          display: "flex",
        }}
      >
        <Button
          variant={idioma === "en-US" ? "primary" : "outline-primary"}
          onClick={() => manejarCambioDeIdioma("en-US")}
          className={idioma === "en-US" ? "active" : ""}
        >
          <img
            src={imagenesDeBandera["en-US"]}
            alt="Bandera de Inglaterra"
            style={{ width: "30px", height: "20px" }} // Establecer el ancho y la altura en 30px y 20px
          />
          Inglés
        </Button>
        <Button
          variant={idioma === "es-ES" ? "primary" : "outline-primary"}
          onClick={() => manejarCambioDeIdioma("es-ES")}
          className={idioma === "es-ES" ? "active" : ""}
        >
          <img
            src={imagenesDeBandera["es-ES"]}
            alt="Bandera de España"
            style={{ width: "30px", height: "20px" }} // Establecer el ancho y la altura en 30px y 20px
          />
          Español
        </Button>
        <Button
          variant={idioma === "fr-FR" ? "primary" : "outline-primary"}
          onClick={() => manejarCambioDeIdioma("fr-FR")}
          className={idioma === "fr-FR" ? "active" : ""}
        >
          <img
            src={imagenesDeBandera["fr-FR"]}
            alt="Bandera de Francia"
            style={{ width: "30px", height: "20px" }} // Establecer el ancho y la altura en 30px y 20px
          />
          Francés
        </Button>
        <Button onClick={manejarReconocimientoDeVoz}>Hablar</Button>
      </Container>

      <h5 style={{ marginLeft: "30px" }}>
        Palabras para practicar:{" "}
        {
          //mostrar las palabras en forma de botones
          palabras.map((palabra) => (
            <Button
              variant={palabra.encontrado ? "success" : "outline-primary"}
              style={{ margin: "5px" }}
              key={palabra.palabra}
            >
              {palabra.palabra}
            </Button>
          ))
        }
      </h5>

      <h5 style={{ marginTop: "30px", marginLeft: "30px" }}>
        Texto reconocido: {textoReconocido}
      </h5>
    </div>
  );
}

export default Whisper;
