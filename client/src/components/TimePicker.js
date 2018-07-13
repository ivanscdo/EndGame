import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// breakpoints;media queries
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// const styles = {
//   Paper: { padding: 20, width: "95vw", margin: 'auto' },
//   }

const styles = theme => ({
  timepickerBreakPoint: {
    [theme.breakpoints.down('sm')]:{
      padding: 20, 
      width: "95vw", 
      margin: 'auto'
    },
    [theme.breakpoints.up('sm')]:{
      padding: 20, 
      maxWidth: 600, 
      margin: 'auto'
    }
  }
});




class TimePicker extends Component {
  constructor(props) {
    super(props); 
  };

  render() { 
    return ( 

        <Paper 
          // style={styles.Paper}
          className={this.props.classes.timepickerBreakPoint}
        >
          <form className=/*{classes.container} noValidate*/ 'valueS'>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className=/*{classes.textField}*/ 'valueP'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <br />
        </Paper>  
        
      )   
  }
}

TimePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePicker);