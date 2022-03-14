import { Tile } from "./Tile";
import "./tilecontainer.scss";
import db from "../../firebase";
import { useState } from "react";

const TileContainer = (props) => {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("data")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  return (
    <div className="tileGroup">
      {info.map((data) => (
        <Tile
          headerText={props.text}
          description={data.description}
          color={data.color}
          text={data.name}
          link={data.link}
        />
      ))}
    </div>
  );
};

export { TileContainer };
