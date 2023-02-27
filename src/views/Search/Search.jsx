import React, { useEffect, useState } from "react";
import "./Search.css";
import HomeBody from "../../components/HomeBody/HomeBody";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

function Search() {
  const [searchValue, setSearchValue] = useState("testing");
  const [data, setData] = useState([]);

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
    const url = `https://api.github.com/search/repositories?q=${searchValue}&sort=stars`;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => console.log("error", error)
      );
  }

  return (
    <div className="searchContainer">
      <HomeHeader
        searchRepositories={searchRepositories}
        setSearchValue={setSearchValue}
      />
      {data?.items && <HomeBody items={data.items} />}
    </div>
  );
}

export default Search;
