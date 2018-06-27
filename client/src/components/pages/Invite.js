import React from "react";
import firebase from "firebase";
import Navbar from "../Navbar";


const Invite = () =>
  <div>

    <h1>Invite</h1>
    <div>Signed In! </div>
      {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
        <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
        <img alt="user" src={firebase.auth().currentUser.photoURL} />
    
  </div>;

export default Invite;
