import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0); 

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Contador</h1>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
