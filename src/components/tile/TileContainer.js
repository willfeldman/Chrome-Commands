import { Tile } from "./Tile";
import "./tilecontainer.scss";
import { Fragment } from "react";

const TileContainer = (props) => {
  return (
    <div className="tileGroup">
        <span>
          {props.tiles.map((item) => (
              <Fragment key={item.id}>
                <Tile
                  headerText={props.text}
                  description={item.description}
                  color="#fe4e40"
                  text={item.name}
                  link={item.link}
                />
              </Fragment>
          ))}
        </span>
    </div>
  );
};

export { TileContainer };
