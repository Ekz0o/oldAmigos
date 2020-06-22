import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={classes.userName}>
            <NavLink to={path}><p>{props.name}</p></NavLink>
        </div>
    );
}

export default DialogItem;