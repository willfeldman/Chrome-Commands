import { Tile } from './Tile';
import './tilecontainer.scss';

function TileContainer(props) {
    const headerText = props.text;
    return (
        <>
            <div className='tileGroup'>
                <Tile headerText={headerText} text="apps" description="This command allows you to view and access all of your Chrome applications" color="purple" />
                <Tile headerText={headerText} text="new tab" description="This command allows you to open a new Chrome tab" color="red" />
                <Tile headerText={headerText} text="settings" description="This command allows you to access the Chrome settings menu" color="green" />
                <Tile headerText={headerText} text="downloads" description="This command allows you to view all web downloads made from Chrome" color="gray" />
            </div>
            <div className='tileGroup'>
                <Tile headerText={headerText} text="bookmarks" description="This command allows you to open, view, and edit Chrome bookmarks" color="orange" />
                <Tile headerText={headerText} text="crashes" description="This command allows you to see Chrome's crash report" color="blue" />
                <Tile headerText={headerText} text="version" description="This command shows your Chrome stats" color="darkGreen" />
                <Tile headerText={headerText} text="top sites" description="This command allows you to see your most visited sites" color="black" />
            </div>
        </>
    );
  }
  
  export { TileContainer };