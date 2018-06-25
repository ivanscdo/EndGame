import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
 
})

class Login extends Component {
  state = {isSignedIn: false,
  redirect: false}
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

export default Login;

