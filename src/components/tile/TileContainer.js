import { Tile } from "./Tile";
import "./tilecontainer.scss";
import db from "../../firebase";
import { useState } from "react";

const TileContainer = (props) => {
  const [tiles, setTiles] = useState([]);

  var index = 0;

  window.addEventListener("load", () => {
    fetchData();
  });

  const fetchData = () => {
    db.collection("data")
      .orderBy("name")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setTiles((arr) => [...arr, {data: data, position: index}]);
          index = index + 1;
        });
      });
  };

  // not sure if isPinned works...
  function isPinned(name) {
    const stored = window.localStorage.getItem(name);
    if (stored != null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="tileGroup">
      {tiles
      .sort((a, b) => a.position > b.position ? 1 : -1)
      .map((item) => (
        <Tile
          headerText={props.text}
          description={item.data.description}
          color={item.data.color}
          text={item.data.name}
          link={item.data.link}
        />
      ))}
    </div>
  );
};

export { TileContainer };
