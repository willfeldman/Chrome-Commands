import './tile.scss';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { animateCSS } from '../../helper/animate';

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
        document.getElementsByClassName("textMain")[0].style.color = props.color;
    }

    function fadeIn() {
        animateCSS(".textMain", "fadeIn", "0.5s");
        animateCSS(".textSub", "fadeIn", "0.5s");
        animateCSS(".notificationContainer", "fadeIn", "0.5s");
    }

    function copyURL() {
        navigator.clipboard.writeText(props.link);
    }

    function linkCopiedNotification() {
        copyURL();
        document.getElementsByClassName("notificationContainer")[0].style.display = "inline";
    }

    function updateStatus() {
        updateHeader();
        updateColor();
        fadeIn();
        linkCopiedNotification();
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
  