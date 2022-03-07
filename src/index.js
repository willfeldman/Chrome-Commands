import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TileContainer } from './components/tile/TileContainer';

ReactDOM.render(
  <div className='pageBody'>
    <div className='textContainer'>
      <h1 className='textMain'>Chrome:// Commands</h1>
      <h3 className='textSub'>What is chrome commands?</h3>
    </div>
    <TileContainer />
  </div>,
  document.getElementById('root')
);
