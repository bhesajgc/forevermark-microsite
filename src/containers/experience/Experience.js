import React, { Component } from "react";
import Viewer from "./scene/Viewer";
import ExperienceUI from "./experience-ui/ExperienceUI";

const Studio = () => {

  const [currentLocation, setCurrentLocation] = React.useState('Home');
  const [minimapData, setMinimapData] = React.useState(null);
  return (
    <div>
      <Viewer currentLocation={currentLocation} setMinimapData={setMinimapData} />
      <ExperienceUI setCurrentLocation={setCurrentLocation} minimapData={minimapData} />
    </div>
  );
}

export default Studio;
