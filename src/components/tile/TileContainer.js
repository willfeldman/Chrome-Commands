import { Tile } from "./Tile";
import "./tilecontainer.scss";
import { Fragment } from "react";

const TileContainer = (props) => {
  function checkPinned(name) {
    return (localStorage.getItem(name) === 'true') || false;
  }

  const unpinnedTiles = [];
  const pinnedTiles = [];

  for (var i = 0; i < props.tiles.length; i++) {
    const tile = props.tiles[i];
    if (checkPinned(tile.name)) {
      pinnedTiles.push(tile);
    } else {
      unpinnedTiles.push(tile);
    }
  }

  const allTiles = pinnedTiles.concat(unpinnedTiles);

  return (
    <div className="tileGroup">
      <span>
        {allTiles.map((item) => (
          <Fragment key={item.id}>
            <Tile
              headerText={props.text}
              description={item.description}
              color={item.color}
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
