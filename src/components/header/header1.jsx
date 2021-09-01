import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
        display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
      backgroundColor: theme.palette.grey[900]
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    },
   drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Header1({open,handleDrawerOpen,handleDrawerClose}) {
    const classes = useStyles();
    const theme = useTheme();
    
    const logo = () => {
        return (
            <Link to="/" className={styles.logo}>
                <img alt="NBA-APP_LOGO" src="./images/nba_logo.png" />
            </Link>
        )
    };
    
    const items = [
        {
            icon: 'HomeIcon',
            text: 'Home',
            link: '/Home'
        },
        {
            icon: 'DescriptionIcon',
            text: 'News',
            link: '/News'
        },
        {
            icon: 'OndemandVideoIcon',
            text: 'Videos',
            link: '/Videos'
        },
        {
            icon: 'LockOpenIcon',
            text: 'SignIn',
            link: '/SignIn'
        },
        {
            icon: 'LockIcon',
            text: 'SignOut',
            link: '/SignOut'
        }
    ]
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {logo()}
        </Toolbar>
      </AppBar>
     <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
       <List>
          {items.map((temp, index) => (
                   <ListItem button key={index}> 
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={temp}></ListItemText> 
                  {/* <Link to={text.link} >{text}</Link> */}
            </ListItem> 
          ))}
        </List>
       
      </Drawer>
     
    </div>
  );
}