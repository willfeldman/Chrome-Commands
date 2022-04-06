import "./popup.css";
import Popup from "reactjs-popup";

function PopupComponent(props) {
  return (
    <Popup
      trigger={<span className={props.buttonClass}> {props.header} </span>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">{props.header}</div>
          <div className="content">{props.content}</div>
        </div>
      )}
    </Popup>
  );
}

export { PopupComponent };
