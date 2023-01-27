import React from "react";

const Message = ({ author, img, content }) => {
    return (
        <div className={`messageHolder ${author}`}>
            <div className="message">
                <img src={img} />

                <p className="content">{content}</p>         
            </div>
        </div>
    )
}

export default Message;