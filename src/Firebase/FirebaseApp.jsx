import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB0CR-dh7Z985WK1pZKRBAgv9ShNVIOh5c",
    authDomain: "chatapp-tuxa1.firebaseapp.com",
    projectId: "chatapp-tuxa1",
    storageBucket: "chatapp-tuxa1.appspot.com",
    messagingSenderId: "497416415675",
    appId: "1:497416415675:web:f11e7dd9d1368441f0bc9e"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const db = getFirestore()

export const messageRefs = collection(db, '_messages')

const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .catch(error => alert(error.message))
}

export const logOut = () => {
    signOut(auth)
        .catch((error) => alert(error))
}
