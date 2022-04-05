import { Tile } from "./Tile";
import "./tilecontainer.scss";
import db from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { Fragment } from "react";

const TileContainer = (props) => {
  const [value, loading, error] = useCollection(collection(db, "data"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div className="tileGroup">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <div class="loader"></div>}
      {value && (
        <span>
          {value.docs.map((item) => (
              <Fragment key={item.id}>
                <Tile
                  headerText={props.text}
                  description={item.data().description}
                  color={item.data().color}
                  text={item.data().name}
                  link={item.data().link}
                />
              </Fragment>
          ))}
        </span>
      )}
    </div>
  );
};

export { TileContainer };
