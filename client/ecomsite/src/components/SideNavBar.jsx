import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [state, setState] = React.useState({

    left: false,

  });


  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClickOpen}>
          <ListItemText primary="Catefory-1" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>

              <ListItemText primary="Sub-Catefory-1" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText primary="Catefory-2" />
        </ListItem>
        <ListItem button>

          <ListItemText primary="Catefory-3" />
        </ListItem>
        <ListItem button onClick={handleClickOpen}>

          <ListItemText primary="Catefory-4" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>

              <ListItemText primary="Sub-Catefory-1" />
            </ListItem>
          </List>
        </Collapse>
        <Link to="/addproduct">
          <ListItem button>
            <ListItemText primary="Addproduct" />
          </ListItem>
        </Link>
        <Link to="/addcategory">
          <ListItem button>
            <ListItemText primary="Add Category" />
          </ListItem>
        </Link>
        <Link to="/productslist">
          <ListItem button>
            <ListItemText primary="Products List" />
          </ListItem>
        </Link>
        <Link to="/productview">
          <ListItem button>
            <ListItemText primary="Products View" />
          </ListItem>
        </Link>

      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
