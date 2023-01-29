import React, { useState, useEffect, useRef } from "react";
import styles from '../Assets/styles/Dropdown.css'
import { logOut } from "../Firebase/FirebaseApp";

const SettingsDropdown = ({pfpCard}) => {
    const [settings, setSettings] = useState(false)
    const btnRef = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (!btnRef.current.contains(event.target)) { setSettings(false) }
        }
        document.body.addEventListener ('click', onBodyClick, {capture: true})

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        }
    }, [])

    return (
        <div ref={btnRef} style={styles} className="settingsHolder">
            <div onClick={() => setSettings(!settings)} className="ui button secondary inverted cog">
                <i className="cog icon"></i>
            </div>
            <div className={`menu ${settings}-drop`}>
                <button onClick={pfpCard} className="ui icon secondary inverted button" title="Account">
                    <i className="user icon"></i>
                </button>

                <button onClick={logOut} className="ui icon secondary inverted button" title="Sign out">
                    <i className="sign-out icon"></i>
                </button>
            </div>
        </div>
    )
}

export default SettingsDropdown;