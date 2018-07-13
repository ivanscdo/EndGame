import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatars from './Avatars';

// breakpoints;media queries
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const style = {
    Checkbox: { 
        color: '#4DB6AC ', 
        fill: '#4DB6AC'
    }
};

const styles = theme => ({
    friendlistitemBreakPoint: {
      [theme.breakpoints.down('sm')]:{
        background: '#FF5722', 
        text: 'white', 
        width: "85vw", 
        padding: 5, 
        margin: 3 
      },
      [theme.breakpoints.up('sm')]:{
        background: '#FF5722', 
        text: 'white', 
        width: 560, 
        padding: 5, 
        margin: 3 
      }
    }
  });


function FriendListItem (props){ 
    const { classes } = props;

    return (
        <ListItem 
            // style={styles.ListItem}
            className={classes.friendlistitemBreakPoint}
            key={props._id}
        >
        <ListItemAvatar>
            <Avatars
            alt={props.userName} 
            src={props.photoURL}
            >
            </Avatars>
        </ListItemAvatar>
        <ListItemText
            primary={props.userName}
            secondary={props.online} 
        />
        <FormControlLabel
        control={
            <Checkbox 
                style={style.Checkbox}
                unchecked={props.checked}
                onChange={props.handleChange}
                value={props.email}

            />
        }
            label="Invite"
        />            
    </ListItem>
    )
}

FriendListItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FriendListItem);