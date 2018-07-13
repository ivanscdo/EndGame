import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// breakpoints;media queries
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



// const styles = {
//     InviteButton: { 
//         backgroundColor: '#BDBDBD', 
//         width: "86vw" 
//     }
//   };

//   const styles = {
//     InviteButton: { backgroundColor: '#BDBDBD', width: 560 }
//   };

const styles = theme => ({
    invitebuttonBreakPoint: {
        [theme.breakpoints.down('sm')]:{
        backgroundColor: '#BDBDBD', 
        width: "86vw" 
        },
        [theme.breakpoints.up('sm')]:{
        backgroundColor: '#BDBDBD', 
        width: 560
        }
    }
});
  

class InviteButton extends Component{
    constructor(props) {
        super(props); 
    };
    
    render() {
        return(

            <Button 
                variant="contained" 
                type="submit" 
                // style={styles.InviteButton}
                /*className={classes.button}*/
                className={this.props.classes.invitebuttonBreakPoint}
            >
                Invite
            </Button>
        )

    }
}

InviteButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(InviteButton);
