import React from "react";
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { messageRefs } from "../Firebase/FirebaseApp";

const Input = ({ creds }) => {
    const uploadMessage = (e) => {
        e.preventDefault()
        let content = e.target.message.value
        
        addDoc(messageRefs, {
            author_id: creds.uid,
            author_img: creds.photoURL,
            content: content,
            date: serverTimestamp()
        })
        e.target.reset()
    }

    return (
        <form className="ui action input" onSubmit={uploadMessage}>
            <input type="text" name="message" required/>
            <button type="submit" className="ui icon button">
                <i className="paper plane icon"></i>
            </button>
        </form>
    )
}

export default Input;