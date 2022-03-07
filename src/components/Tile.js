import './tile.scss';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.color || "black"};
`;

function Tile(props) {
    return (
        <Button color= { props.color } >
            <div>
                { props.text }
            </div>
        </Button>
    );
  }
  
  export { Tile };
  