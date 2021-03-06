import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {sendMessageCreator} from '../../Redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }



    return (
        <div>
            <div className={classes.wrap}>
                <div className={classes.friendsWrap}>
                    {dialogsElements}
                </div>
                <div className={classes.dialogsWrap}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody} 
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"></textarea></div>
                        <div><button onClick= {onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;