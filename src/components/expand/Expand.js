import './expand.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Expand() {

    return (
        <div className='expandContainer'>
            <span className='expandText'>
                view all <FontAwesomeIcon className='fontIcon' icon={faSquarePlus} />
            </span>
        </div>
    );
  }
  
  export { Expand };