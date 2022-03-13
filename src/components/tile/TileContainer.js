import { Tile } from './Tile';
import './tilecontainer.scss';

const TileContainer = (props) => (
    <div className='tileGroup'>
      {props.data.map(data => (
        <Tile headerText={props.text} link={data.link} text={data.name} description={data.description} color={data.color} />
      ))}
    </div>
  );
  
  export { TileContainer };