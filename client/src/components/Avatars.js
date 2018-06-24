import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

/*const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};*/

export default props =>
<div>
    <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" className=/*{classes.avatar}*/ 'valueP' />
      <Avatar
        alt="Adelle Charles"
        src="/static/images/uxceo-128.jpg"
        className=/*{classNames(classes.avatar, classes.bigAvatar)}*/ 'valueO'
      />
</div>