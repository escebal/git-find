import React, { useEffect, useState } from "react";
import RepoItem from "../../components/RepoItem/RepoItem";
import "./Search.css";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";

function Search() {
  const [searchValue, setSearchValue] = useState("testing");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const getName = () => {
    return localStorage.getItem("nombre");
  };

  useEffect(() => {
    setName(getName);
  }, []);

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Accept-Language", "En");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    searchRepositories();
  }, []);

  async function searchRepositories() {
    fetch(
      "https://api.github.com/search/repositories?q=" + searchValue,
      requestOptions
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setLoading(true);
          setData(result);
          console.log("Todos los resultados", result);
        },
        (error) => console.log("error", error)
      );
  }

  return (
    <div className="searchContainer">
      <div className="navContainer">
        <div className="navHeader">
          <h2 className="navTitle">Hola {name} Bienvenido a GITFIND</h2>
        </div>
        <div className="inputContainer">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Ingrese la palabra a buscar"
            className="searchInput"
          />
          <div className="searchIconContainer">
            <button
              onClick={() => searchRepositories(searchValue)}
              className="buttonSearch"
            >
              buscar
            </button>
          </div>
        </div>
      </div>
      <div className="bodyContainer">
        <div className="reposContainer">
          {data?.items?.length && (
            <>
              <RepoItem
                key={data?.items[counter]?.id}
                name={data?.items[counter]?.name}
                description={data?.items[counter]?.git_url}
                score={data?.items[counter]?.score}
                goTo={data?.items[counter]?.html_url}
              />
              <RepoItem
                key={data?.items[counter + 1]?.id}
                name={data?.items[counter + 1]?.name}
                description={data?.items[counter + 1]?.description}
                score={data?.items[counter + 1]?.score}
                goTo={data?.items[counter + 1]?.html_url}
              />
              <RepoItem
                key={data?.items[counter + 2]?.id}
                name={data?.items[counter + 2]?.name}
                description={data?.items[counter + 2]?.description}
                score={data?.items[counter + 2]?.score}
                goTo={data?.items[counter + 2]?.html_url}
              />
              <RepoItem
                key={data?.items[counter + 3]?.id}
                name={data?.items[counter + 3]?.name}
                description={data?.items[counter + 3]?.description}
                score={data?.items[counter + 3]?.score}
                goTo={data?.items[counter + 3]?.html_url}
              />
            </>
          )}
          <button onClick={() => setCounter(counter + 4)}>Anterior</button>
          <button onClick={() => setCounter(counter + 4)}>Siguiente</button>
        </div>

        <div className="favoritesContainer">
          <div className="favoriteHeader">
            <h3 className="favoriteTitle">Favoritos</h3>
          </div>
          <div className="favItemContainer">
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
