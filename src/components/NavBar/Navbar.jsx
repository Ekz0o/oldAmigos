import React from 'react';
import mainLogo from '../../images/logo.png';
import user from '../../images/user.png';
import friends from '../../images/friends.png';
import messages from '../../images/messages.png';
import news from '../../images/news.png';
import music from '../../images/music.png';
import setting from '../../images/setting.png';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
   return (
      <div>
         <div className={classes.navbarWrap}>
            <nav className={classes.navbar}>
               <NavLink to="/index.js"><img id={classes.mainLogo} src={mainLogo} height="36px" width="36px"></img></NavLink>
               <NavLink to="/Profile"><img src={user} height="31px" width="23px"></img></NavLink>
               <div className={classes.line}></div>
               <NavLink to="/Dialogs"><img src={messages} height="15px" width="25px"></img></NavLink>
               <div className={classes.line}></div>
               <NavLink to="/Friends"><img src={friends} height="22px" width="25px"></img></NavLink>
               <div className={classes.line}></div>
               <NavLink to="/News"><img src={news} height="20px" width="25px"></img></NavLink>
               <div className={classes.line}></div>
               <NavLink to="/Music"><img src={music} height="24px" width="25px"></img></NavLink>
               <div className={classes.line}></div>       
               <NavLink to="/Settings"><img src={setting} height="25px" width="25px"></img></NavLink>
               <div className={classes.line}></div>  
            </nav>
         </div>
      </div>
   );
}


export default Navbar;