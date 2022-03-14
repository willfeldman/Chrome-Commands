import './header.css';

function Header(props) {

    return (
        <div className='textContainer'>
            <div className='textMain'>{ props.textMain }</div>
            <div className='textSub'>{ props.textSub }</div>
        </div>
    );
  }
  
  export { Header };