import React from "react";
import styles from '../Assets/styles/Authentication.css'
import { signInWithGoogle } from "../Firebase/FirebaseApp";

const Authentication = () => {
    return (
        <div style={styles} className='authContainer'> 
            <h1 className="ui title">To use website please Sign in</h1>
            <button className="ui grey button" onClick={signInWithGoogle}>
                <i className="google icon"></i>
                Sign in with Google 
            </button>
        </div>
    )
}

export default Authentication;