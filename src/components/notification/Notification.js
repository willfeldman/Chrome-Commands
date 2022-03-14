import './notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function hide() {
    document.getElementsByClassName("notificationContainer")[0].style.display = "none";
}

function Notification(props) {

    return (
        <div className='notificationContainer'>
            <span className='notificationText'><strong>{props.link}</strong>has been copied — paste it in new tab. <FontAwesomeIcon className='fontIcon' icon={faXmark} onClick={hide} /></span>
        </div>
    );
  }
  
  export { Notification };