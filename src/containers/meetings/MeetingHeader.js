import React from "react";
import "./meetingHeader.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/Firebase";
// import firebase from "firebase";

function Header() {
    const history = useHistory();

    return (
        <div>
            <header className="header">
                <div
                    style={{ display: "flex" }}
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
                    <button onClick={() => {
                        auth.signOut();
                        history.push('/');
                    }}>
                        Log out{" "}
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;