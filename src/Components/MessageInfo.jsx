import React from "react";

const MessageInfo = ({ content, uid, date, authorName, authorPhoto }) => {
    
    return (
        <div style={{
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',

            minWidth: '200px', minHeight: '150px', width: '300px',
            backgroundColor: 'white', borderRadius: '5px', border: '2px #E6E6E6 solid',

            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        }}>
            <div style={{height: '60%', width: '80%'}}>
                <div style={{wdith: '100%', display: 'flex', alignItems: 'center'}}>
                    <img style={{height: '50px', borderRadius: '7px'}} src={authorPhoto} />
                    <h2 style={{margin: '0 0 0 10px'}}>{authorName}</h2>
                </div>
                <p style={{color: 'gray', fontSize: '10px'}}>{uid}</p>
            </div>
            <p style={{fontSize: '14px', margin: '10px 0 5px 0'}}>{content}</p>
            <span style={{fontSize: '12px'}}>{date}</span>
            <p style={{fontSize: '9px'}}>(Click anywhere to close)</p>
        </div>
    )
}

export default MessageInfo;