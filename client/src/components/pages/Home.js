<<<<<<< HEAD
=======
// import FriendsList from "../FriendsList";
>>>>>>> c14e364bf2a87f3176ef6f49e53690b4f343c5f8
import React, {Component} from "react";
import firebase from "firebase";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import keys from "../../keys";
import { Paper, Typography } from '@material-ui/core';
import './PageBody.css';

<<<<<<< HEAD

const styles = {
  Paper: { padding: 20, width: 600 },
}


=======
>>>>>>> c14e364bf2a87f3176ef6f49e53690b4f343c5f8
class Home extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  // componentDidMount = () => {
    
  // }


  render (){
    return (
      <div className='page-body'>

          <Paper style={styles.Paper}>
          {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
            <Typography variant='Title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
              Welcome {firebase.auth().currentUser.displayName}! You are signed in.
            </Typography> 
            <br />

            <Typography variant='display1'>Result</Typography>
          </Paper>
          <br />


        <Map google={this.props.google}
            onClick={this.onMapClicked}>
              <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>

                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
        </Map>

        </div>
    )
  }
}
  

// export default Home;
export default GoogleApiWrapper({
  apiKey: "AIzaSyAMqhG-GED8NdkrqM4tD0zair5WQEuXmwg"
})(Home)
