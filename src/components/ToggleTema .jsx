import React, { useState } from "react";

function ToggleTema() {
  const [isDark, setIsDark] = useState(false); 

  const toggleTheme = () => {
    setIsDark(!isDark); 
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{isDark ? "Tema Escuro" : "Tema Claro"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Alternar para {isDark ? "Claro" : "Escuro"}
      </button>
    </div>
  );
}

export default ToggleTema;
