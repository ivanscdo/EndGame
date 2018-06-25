import React from "react";
import firebase from "firebase";
const Result = () =>
  <div>
    <h1>Result</h1>
    <div>Signed In! </div>
      {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
        <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
        <img alt="user" src={firebase.auth().currentUser.photoURL} />
  </div>;

export default Result;
