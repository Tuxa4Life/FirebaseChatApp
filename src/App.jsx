import React, { useState, useEffect } from "react";
import Authentication from "./Components/Authentication";
import { auth } from "./Firebase/FirebaseApp";
import { onAuthStateChanged } from 'firebase/auth'
import Chat from "./Components/Chat";

const App = () => {
    const [authCreds, setAuthCreds] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, (creds) => {
            setAuthCreds(creds)
        })
    }, [])

    return (
        <div>
            { authCreds ? <Chat creds={authCreds}/> : <Authentication /> }
        </div>
    )
}

export default App;