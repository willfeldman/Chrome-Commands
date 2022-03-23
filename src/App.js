import { TileContainer } from "./components/tile/TileContainer";
import { Header } from "./components/header/Header";
import { Notification } from "./components/notification/Notification";
import { useState } from "react";
import Favicon from 'react-favicon';
import "./app.scss";

function App() {
  const textMain = "Chrome:// Commands";
  const textSub = "What is Chrome Commands?";
  const [text, setText] = useState({ Main: textMain, Sub: textSub });

  return (
    <div className="pageBody">
      <Favicon url="../public/favicon.ico" />
      <Notification link={text.Main} />
      <Header textMain={text.Main} textSub={text.Sub} />
      <TileContainer text={setText} />
    </div>
  );
}

export default App;
