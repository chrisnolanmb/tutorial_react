//genera un componente para escribir texto formateado como articulo cientifico

import React from "react";

const Texto = ({ title, text }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Texto;
