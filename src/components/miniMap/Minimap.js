import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
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
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

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
    "background": "rgba(255, 255, 255, 0.68)",
    "WebkitBackdropFilter": "saturate(180%) blur(20px)",
    "backdropFilter": "saturate(180%) blur(20px)"
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
  Button: {
    position: "fix",
    backgroundColor: "black",
    color: "white",
    height: "48px",
    borderRadius: "30px",
  }
}));

function Minimap(props) {

  const { moveToWayPoint, open, handleMinimapClose, setCurrentLocation, minimapData } = props;
  const classes = useStyles();
  console.log(minimapData)
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        onClose={handleMinimapClose}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleMinimapClose}>
            <CloseOutlinedIcon/>
          </IconButton>
        </div>
        <Divider />
        {
          minimapData=== null ? <div style={{padding:'1rem'}}>Please wait while we load booths data</div> :
          <List >
            {" "}
            {[
              "Booth 1",
              "Booth 2",
              "Booth 3",
              "Booth 4",
              "Booth 5",
              "Booth 6",
              "Booth 7",
              "Booth 8",
              "Booth 9",
              "Booth 10",
              "Booth 11",
              "Booth 12",
              "Booth 13",
              "Booth 14",
              "Booth 15",
              "Booth 16",
              "Booth 17",
              "Booth 18",
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  setCurrentLocation(text);
                }}
              >
                <ListItemIcon>
                  {" "}
                  {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}{" "}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))}{" "}
          </List>
        }
        <Divider />
      </Drawer>
    </div>
  );
}
export default Minimap;
