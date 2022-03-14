import { TileContainer } from './components/tile/TileContainer';
import { Header } from './components/header/Header';
import { Notification } from './components/notification/Notification';
import { useState } from 'react';
import { data } from './data';
import './app.scss';

function App() {
    const textMain = "Chrome:// Commands";
    const textSub = "What is Chrome Commands?";
    const [text, setText] = useState({Main: textMain, Sub: textSub});

    return (
        <div className='pageBody'>
            <Header textMain={text.Main} textSub={text.Sub} />
            <TileContainer text={setText} data={data} />
            <Notification link={text.Main} />
        </div>
    );
}

export default App;