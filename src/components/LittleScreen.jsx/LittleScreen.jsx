import React, { useRef, useState } from "react";
import { REPOSITORIES } from "../../shared/Constants";
import Favorites from "../Favorites/Favorites";
import Repositories from "../Repositories/Repositories";
import SegmentedControl from "../SegmentedControl/SegmentedControl";

const LittleScreen = ({ items, counter, setCounter }) => {
  const [selected, setSelected] = useState("repos");
  const segments = [
    {
      label: "Repositorios",
      value: REPOSITORIES,
      ref: useRef(),
    },
    {
      label: "Favoritos",
      value: "favorites",
      ref: useRef(),
    },
  ];

  return (
    <div className="littleScreen_container">
      <SegmentedControl
        name="group-1"
        callback={(val) => setSelected(val)}
        controlRef={useRef()}
        segments={segments}
      />
      {selected === REPOSITORIES ? (
        <Repositories counter={counter} setCounter={setCounter} items={items} />
      ) : (
        <Favorites />
      )}
    </div>
  );
};

export default LittleScreen;
