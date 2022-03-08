import './tile.scss';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.color || "black"};
`;

function Tile(props) {
    function updateHeader() {
        props.headerText({Main: props.text, Sub: props.description});
    }

    return (
        <Button color={ props.color } onClick={ updateHeader } >
            <div>
                { props.text }
            </div>
        </Button>
    );
  }
  
  export { Tile };
  