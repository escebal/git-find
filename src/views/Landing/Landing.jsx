import React, { useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NAME } from "../../shared/Constants";

function Landing() {
  const [input, setInput] = useState("");
  const { setValue } = useLocalStorage(NAME, []);

  const handleOnChange = (e) => {
    const addName = e.target.value;
    setInput(addName);
  };

  return (
    <div className="landingContainer">
      <div className="imageContainer">
        <img
          src="http://octodex.github.com/images/electrocat.png"
          className="image"
        />
      </div>
      <div className="infoContainer">
        <h1 className="header">gitfind</h1>
        <input
          className="input"
          placeholder="Ingrese su nombre"
          onChange={handleOnChange}
        />
        <div className="linkContainer">
          <Link to="/search">
            <Button onClick={() => setValue(input)} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
