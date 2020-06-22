import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo />
         <UserPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
      </div>
      
   );
}

export default Profile;