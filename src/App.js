import { TileContainer } from "./components/tile/TileContainer";
import { Header } from "./components/header/Header";
import { Notification } from "./components/notification/Notification";
import { PopupComponent } from "./components/popup/Popup";
import { useState } from "react";
import Favicon from "react-favicon";
import data from './data';
import "./app.scss";

function App() {
  const textMain = "Chrome:// Commands";
  const textSub = <PopupComponent buttonClass="textSub textButton" header="What is Chrome Commands?" content="a web tool meant to help you perform actions otherwise impossible without 'chrome://' and also you can use it to perform well known actions like Chrome settings, Chrome bookmarks, and more. To use the commands, open Google Chrome and type, or paste, any of them into the Chrome search bar." />;
  const [text, setText] = useState({ Main: textMain, Sub: textSub });
  const [tiles, setTiles] = useState(data);

  return (
    <div className="pageBody">
      <Favicon url="./favicon.ico" />
      <Notification link={text.Main} />
      <Header textMain={text.Main} textSub={text.Sub} />
      <TileContainer tiles={tiles} text={setText} />
    </div>
  );
}

export default App;
