import React, { Component } from "react";
// import dotenv from 'dotenv';
// import {FIREBASE_API, FIREBASE_AUTH_DOMAIN} from "dotenv";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/pages/Home";
// import Result from "./components/pages/Result";
// import Login from "./components/pages/Login";
// import Invite from "./components/pages/Invite";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// dotenv.config();

firebase.initializeApp({
  apiKey: "AIzaSyDYTXe8VuIi0gdZVfI1V1kHpJ2N9Xj23-I",
  authDomain: "endgame-1529521978924.firebaseapp.com"
})

class App extends Component {
  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
   

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log("user",user);
    })
  }

  render(){
    return (
      <div className="App">
      {this.state.isSignedIn ? (
        <div>
        <div>Signed In! </div>
        <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button>
        <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
        <img alt="user" src={firebase.auth().currentUser.photoURL} />
        </div>
      ) :
        (<StyledFirebaseAuth 
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
        />)
        }
      </div>
    )
  }
}

export default App;