import React from "react";
import "./RepoItem.css";

function RepoItem({name, description, score, goTo }) {
  return (
    <div className="repoItemContainer">
      <h4 className="title">{name}</h4>
      <hr/>
      <p className="itemText">{description}</p>
      <p className="itemText">Estrellas: {score}</p>
      <a href={goTo}>visitar repo</a>
      <button>Anadir a favoritos</button>
    </div>
  );
}

export default RepoItem;
