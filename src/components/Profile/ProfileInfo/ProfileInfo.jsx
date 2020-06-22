import React from 'react';
import classes from './ProfileInfo.module.css';
import veron from '../../../images/veron.png';

const ProfileInfo = (props) => {
    return (
        <div className={classes.userWrap}>
            <div className={classes.descriptionUser}>
                <h1>Veronika Bukhovskaya</h1>
                <h2 id={classes.firstH2}>Gender: female</h2>
                <h2>Age: 28 May 1998</h2>
                <h2>Work: freelance</h2>
                <p className={classes.aboutUser}>About Me: I love serif fonts, walks under the moon, I love cats. Fanatic from ancient BMW</p>
                <a href="#" className={classes.redact}><p>Edit</p></a>
            </div>
            <div className={classes.userPhoto}>
                <img src={veron} height="278px" width="278px"></img>
            </div>
        </div>
    );
}

export default ProfileInfo;