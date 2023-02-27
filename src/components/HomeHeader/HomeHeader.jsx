import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets/icons/Search";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NAME } from "../../shared/Constants";

const HomeHeader = ({ setSearchValue, searchRepositories }) => {
  const { getValue } = useLocalStorage(NAME, []);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(getValue());
  }, []);

  return (
    <div className="navContainer">
      <div className="navHeader">
        <p className="navTitle">Hola</p>
        <p className="navName">{name}</p>
        <p className="navExpression">!!</p>
        <p className="navTitle">Bienvenido a </p>
        <p className="navName">GITFIND</p>
      </div>
      <div className="inputContainer">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Ingrese la palabra a buscar"
          className="searchInput"
        />
        <div className="searchIconContainer">
          <button
            data-testid="search-button"
            onClick={searchRepositories}
            className="buttonSearch"
          >
            <SearchIcon size="30pt" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
