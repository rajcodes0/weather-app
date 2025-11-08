import React, { useState } from "react";
import Form from "./Form/Form";
import Info from "./Info/Info";
import "./App.css";

function App() {
  
  const [city, setCity] = useState("");

  return (
    <div className="container">
      <h1>Weather Checker</h1>

    
      <Form onSearch={(newCity) => setCity(newCity)} />
     
      <Info city={city} />
    </div>
  );
}

export default App;
