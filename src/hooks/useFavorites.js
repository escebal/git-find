import { useEffect, useState } from "react";
import { FAVORITES, STORAGE_HAS_CHANGED } from "../shared/Constants";
import { useLocalStorage } from "./useLocalStorage";

const useFavorites = () => {
  const { getValue, setValue } = useLocalStorage(FAVORITES, []);
  const [favorites, setFavorites] = useState([]);

  const handleOnNewFavorites = () => {
    var newFavorites = getValue();
    setFavorites(newFavorites);
  };

  useEffect(() => {
    handleOnNewFavorites();

    const handleStorage = () => {
      handleOnNewFavorites();
    };

    window.addEventListener(STORAGE_HAS_CHANGED, handleStorage);
    return () => window.removeEventListener(STORAGE_HAS_CHANGED, handleStorage);
  }, []);

  const addToFavorites = (data) => {
    const globalFavorites = getValue();

    if (!globalFavorites.some((repo) => repo.id === data.id)) {
      globalFavorites.push(data);

      setValue(globalFavorites);
    }
  };

  const deleteFromFavorites = (id) => {
    const globalFavorites = getValue();

    if (globalFavorites.some((repo) => repo.id === id)) {
      setValue(globalFavorites.filter((repo) => repo.id !== id));
    }
  };

  return { favorites, addToFavorites, deleteFromFavorites };
};

export default useFavorites;
