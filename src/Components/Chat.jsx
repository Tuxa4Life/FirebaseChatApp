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

            <MessageContainer authorId={creds.uid} pfpCard={() => setProfileState(!profileState)}/>
            <Input creds={creds}/>

        </div>
    )
}

export default Chat;