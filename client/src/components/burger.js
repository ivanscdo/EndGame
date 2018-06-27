import React, { Component, Fragment } from 'react';
import { 
    AppBar, Toolbar, Drawer, IconButton, Typography, Hidden, CssBaseline, Divider
 } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
 
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    },
  });


class Burger extends Component {
    render(){

        const { classes, children}  = this.props
        const { mobileOpen } = this.state


      const drawer = (
        <div>
          <div className={classes.toolbar} />
          show show show show
          <Divider />
          
        </div>
      );
  
      const state = {
        mobileOpen: false,
      }
    
    //   handleDrawerToggle = () => {
    //     this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    //   };

      return (
        <Fragment>
            <CssBaseline />
            <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}
                >
                    <Menu />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                    Responsive drawer
                </Typography>
                </Toolbar>
            </AppBar>
            <Hidden mdUp>
                <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                >
                {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                variant="permanent"
                open
                classes={{
                    paper: classes.drawerPaper,
                }}
                >
                {drawer}
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
            </div>
        </Fragment>
      );
    }
}

export default withStyles(styles)(Burger)