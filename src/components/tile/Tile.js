import './tile.scss';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

const Button = styled.button`
    background-color: ${props => props.color || "black"};
    &:active {
        animation: 0.2s ${pulseAnimation};
    }
`;

function Tile(props) {
    function updateHeader() {
        props.headerText({Main: props.link, Sub: props.description});
    }

    function updateColor() {
        // document.getElementsByClassName("textContainer")[0].style.borderColor = props.color;
        // document.body.style.borderColor = props.color;
    }

    function updateStatus() {
        updateHeader();
        updateColor();
        console.log(props.link);
    }

    return (
        <Button color={ props.color } onClick={ updateStatus }>
            <div>
                { props.text }
            </div>
        </Button>
    );
  }
  
  export { Tile };
  