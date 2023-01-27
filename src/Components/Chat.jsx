import React, { useState } from "react";
import styles from '../Assets/styles/Chat.css'
import { logOut } from "../Firebase/FirebaseApp";
import Input from "./Input";
import MessageContainer from "./MessageContainer";
import Profile from "./Profile";

const Chat = ({creds}) => {
    const [profileState, setProfileState] = useState(false)

    return (
        <div style={styles} className="ui chat container">
            <button onClick={logOut} className="ui icon secondary inverted button signout" title="Sign out">
                <i className="sign-out icon"></i>
            </button>
            <button onClick={() => setProfileState(!profileState)} className="ui icon secondary inverted button account" title="Sign out">
                <i className="user icon"></i>
            </button>

            { 
                profileState ? 
                    <Profile
                        img={creds.photoURL} 
                        username={creds.displayName}
                        date={creds.metadata.creationTime}
                        id={creds.uid}
                        closeFunc={() => setProfileState(false)}
                    /> 
                : null 
            }

            <MessageContainer authorId={creds.uid}/>
            <Input creds={creds}/>

        </div>
    )
}

export default Chat;