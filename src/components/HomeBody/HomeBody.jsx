import React, { useState } from "react";
import Media from "react-media";
import LittleScreen from "../LittleScreen.jsx/LittleScreen";
import BigScreen from "../BigScreen/BigScreen";

const HomeBody = ({ items }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="homeBodyContainer">
      <Media
        queries={{
          small: "(max-width: 899px)",
          large: "(min-width: 900px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <LittleScreen
                counter={counter}
                items={items}
                setCounter={setCounter}
              />
            )}
            {matches.large && (
              <BigScreen
                counter={counter}
                items={items}
                setCounter={setCounter}
              />
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default HomeBody;
