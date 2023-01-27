import React, { useState, useEffect } from "react";
import Message from "./Message";
import { onSnapshot, orderBy, query, limit } from "firebase/firestore";
import { messageRefs } from "../Firebase/FirebaseApp";

const MessageContainer = ({authorId}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const q = query(messageRefs, orderBy('date', 'asc'), limit(50))

        onSnapshot(q, (snap) => {
            let tmp = []
            snap.docs.forEach(e => {
                tmp.push({...e.data(), id: e.id})
            })

            setData(tmp)
        })
    }, [])

    const messages = data.map((e, i) => {
        let authorState = ''
        if (e.author_id == authorId) {
            authorState = 'author'
        }

        return <Message key={i} img={e.author_img} content={e.content} author={authorState}/>
    })

    return (
        <div className="messageContainer">
            { messages }
        </div>
    )
}

export default MessageContainer