import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScheduleNavbar({ navClass, setNavClass, setTabClasses }) {
  const location = useLocation();
  const hashed = location.hash;
  useEffect(() => {
    if (hashed === "#booth") {
      setNavClass(["nav-link active", "nav-link", "nav-link"]);
      setTabClasses([
        "tab-pane fade show active",
        "tab-pane fade ",
        "tab-pane fade ",
      ]);
    } else if (hashed === "#date-time") {
      setNavClass(["nav-link ", "nav-link active", "nav-link"]);
      setTabClasses([
        "tab-pane fade ",
        "tab-pane fade show active",
        "tab-pane fade ",
      ]);
    } else if (hashed === "#confirm-meeting") {
      setTabClasses([
        "tab-pane fade ",
        "tab-pane fade ",
        "tab-pane fade show active",
      ]);
      setNavClass(["nav-link ", "nav-link ", "nav-link active"]);
    }
  }, [hashed]);
  return (
    <ul
      className="nav justify-content-md-between justify-content-center"
      id="myTab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <a className={navClass[0]} href="#booth">
          Choose Booth
        </a>
      </li>
      {/* <li className="nav-item" role="presentation">
        <a className={navClass[1]} href="#guest">
          Choose Guest
        </a>
      </li> */}
      <li className="nav-item" role="presentation">
        <a className={navClass[1]} href="#date-time">
          Choose Date &amp; Time{" "}
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className={navClass[2]} href="#confirm-meeting">
          Confirm your meeting
        </a>
      </li>
    </ul>
  );
}

export default ScheduleNavbar;
