import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NAME } from "../../shared/Constants";
import "./FavoriteItem.css";

function FavoriteItem({ name }) {
  const { getValue } = useLocalStorage(NAME, []);
  const [personalName, setPersonalName] = useState("");

  useEffect(() => {
    setPersonalName(getValue());
  }, []);

  return (
    <div className="favoriteItemContainer">
      <div className="favoriteRow">
        <p className="titleFavorites">A</p>
        <p className="titleUppercase">{personalName}</p>
        <p className="titleFavorites">le gusta:</p>
      </div>
      <div className="separator">.</div>
      <div className="favoriteNameContent">
        <p className="textFavorites">{name}</p>
      </div>
    </div>
  );
}

export default FavoriteItem;
