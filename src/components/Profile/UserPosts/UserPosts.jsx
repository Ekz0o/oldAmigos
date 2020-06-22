import React from 'react';
import postImg from '../../../images/postImg.png';
import classes from './UserPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const UserPosts = (props) => {

   let postsElements = props.posts.map( p => <Post message = {p.message} likesCount={p.likesCount}/> );

   let newPostElement = React.createRef();
   
   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   }

   return (
      <div>
         <div className={classes.UserPosts}>
            <div className={classes.postsWrap}>
               <div className={classes.postImg}>
                  <img src={postImg}></img>
               </div>
               <div className={classes.postInfo}>
                  <p id={classes.info}>by Veron 26/08/2019  in 13:55</p>
                  <h1>Why do we use it?</h1>
                  <p id={classes.userPost}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <div className={classes.textaria}>
                     <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                     <button className={classes.redact} onClick = { addPost } >Add post</button>
                  </div>
                  {postsElements}
               </div>
            </div>
         </div>
      </div>

   );
}

export default UserPosts;