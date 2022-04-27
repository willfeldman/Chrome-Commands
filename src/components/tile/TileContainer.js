import { Tile } from "./Tile";
import "./tilecontainer.scss";
import { Fragment } from "react";

const TileContainer = (props) => {
  function checkPinned(name) {
    return (localStorage.getItem(name) === 'true') || false;
  }

  const allTiles = [];

  for (var i = 0; i < props.tiles.length; i++) {
    const tile = props.tiles[i];
    if (checkPinned(tile.name)) {
      allTiles.unshift(tile);
    } else {
      allTiles.push(tile);
    }
  }

  return (
    <div className="tileGroup">
      <span>
        {allTiles.map((item) => (
          <Fragment key={item.id}>
            <Tile
              headerText={props.text}
              description={item.description}
              color="#fe4e40"
              text={item.name}
              link={item.link}
              pinned={checkPinned(item.name)}
            />
          </Fragment>
        ))}
      </span>
    </div>
  );
};

export { TileContainer };
