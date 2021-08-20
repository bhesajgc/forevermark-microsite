import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MailIcon from "@material-ui/icons/Mail";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';
import AirplayOutlinedIcon from '@material-ui/icons/AirplayOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

const drawerWidth = 340;

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
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Minimap(props) {

  const { moveToWayPoint, open, handleMinimapClose, setCurrentLocation, minimapData } = props;
  const classes = useStyles();

  const [openList, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!openList);
  };

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
            <CloseOutlinedIcon />
          </IconButton>
        </div>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Level Two
            </ListSubheader>
          }
        >
          <ListItem button onClick={() => {
            setCurrentLocation('Auditorium');
          }}>
            <ListItemIcon>
              <AirplayOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Auditorium" />
          </ListItem>
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Level One
            </ListSubheader>
          }
        >
          <ListItem button onClick={() => {
            setCurrentLocation('fmWaypoint1');
          }}>
            <ListItemIcon>
              <AdjustOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="FM Zone" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <TableChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Partner Booths" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            {
              minimapData === null ? <div style={{ padding: '1rem' }}>Please wait while we load booths data</div> :
                <List className={classes.nested}>
                  {" "}
                  {minimapData.map((text, index) => (
                    <ListItem
                      button
                      key={text.id}
                      onClick={() => {
                        setCurrentLocation(text.id);
                      }}
                    >
                      <ListItemIcon>
                        <TableChartOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={text.name} />
                    </ListItem>
                  ))}{" "}
                </List>
            }
          </Collapse>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
export default Minimap;
