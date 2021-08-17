import React, { useEffect, useState } from "react";
import { db } from "../../../config/Firebase";

function Tab4({ guest, timeslot, zone }) {
  return (
    <div className="row justify-content-center confirmmeeting-wrap">
      <div className="col-md-8 col-lg-6">
        <i className="fas fa-user-friends usersicn"></i>
        <p>
          {guest ? guest[1] : ""} <span>{zone[1]}</span>
        </p>
        <div className="timeslot">
          <i className="far fa-clock"></i>{" "}
          {timeslot?.startTime.toLocaleString([], {
            hour: "numeric",
            minute: "numeric",
          }) +
            " - " +
            timeslot?.endTime.toLocaleString([], {
              hour: "numeric",
              minute: "numeric",
            })}
        </div>
        <div className="row justify-content-between btns-container">
          <div className="col">
            {" "}
            <a href="#date-time" className="register-btn back-btn">
              Back
            </a>
          </div>
          <div className="col">
            <a href="#" className="register-btn btn">
              Confirm Your Meeting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab4;
