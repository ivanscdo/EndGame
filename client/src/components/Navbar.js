import React,{Component} from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import firebase from "firebase";
import API from "../utils/API";
import QuickStart from './material-ui-test/QuickStart';
import { Typography } from "@material-ui/core";
import UserMenuButton from './material-ui-test/UserMenuButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const iconsStyle ={
  color: 'black',
  size: '100%',
  display: 'flex',
  flexWrap: 'wrap'
};

const styles = {
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const buttonStyle = {
  justifyContent: 'end'
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function GroupIcon(props){
  return (
    <SvgIcon {...props}>
      <path  d= "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/>
    </SvgIcon>
  );
}

function Public(props){
  return (
    <SvgIcon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" size="100%"/>
    </SvgIcon>
  )
}

function User(props){
  return (
    <div >
      <Avatar alt="User" src={firebase.auth().currentUser.photoURL} style={styles} />
    </div>
  )
}

function Logout(props){
  return (
    <SvgIcon {...props}>
      <path d=  "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" size="100%" />
    </SvgIcon>
  )
}



class Navbar extends Component {

  state = { 
      isSignedIn: true,
      user: firebase.auth().currentUser,
      anchorEl:null,
  }

  // componentDidMount() {
  //   console.log('component did mount fired');
  //   console.log(this.state.user);
  //   navigator.geolocation.getCurrentPosition((location) => {
  //     console.log(location);
  //     this.setState({
  //       center:{
  //         lat: location.coords.latitude,
  //       lng: location.coords.longitude,
  //       }
  //     });
  //   });
  // }


  handleClick = event => {
      this.setState({anchorEl: event.currentTarget });
  };

  handleClose = () => {
      this.setState({ anchorEl: null });
  };


  handleSignOut = () =>{
    if(firebase.auth().currentUser){
      API.updateSignIn({email:firebase.auth().currentUser.email})
      .then(res => console.log("state updated"))
      .then(()=>firebase.auth().signOut())
          .catch(err => console.log(err));
    }
  }

  render(){
    const {anchorEl} = this.state;
    
    return (
      <div
        className="menuButtons"
        style={{
          // width:"fit-content",
          // margin: "auto",
          // display:"block"
          buttonStyle
        }}
      >

        {/* <UserMenuButton /> */}

          
        <Link to="/">
          <Button
            variant='title'
            color='primary'
            style={{
              margin:2,
              alignContent:'center',
              justifyContent:'start'
            }}
            aria-label="edit"
            className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }
          >
            <span> End Game </span>
          </ Button>
        </Link>

        {/* <Link to="/">
          <Button
            variant="fab"
            style={{ margin:2, alignContent:'center' }}
            aria-label="edit"
            className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }
          >
            <HomeIcon style={iconsStyle}/>
          </Button>
        </Link> */}

        {/* <Link to="/invite">
          <Button
            variant="fab"
            style={{
              margin:2,
              alignContent:'center'
            }}
            aria-label="edit"
            className={window.location.pathname === "/invite" ? "active nav-link" : "nav-link" }
          >
            <GroupIcon style={iconsStyle} />
          </Button>
        </Link> */}

        {/* <Link to="/result">
          <Button variant="fab" style={{ margin:2, alignContent:'center' }} aria-label="add" className={window.location.pathname === "/result" ? "active nav-link" : "nav-link"}>
              <Public style={iconsStyle} />
          </Button>
        </Link>   */}

        {/* <Link onClick={()=>this.handleSignOut()} to="/">
          <Button
            variant="fab"
            style={{ margin:2, alignContent:'center' }}
            aria-label="edit"
            className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }
          >
            <Logout style={iconsStyle}/>
          </Button>
        </Link> */}

          {/* <Button variant="fab" style={{margin:2, alignContent:'center' }} aria-label="edit" className="active nav-link">
            <User style={iconsStyle} src={firebase.auth().currentUser.photoURL}/>
        </Button> */}

        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          variant="fab"
          // style={{
          //   margin:2,
          //   alignContent:'center', 
          //   justifyContent:'end'
          // }}
          // className="buttonStyle" 
          // style={buttonStyle}
          aria-label="edit"
          className="active nav-link"
        >
          <User style={iconsStyle} src={firebase.auth().currentUser.photoURL}/>
        </Button>
        <Menu id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link  to="/">
              <div
                variant="fab"
                style={{
                  margin:2,
                  alignContent:'center'
                }}
                aria-label="edit"
                className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }
              >
                {/* Profile */}
                <HomeIcon style={iconsStyle}/>
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link  to="/invite">
              <div
                variant="fab"
                style={{ margin:2, alignContent:'center' }}
                aria-label="edit"
                className={window.location.pathname === "/invite" ? "active nav-link" : "nav-link" }
              >
                {/* Settings */}
                <GroupIcon style={iconsStyle} />
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link onClick={()=>this.handleSignOut()} to="/">
              <div
                variant="fab"
                style={{ margin:2, alignContent:'center' }}
                aria-label="edit"
                className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }
              >
                {/* Logout */}
                <Logout style={iconsStyle}/>
              </div>
            </Link>
          </MenuItem>
        </Menu>
      </div> 
    )
  }
}

export default Navbar;