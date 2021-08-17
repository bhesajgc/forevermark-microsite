import React, { useContext } from "react";
import "./header.css";
import { Statecontext } from "../../context/Dataprovider";
import { useHistory } from "react-router-dom";

function Header({ logo }) {
  const state = useContext(Statecontext)[0];
  const history = useHistory();
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />{" "}
        </a>
        <div
          style={{ display: state.user ? "flex" : "none" }}
          className="side_menu"
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              history.push("/my-meetings");
            }}
          >
            My meetings
          </a>
          <span>|</span>
          <button>
            <span
              style={{ marginRight: "5px", fontSize: "inherit" }}
              className="material-icons"
            >
              power_settings_new
            </span>
            Log out{" "}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
