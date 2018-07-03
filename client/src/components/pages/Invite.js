import React, { Component } from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";
import Inputs from "../Inputs";
import TimePicker from "../TimePicker";
import { Paper, Typography, Grid } from "@material-ui/core";
import "./PageBody.css";

const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
}

class Invite extends Component { 

  state = {
    //isSignedIn: true,
    //user: {}
  }

    render(){
      return (
          <div className='page-body'>
            <Grid container spacing={24}> 
            <Grid item xs={12}> 
                <Paper style={styles.Paper}>
                  {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
                    <Typography variant='Title'>
                    <img alt="user" width="50px" margin='5px'src={firebase.auth().currentUser.photoURL} />
                    Welcome {firebase.auth().currentUser.displayName}! You are signed in.
                    </Typography> 
                <br />

              <Typography variant='display1'>Invite</Typography>
              </Paper>
            </Grid>
            <br />
            <Grid item xs={12}>
              <TimePicker />    
            </Grid>
            <br />
            <Grid item xs={12}>
            <FriendsList />
            </Grid>
            <br />
            <Grid item xs={12}>
            <Inputs />
            </Grid>

            </Grid>
          </div>
        )
      }
  }
export default Invite;
