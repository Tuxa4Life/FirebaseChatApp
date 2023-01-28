import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Nav from "./Navbar";
import { onSnapshot, orderBy, query, limit } from "firebase/firestore";
import { messageRefs } from "../Firebase/FirebaseApp";

const MessageContainer = ({authorId, pfpCard}) => {
    const [data, setData] = useState([])
    const autoScrollDummy = useRef()
    
    useEffect(() => {
        const q = query(messageRefs, orderBy('date', 'asc'), limit(50))
        
        onSnapshot(q, (snap) => {
            let tmp = []
            snap.docs.forEach(e => {
                tmp.push({...e.data(), id: e.id})
            })
            
            
            setData(tmp)
            autoScrollDummy.current.scrollIntoView({behaviour: 'smooth'})
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
            <Nav pfpCard={pfpCard}/>

            { messages }
            <div ref={autoScrollDummy} className="autoScrollDummy"></div>
        </div>
    )
}

export default MessageContainer