import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Nav from "./Navbar";
import { onSnapshot, orderBy, query, limit } from "firebase/firestore";
import { messageRefs } from "../Firebase/FirebaseApp";

const MessageContainer = ({authorId, pfpCard}) => {
    const [data, setData] = useState([])
    const [dataLimit, setDataLimit] = useState(50)
    const [skipScroll, setSkipScroll] = useState(false)

    const autoScrollDummy = useRef()
    const autoLoadDummy = useRef()
    
    useEffect(() => {
        const q = query(messageRefs, orderBy('date', 'desc'), limit(dataLimit))
        
        onSnapshot(q, (snap) => {
            let tmp = []
            snap.docs.forEach(e => {
                tmp.push({...e.data(), id: e.id})
            })
            
            setData(tmp)
            if (!skipScroll) {
                autoScrollDummy.current.scrollIntoView({behaviour: 'smooth'})
            } else {
                setSkipScroll(false)
            }
        })
    }, [dataLimit])

    const messages = data.map((e, i) => {
        let authorState = ''
        if (e.author_id === authorId) {
            authorState = 'author'
        }

        return <Message key={i} img={e.author_img} content={e.content} author={authorState}/>
    })

    const autoLoad = () => {
        if (autoLoadDummy.current.getBoundingClientRect().bottom > 0) {
            setSkipScroll(true)
            setDataLimit(dataLimit + 15)
        }
    }

    return (
        <div onScroll={autoLoad} className="messageContainer">

            <div ref={autoScrollDummy} className="autoScrollDummy"></div>

            <Nav pfpCard={pfpCard}/>
            
            { messages }
            
            <div style={{marginBottom: '50px'}} ref={autoLoadDummy} className="autoLoadDummy"></div>
        </div>
    )
}

export default MessageContainer