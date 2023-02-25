import React from "react";
import "./FavoriteItem.css";

function FavoriteItem() {
  return (
    <div className="favoriteItemContainer">
      <div>
        <h4 className="title">Titulo</h4>
      </div>
      <hr />
      <div>
        <p className="text">Estrellas:</p>
      </div>
    </div>
  );
}

export default FavoriteItem;
