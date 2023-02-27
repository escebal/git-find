import React from "react";
import Favorites from "../Favorites/Favorites";
import RepoItem from "../RepoItem/RepoItem";

const BigScreen = ({ items, counter, setCounter }) => {
  return (
    <div className="bodyContainer">
      <div>
        <div className="reposContainer">
          {items?.length && (
            <>
              <RepoItem data={items[counter]} />
              {counter + 1 < items.length && (
                <RepoItem data={items[counter + 1]} />
              )}
              {counter + 2 < items.length && (
                <RepoItem data={items[counter + 2]} />
              )}
              {counter + 3 < items.length && (
                <RepoItem data={items[counter + 3]} />
              )}
            </>
          )}
        </div>
        <div className="buttonRow">
          <button
            disabled={counter === 0}
            onClick={() => setCounter(counter - 4)}
            className="backAndNext"
          >
            Anterior
          </button>
          <button
            disabled={counter >= items.length}
            onClick={() => setCounter(counter + 4)}
            className="backAndNext"
          >
            Siguiente
          </button>
        </div>
      </div>
      <Favorites />
    </div>
  );
};

export default BigScreen;
