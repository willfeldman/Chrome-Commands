function Header(props) {

    return (
        <div className='textContainer'>
            <h1 className='textMain'>{ props.textMain }</h1>
            <h3 className='textSub'>{ props.textSub }</h3>
        </div>
    );
  }
  
  export { Header };