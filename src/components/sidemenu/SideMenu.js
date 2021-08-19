import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import AirplayOutlinedIcon from "@material-ui/icons/AirplayOutlined";
import Fab from "@material-ui/core/Fab";
import Fade from "@material-ui/core/Fade";
import { Paper } from "@material-ui/core";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import "./SideMenu.css";
import CustomModal from '../modal/CustomModal';
import TutorialPopup from '../tutorial-popup/TutorialPopup';
import ForeverMarkLogo  from '../loading-screen/assets/forevermark_logo.png';
import AirplayIcon from '@material-ui/icons/Airplay';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';

const ITEM_HEIGHT = 120;

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const [tutorialOpen, setTutorialOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = (data) => {
    setOpenModal(true);
    setModalData(data);
    handleClose();
  }

  const handleTutorialOpen = () => {
    setTutorialOpen(true);
    handleClose();
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        size="large"
        onClick={handleClick}
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
      >
        <MenuIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "300px",
            background: "rgba(255, 255, 255, 0.35)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            backdropFilter: "saturate(180%) blur(20px)",
            boxShadow: "none",
          },
        }}
        TransitionComponent={Fade}
      >
        <MenuItem>
          <Paper id={"menu-hero-content"} elevation={0}>
            <img src={ForeverMarkLogo} style={{
              "height": "86px",
              "borderRadius": "4px"
            }}/>
          </Paper>
        </MenuItem>
        <MenuItem onClick={() => handleModalOpen('https://www.youtube.com/watch?v=_ZSTUGLOIzM')}>
          <Paper id={"menu-items"} elevation={0}>
            <AdjustOutlinedIcon id={'menu-item-icon'}/>
            FM Zone
          </Paper>
        </MenuItem>
        <MenuItem onClick={() => handleModalOpen('https://www.youtube.com/watch?v=_ZSTUGLOIzM')}>
          <Paper id={"menu-items"} elevation={0}>
            <AirplayIcon id={'menu-item-icon'}/>
            Auditorium
          </Paper>
        </MenuItem>
        <MenuItem onClick={() => handleModalOpen('https://www.youtube.com/watch?v=_ZSTUGLOIzM')}>
          <Paper id={"menu-items"} elevation={0}>
            <EventNoteOutlinedIcon id={'menu-item-icon'}/>
            Agenda
          </Paper>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Paper id={"menu-items"} elevation={0}>
            <EqualizerOutlinedIcon id={'menu-item-icon'}/>
            Leaderboard
          </Paper>
        </MenuItem>
        <MenuItem onClick={handleTutorialOpen}>
          <Paper id={"menu-items"} elevation={0}>
            <HelpOutlineIcon id={'menu-item-icon'}/>
            Help
          </Paper>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Paper id={"menu-items"} elevation={0}>
            <ExitToAppOutlinedIcon id={'menu-item-icon'}/>
            Log out
          </Paper>
        </MenuItem>
      </Menu>
      <CustomModal
        url={modalData}
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
      <TutorialPopup
        open = {tutorialOpen}
        handleClose = {() => setTutorialOpen(false)}
      />
    </div>
  );
}
