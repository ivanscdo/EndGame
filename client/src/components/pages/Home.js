import React from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";

const Home = () =>
  <div>
    <h1>Home</h1>
    <div>Signed In! </div>
      {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
        <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
        <img alt="user" src={firebase.auth().currentUser.photoURL} />
    <p>
     Welcome to the EndGame
    </p>
    <FriendsList />
  </div>;

export default Home;
