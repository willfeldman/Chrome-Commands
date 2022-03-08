import { Tile } from './Tile';
import './tilecontainer.scss';

function TileContainer(props) {
    const headerText = props.text;
    return (
        <>
            <div className='tileGroup'>
                <Tile headerText={headerText} text="example" color="purple" />
                <Tile headerText={headerText} text="of" color="red" />
                <Tile headerText={headerText} text="button" color="green" />
                <Tile headerText={headerText} text="group" color="gray" />
            </div>
            <div className='tileGroup'>
                <Tile headerText={headerText} text="another" color="orange" />
                <Tile headerText={headerText} text="one" color="blue" />
                <Tile headerText={headerText} text="is" color="darkGreen" />
                <Tile headerText={headerText} text="here" color="black" />
            </div>
        </>
    );
  }
  
  export { TileContainer };