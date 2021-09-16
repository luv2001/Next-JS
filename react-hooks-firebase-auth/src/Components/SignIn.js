import React from 'react'
import firebase from "../Firebase/Firebase"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";


const SignIn = ({setIsUserSignedIn}) => {

    const provider = new GoogleAuthProvider();

    const signInWithFirebase = () => {
        console.log(firebase)
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    setIsUserSignedIn(true)
  }).catch((error) => {
    console.log(error.message)
  });
}

    return (
        <div>
            <button onClick={()=>{signInWithFirebase()}}>Sign In</button>
        </div>
    )
}

export default SignIn
