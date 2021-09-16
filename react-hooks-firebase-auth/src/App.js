import React from "react";
import {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const[isUserSignedIn , setIsUserSignedIn] = useState(true)

  const auth = getAuth();

  const user = auth.currentUser;
  if(user!=null)
  {
    console.log(user.email)
  }


  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`User ${user.uid}`)
      return setIsUserSignedIn(true)
    } else {
      console.log(`User is log out`)
      return setIsUserSignedIn(false)
    }
  });

  if(isUserSignedIn)
  {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          </Switch>
      </Router>
    );
  }
  else
  {
    return (
      <Router>
        <Switch>
          <Route path="/" component={SignIn}/> 
          </Switch>
      </Router>
    );

  }

 
}

export default App;
