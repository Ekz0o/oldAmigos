import React from 'react';
import padlock from '../../images/padlock.png';
import classes from './Header.module.css';

const Header = (props) => {
   return (
     <div>
      <header className={classes.header}>
        <div className={classes.headerWrap}>
          <p id={classes.amigo}>Amigos Social Network</p>
          <a href="#" id={classes.inside}><img src={padlock} height="26px" width="22px"></img></a>
          <a href="#"><p id={classes.insideText}>Login</p></a>
        </div>
      </header>
    </div>
   );
}

export default Header;