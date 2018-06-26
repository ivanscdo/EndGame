import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatars from './Avatars';

export default props =>

<ListItem>
    <ListItemAvatar>
        <Avatars>
        </Avatars>
    </ListItemAvatar>
    <ListItemText
        primary="Example Friend"
        secondary=/*{secondary ? 'Secondary text' : null}*/ 'Other things about your example friend'
    />
    <FormControlLabel
        control={
              <Checkbox
                unchecked=/*{this.state.gilad}*/ 'false'
                onChange=/*{this.handleChange('gilad')}*/ 'false'
                value="gilad"
              />
        }
        label="Invite"
        />
</ListItem>