import React, { useContext } from "react";
import "./header.css";
import { Statecontext } from "../../context/Dataprovider";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/Firebase";
// import firebase from 'firebase';

function Header({ logo }) {
  // const currentUser = firebase.auth().currentUser;
  const state = useContext(Statecontext)[0];
  const history = useHistory();
  // const [optionsShow, setOptionsShow] = useState(false);
  // const [check, setCheck] = useState(true);

  // useEffect(() => {
  //   let isMounted = true;
  //   var loop = setInterval(() => {
  //     if (isMounted) {
  //       setCheck(!check)
  //     }
  //   }, 2000)
  //   if (currentUser && isMounted) {
  //     setOptionsShow(true);
  //   }
  //   return () => {
  //     isMounted = false
  //     clearInterval(loop)
  //   }
  // }, [currentUser, check])

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />{" "}
        </a>
        <div
          style={{ display: state?.user ? "flex" : "none" }}
          className="side_menu"
        >
          {/* <a
            onClick={(e) => {
              e.preventDefault();
              history.push("/my-meetings");
            }}
          >
            My meetings
          </a> */}
          {/* <span>|</span> */}
          <button onClick={() => {
            auth.signOut();
            history.push('/');
          }}>
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
