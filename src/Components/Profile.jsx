import React from "react";

const Profile = ({ img, username, date, id, closeFunc }) => {
    return (
        <div className="ui card profileCard">
            <div className="image">
                <img src={img} />
            </div>
            <div className="content">
                <a className="header">{username}</a>
                <div className="meta">
                    <span className="date">Joined: {date}</span>
                </div>
                <div className="description" style={{fontSize: '10px'}}>
                    UID: {id}
                </div>
                <button style={{marginTop: '10px'}} className="ui button" onClick={closeFunc}>Close</button>
            </div>
        </div>
    )
}

export default Profile;