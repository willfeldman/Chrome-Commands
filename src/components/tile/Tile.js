import "./tile.scss";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { animateCSS } from "../../helper/animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const pulseAnimation = keyframes`${pulse}`;

const Button = styled.button`
  background-color: ${(props) => props.color || "black"};
  &:active {
    animation: 0.2s ${pulseAnimation};
  }
`;

function Tile(props) {
  const [pinned, setPinned] = useState(props.pinned);

  function getCorrectClassForInit() {
    return (pinned ? "starIconFavorited" : "");
  }
  
  function updateHeader() {
    props.headerText({ Main: props.link, Sub: props.description });
  }

  function updateColor() {
    document.getElementsByClassName("textMain")[0].style.color = props.color;
  }

  function fadeIn() {
    animateCSS(".notificationContainer", "slideInDown", "0.5s");
  }

  function copyURL() {
    navigator.clipboard.writeText(props.link);
  }

  function linkCopiedNotification() {
    copyURL();
    document.getElementsByClassName(
      "notificationContainer"
    )[0].style.visibility = "visible";
  }

  function updateStatus() {
    updateHeader();
    updateColor();
    fadeIn();
    linkCopiedNotification();
  }

  function toggleFavorite() {
    const element = document.getElementById(props.text);
    if (pinned) {
      element.classList.remove("starIconFavorited");
      localStorage.setItem(props.text, false);
      setPinned(false);
    } else {
      element.classList.add("starIconFavorited");
      localStorage.setItem(props.text, true);
      setPinned(true);
    }
  }

  return (
    <Button color={props.color} onClick={updateStatus} className="tileElement">
      <FontAwesomeIcon
        className={'starIcon ' + getCorrectClassForInit()}
        id={props.text}
        icon={faThumbtack}
        onClick={toggleFavorite}
      />
      <div className="buttonText">{props.text}</div>
    </Button>
  );
}

export { Tile };
