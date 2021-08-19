import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
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
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    opacity: 0.7,
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  ButtonMenuIcon: {
    position: 'fixed',
    backgroundColor: 'black',
    color: 'white',
    height: '60px',
    borderRadius: '30px',
    marginLeft: '10px',
    marginTop: '10px',
  },
  MyBoothList: {
    backgroundColor: 'black',
    marginBottom: '5px',
    color: '#f9faf2',
    hover: 'none'
  },
  MyListButton: {

    hover: 'none',
    marginBottom: '2px',
    backgroundColor: '#78b086'
  }


}));

function Minimap({ moveToWayPoint }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={
      classes.root
    }>
      <Button className={
        classes.ButtonMenuIcon
      }
        position="fixed">
        <MenuIcon color="inherit" aria-label="open drawer"
          className={classes.ButtonIcon}
          onClick={handleDrawerOpen}
          edge="start" />
      </Button>
      <Drawer className={
        classes.drawer
      }
        variant="persistent"
        anchor="left"
        open={open}
        classes={
          { paper: classes.drawerPaper }
        }>
        <div className={
          classes.drawerHeader
        }>
          <IconButton onClick={handleDrawerClose}>
            {
              theme.direction === 'ltr' ? (
                <ChevronLeftIcon />) : (
                <ChevronRightIcon />)
            } </IconButton>
        </div>
        <Divider />
        <List className={classes.MyBoothList}> {
          [
            'Booth 1',
            'Booth 2',
            'Booth 3',
            'Booth 4',
            'Booth 5',
            'Booth 6',
            'Booth 7',
            'Booth 8',
            'Booth 9',
            'Booth 10',
            'Booth 11',
            'Booth 12',
            'Booth 13',
            'Booth 14',
            'Booth 15',
            'Booth 16',
            'Booth 17',
            'Booth 18'
          ].map((text, index) => (
            <ListItem button
              className={classes.MyListButton}
              key={text}
              onClick={
                () => {
                  moveToWayPoint(text);
                }
              }>
              <ListItemIcon> {
                index % 2 === 0 ? <InboxIcon /> : <MailIcon />
              } </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))
        } </List>

        <Divider />
      </Drawer>
    </div>
  );

}
export default Minimap;
