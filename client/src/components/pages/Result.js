import React, {Component} from "react";
import firebase from "firebase";
import { Paper, Typography } from '@material-ui/core';
import  Map from "./../maps/map.js";
import './PageBody.css';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  Map: { padding: 20, width: 600, margin: 'auto' },
}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
        lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null
      },
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }

 

render (){
  return (
    <div className='page-body'>

        <Paper style={styles.Paper}>

          <Typography variant='title'>
            <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
            Welcome {firebase.auth().currentUser.displayName}! You are signed in.
          </Typography> 
          <br />

          <Typography variant='display1'>Result</Typography>
        </Paper>

        <br />

        <Map center={this.state.center} style={styles.Map}/>

      </div>
  )
}
}


export default Result;