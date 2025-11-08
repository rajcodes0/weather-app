// src/Form/Form.jsx
import React, { useState } from "react";
import "./Form.css";

function Form({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return; 

    onSearch(city); // send city to parent
    setCity(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter City or Country"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
