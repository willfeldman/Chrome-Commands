import { TileContainer } from './components/tile/TileContainer';
import { Header } from './components/header/Header';
import { useState } from 'react';

function App() {
    const textMain = "Chrome:// Commands";
    const textSub = "What is Chrome Commands?";
    const [text, setText] = useState({Main: textMain, Sub: textSub});

    return (
        <div className='pageBody'>
            <Header textMain={text.Main} textSub={text.Sub} />
            <TileContainer text={setText} />
        </div>
    );
}

export default App;