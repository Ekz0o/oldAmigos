import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
      <div>
          <div className={classes.text}>
              <img id={classes.img} src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"></img>
              {props.message} ({props.likesCount}) likes
          </div>
      </div>
    );
}

export default Post;