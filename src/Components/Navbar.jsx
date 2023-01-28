import React from "react";
import SettingsDropdown from "./SettingsDropdown";

const Nav = ({pfpCard}) => {
    
    return (
        <div className="navbar">
            <div className="chat-name">
                <h3 className="header">Lounge 🦩</h3>
            </div>

            <div className="settings">
                <SettingsDropdown pfpCard={pfpCard}/>
            </div>
            
        </div>
    )
}

export default Nav;