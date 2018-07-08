import React, { Component } from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";
<<<<<<< HEAD
// import InviteButton from '../InviteButton';
=======
>>>>>>> 57b06e9a1ad2c33bd955f1b25ea17adb656bd7bb
import TimePicker from "../TimePicker";
import { Paper, Typography, Grid } from "@material-ui/core";
import "./PageBody.css";
import API from "../../utils/API";

const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
}

  class Invite extends Component { 
    constructor(props) {
      super(props); 
      this.state = {
        isSignedIn: true,
        user: {},
        value: 0,
        checked: false,
        liveUsers: [], 
      };
    };
  
    handleChange = name => event => {
      this.setState({ [name]: event.target.checked = true });
    };
  
    componentDidMount() {
      API.getUsers()
      .then((response)=> {
        this.setState(()=>{
          return {
            liveUsers: response.data
          }
        })
      })
      .catch(err=>console.log(err))
    }    
    
    
    render(){
      let users = this.state.liveUsers;
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

<<<<<<< HEAD
              <Typography variant='display1'>Invite</Typography>
              </Paper>
            </Grid>
            <br />
            <Grid item xs={12}>
              <TimePicker />    
            </Grid>
            <br />
            <Grid item xs={12}>
            <FriendsList 
              users = {this.state.liveUsers}
              handleChange = {this.state.handleChange}
            />

            </Grid>
=======
                    <Typography variant='display1'>Invite</Typography>
                </Paper>
              </Grid>
>>>>>>> 57b06e9a1ad2c33bd955f1b25ea17adb656bd7bb

              <br />
            
              <Grid item xs={12}>
                <TimePicker />    
              </Grid>

              <br />

<<<<<<< HEAD
            </Grid>
=======
              <Grid item xs={12}>
                <FriendsList 
                  users = {this.state.liveUsers}
                  handleChange = {this.state.handleChange}
                 />
              </Grid>
>>>>>>> 57b06e9a1ad2c33bd955f1b25ea17adb656bd7bb

            </Grid>
          </div>
        )
      }
  }


<<<<<<< HEAD
export default Invite;
=======
export default Invite;
>>>>>>> 57b06e9a1ad2c33bd955f1b25ea17adb656bd7bb
