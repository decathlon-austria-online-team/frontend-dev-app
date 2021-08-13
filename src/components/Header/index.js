

import React from "react";
import "./index.css";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer"; 
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header(props) {
  const {logout} = useAuth0();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
console.log('props headwerr has boll: ', props.userHasAllDataInSheetBool);
  return (
    <div className="header">
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
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <Typography variant="h6" noWrap>
                <Link
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                  to="/"
                > 
                  Decathlon frontend dev app
                </Link>
              
              </Typography> 

              <div className="header__icons-container">
                <Link style={{color: '#fff'}} to="/profile">
                  <AccountCircleIcon className='header__profile-icon' />
                </Link>
                <Link style={{color: '#fff'}} to="/settings">
                  <SettingsIcon className={`header__profile-icon ${props.userHasAllDataInSheetBool === false ? 'settings-missing-animate' : ''}`} />
                </Link>
                <Link style={{color: '#fff'}} to="/contact">
                  <ContactSupportIcon className='header__profile-icon' />
                </Link>
                <button className="header__logout-btn" onClick={() => logout()}>logout</button>
              </div>
              
              
            
             
              
            </div>

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
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {/*["Home Page", "Sport Page"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <ImportantDevicesIcon />
                  ) : index === 1 ? (
                    <SportsHandballIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
                  ))*/}
            <Link
              to="/hp-components"
              style={{ textDecoration: "none", color: "#000000DE" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  <ImportantDevicesIcon />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItem>
            </Link>

            <Link
              to="/create-new-sport-page"
              style={{ textDecoration: "none", color: "#000000DE" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  <SportsHandballIcon />
                </ListItemIcon>
                <ListItemText primary="Sport LP" />
              </ListItem>
            </Link>
            {/*
                <Link
              to="/create-new-sport-page"
              style={{ textDecoration: "none", color: "#000000DE" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  <SportsHandballIcon />
                </ListItemIcon>
                <ListItemText primary="Sport LPV2" />
              </ListItem>
            </Link>
            */}

          </List>
          <Divider />
        </Drawer>
        {/*
           <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
          */}
      </div>
    </div>
  );
}
