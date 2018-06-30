// import FriendsList from "../FriendsList";
import React, {Component} from "react";
// import firebase from "firebase";
import  Map from "./../maps/map.js";
//import keys from "../../keys";
import './PageBody.css';


class Home extends Component {
  
  


  render (){
   
    return (
            <div className='page-body'>
              <h1>Home</h1>
              <div>Signed In! </div>
              <Map 
              
            />
        </div>
    )
  }
}
  

export default Home;
// export default 
// GoogleApiWrapper({
//   apiKey: "AIzaSyAMqhG-GED8NdkrqM4tD0zair5WQEuXmwg"
// })(Home)
