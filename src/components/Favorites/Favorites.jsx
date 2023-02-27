import React from "react";
import useFavorites from "../../hooks/useFavorites";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favoritesContainer">
      <div className="favoriteHeader">
        <h3 className="favoriteHeaderTitle">Favoritos</h3>
      </div>
      <div className="scrolling">
        <div className="favItemContainer">
          {favorites.map((repo) => (
            <FavoriteItem key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
