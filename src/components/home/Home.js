import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  return (
    <div className="container">
      <div className="explore">
        <h1 className="text-center">Explore the Forum!</h1>
        <button
          className="login_btn"
          onClick={(e) => {
            e.preventDefault();
            history.push("/signin");
          }}
        >
          Login Now
        </button>
        <h2>Still not registered!</h2>
        <button
          className="register_btn"
          onClick={(e) => {
            e.preventDefault();
            history.push("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
