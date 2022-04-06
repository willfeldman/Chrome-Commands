import Toggle from 'react-styled-toggle';
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeToggle() {

    const darkMode = useDarkMode(false);

    return (
        <div className='themeToggle'>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} labelLeft={<FontAwesomeIcon icon={faSun} />} labelRight={<FontAwesomeIcon icon={faMoon} />} />
        </div>
    );
  }
  
  export { ThemeToggle };