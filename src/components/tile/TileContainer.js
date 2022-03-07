import { Tile } from './Tile';
import './tilecontainer.scss';

function TileContainer() {
    return (
        <>
            <div className='tileGroup'>
                <Tile text="example" color="purple" />
                <Tile text="of" color="red" />
                <Tile text="button" color="green" />
                <Tile text="group" color="gray" />
            </div>
            <div className='tileGroup'>
                <Tile text="another" color="orange" />
                <Tile text="one" color="blue" />
                <Tile text="is" color="darkGreen" />
                <Tile text="here" color="black" />
            </div>
        </>
    );
  }
  
  export { TileContainer };