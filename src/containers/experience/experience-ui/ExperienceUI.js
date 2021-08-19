import { Grid } from "@material-ui/core";
import "./ExperienceUI.css";
import Fab from "@material-ui/core/Fab";
import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import AirplayOutlinedIcon from "@material-ui/icons/AirplayOutlined";
import SideMenu from "../../../components/sidemenu/SideMenu";
import CustomModal from '../../../components/modal/CustomModal';
import Minimap from '../../../components/miniMap/Minimap';

const ExperienceUI = (props) => {

  const {setCurrentLocation, minimapData} = props;
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const [openMinimap, setOpenMinimap] = React.useState(false);

  const handleModalOpen = (data) => {
    setOpenModal(true);
    setModalData(data);
  }

  const handleMinimapClose = () => setOpenMinimap(false);
  const toggleMinimap = () => setOpenMinimap(!openMinimap);
  const goToHome = () => console.log('asdasd')

  return (
    <>
      <SideMenu />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        id={"btn-controls"}
        spacing={2}
      >
        <Grid item>
          <Fab color="primary" aria-label="add" size="large" onClick={() => handleModalOpen('https://www.youtube.com/watch?v=_ZSTUGLOIzM')}>
            <AirplayOutlinedIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="add" size="large" onClick={toggleMinimap}>
            <MapOutlinedIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="add" size="large" onClick={() => setCurrentLocation('Home')}>
            <HomeOutlinedIcon />
          </Fab>
        </Grid>
      </Grid>

      <Minimap open={openMinimap} minimapData = {minimapData} setCurrentLocation={setCurrentLocation} handleMinimapClose={handleMinimapClose}/>

      <CustomModal
        url={modalData}
        show={openModal}
        onHide={() => setOpenModal(false)}
      />

    </>
  );
};

export default ExperienceUI;
