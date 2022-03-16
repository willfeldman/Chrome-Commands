import "./tile.scss";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useStickyState } from "../../hooks/useStickyState";
import { pulse } from "react-animations";
import { animateCSS } from "../../helper/animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

const pulseAnimation = keyframes`${pulse}`;

const Button = styled.button`
  background-color: ${(props) => props.color || "black"};
  &:active {
    animation: 0.2s ${pulseAnimation};
  }
`;

function Tile(props) {
  const [favorited, setFavorited] = useStickyState(false, props.text);

  useEffect(checkFavorite, [favorited]);

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
    document.getElementsByClassName("notificationContainer")[0].style.display =
      "inline-block";
  }

  function updateStatus() {
    updateHeader();
    updateColor();
    fadeIn();
    linkCopiedNotification();
  }

  function toggleFavorite() {
    setFavorited(!favorited);
  }

  function checkFavorite() {
    const element = document.getElementById(props.text);
    if (favorited === true) {
      element.classList.add("starIconFavorited");
    } else {
      element.classList.remove("starIconFavorited");
    }
  }

  return (
    <Button color={props.color} onClick={updateStatus}>
      <FontAwesomeIcon
        className="starIcon"
        id={props.text}
        icon={faThumbtack}
        onClick={toggleFavorite}
      />
      <div className="buttonText">{props.text}</div>
    </Button>
  );
}

export { Tile };
