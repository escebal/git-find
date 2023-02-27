import React, { useEffect, useState } from "react";
import StarIcon from "../../assets/icons/Star";
import useFavorites from "../../hooks/useFavorites";
import "./RepoItem.css";
import starYellow from "../../assets/images/starYellow.png";

function RepoItem({ data }) {
  const { name, description, stargazers_count, html_url, id } = data;
  const { favorites, addToFavorites, deleteFromFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.some((repo) => repo.id === id)) {
      if (!isFavorite) {
        setIsFavorite(true);
      }
    } else if (isFavorite) {
      setIsFavorite(false);
    }
  }, [favorites, data]);

  const handleOnAddToFavorites = () => {
    if (isFavorite) {
      deleteFromFavorites(id);
      setIsFavorite(false);
    } else {
      addToFavorites(data);
      setIsFavorite(true);
    }
  };

  const label = isFavorite ? (
    <div>
      <img src={starYellow} className="imageStar" />
    </div>
  ) : (
    <StarIcon size={"30pt"} />
  );

  return (
    <div className="repoItemContainer">
      <div>
        <div className="titleContainer">
          <h2 className="title">{name}</h2>
        </div>
        <div className="separator"></div>

        <div className="column">
          <p className="itemText">{description}</p>
          <p className="itemText">Estrellas: {stargazers_count}</p>
        </div>
      </div>
      <div className="row">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="linkToRepo"
        >
          visitar repo
        </a>
        <button onClick={handleOnAddToFavorites} className="favoriteButton">
          {label}
        </button>
      </div>
    </div>
  );
}

export default RepoItem;
