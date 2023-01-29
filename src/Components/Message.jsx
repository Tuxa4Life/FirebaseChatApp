import React, { useState, useEffect, useRef } from "react";
import MessageInfo from "./MessageInfo";

const Message = ({ author, img, content, date, authorName, id }) => {
    const [info, setInfo] = useState(false)
    const messageRef = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (!messageRef.current.contains(event.target)) { setInfo(false) }
        }
        document.body.addEventListener ('click', onBodyClick, {capture: true})

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        }
    }, [])

    return (
        <div className={`messageHolder ${author}`}>
            <div title={date} className="message">
                <img src={img} />
                <p ref={messageRef} onClick={() => setInfo(!info)} className="content" style={{cursor: 'pointer'}}>{content}</p>     
            </div>
            { info ? <MessageInfo authorPhoto={img} uid={id} date={date} authorName={authorName} content={content}/> : null }
        </div>
    )
}

export default Message;