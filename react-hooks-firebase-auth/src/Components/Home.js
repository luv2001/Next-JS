import React from 'react'
import firebase from "../Firebase/Firebase"
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const Home = () => {

    const handleSignOut = () =>{
        signOut(auth).then(() => {
           console.log("Sign out")
          }).catch((error) => {
           console.log(error.message)
          });
        }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>{handleSignOut()}}>SIGN_OUT</button>
        </div>
    )
}

export default Home
