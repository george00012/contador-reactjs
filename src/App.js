import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const sumar = () => setValue(value + 1);
  const borrar = () => setValue(0);
  const restar = () => setValue(value - 1);

  const valueColor = {
    color: value > 0 ? "green" : value < 0 ? "red" : "black",
  };

  return (
    <div className="content">
      <h1>Contador</h1>
      <h2 style={valueColor}>{value}</h2>
      <div className="botones">
        <button onClick={sumar}>Aumentar </button>
        <button onClick={borrar}>Resetear</button>
        <button onClick={restar} color="red">Restar </button>
      </div>
    </div>
  );
}

export default App;
