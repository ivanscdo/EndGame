import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';

export default props =>

<div>
<Grid item sm>
  <Paper>
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
 </Grid> 

<br />

<Grid item sm>
  <Paper>
    <Typography variant="title" className=/*{classes.title}*/'valueL'>
        Your Available Friends:
    </Typography>
        <div className=/*{classes.demo}*/'valueD'>
              <List /*dense={dense}*/ valueK>
                <FormControl component="fieldset">
                <FormLabel component="legend">Meet UP Instance</FormLabel>
                <FormGroup>


                   <FriendsListItem />

                </FormGroup>
                </FormControl>
              </List>
        </div>
  </Paper>
</Grid>
</div>

/*need js logic to store the date and date from form to create instance on EndGame. 
also need to know where to get data to populate the list*/