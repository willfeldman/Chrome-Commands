import './notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function hide() {
    document.getElementsByClassName("notificationContainer")[0].style.visibility = "hidden";
}

function Notification(props) {

    return (
        <div className='notificationContainer'>
            <span className='notificationText'>
                <strong>{props.link}</strong> has been copied — paste it in a new tab. <FontAwesomeIcon className='notificationFontIcon' icon={faXmark} onClick={hide} />
            </span>
        </div>
    );
  }
  
  export { Notification };