import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const [classes, setClasses] = useState([
    "text-uppercase",
    "text-uppercase ",
    "text-uppercase ",
    "text-uppercase ",
  ]);
  useEffect(() => {
    let newClasses = [...classes];
    newClasses[location.state?.active] = "text-uppercase active";
    setClasses(newClasses);
  }, []);
  return (
    <ul className="cmn-menu ">
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: "/about",
              state: {
                active: 0,
              },
            });
          }}
          className={classes[0]}
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: "/agenda",
              state: {
                active: 1,
              },
            });
          }}
          className={classes[1]}
        >
          Agenda
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: "/comming-soon",
              state: {
                active: 2,
              },
            });
          }}
          className={classes[2]}
        >
          Schedule a Meeting
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: "/contact-us",
              state: {
                active: 3,
              },
            });
          }}
          className={classes[3]}
        >
          Contact Us
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
