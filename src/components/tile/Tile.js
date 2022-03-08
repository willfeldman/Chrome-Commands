import './tile.scss';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.color || "black"};
`;

function Tile(props) {
    function consoleIt() {
        console.log(props.text + " was clicked!");
        props.headerText.setText({
            Main: "hi"
        });
    }

    return (
        <Button color={ props.color } onClick={ props.headerText } >
            <div>
                { props.text }
            </div>
        </Button>
    );
  }
  
  export { Tile };
  