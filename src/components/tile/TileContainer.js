import { Tile } from "./Tile";
import "./tilecontainer.scss";
import db from "../../firebase";
import { useState } from "react";

const TileContainer = (props) => {
  const [tiles, setTiles] = useState([]);

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
          setTiles((arr) => [...arr, data]);
        });
      });
  };

  return (
    <div className="tileGroup">
      {tiles
      .map((item) => (
        <Tile
          headerText={props.text}
          description={item.description}
          color={item.color}
          text={item.name}
          link={item.link}
        />
      ))}
    </div>
  );
};

export { TileContainer };
