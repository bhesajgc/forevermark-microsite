import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Signin from "../../components/login/signin/Signin";
import Otp from "../../components/login/otp/Otp";
import { useHistory, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const history = useHistory();
  const currentUser = firebase.auth().currentUser;
  const [check, setCheck] = useState(true);

  useEffect(() => {
    let isMounted = true;
    var loop = setInterval(() => {
      if (isMounted) {
        setCheck(!check);
      }
    }, 2000);
    if (currentUser && location.state) {
      history.push(location.state.from);
    }
    return () => {
      isMounted = false;
      clearInterval(loop);
    };
  }, [currentUser, history, check]);

  let LoginObject;
  const [loginObject, setLoginObject] = useState({
    confirm: null,
    object: "Signin",
  });
  if (loginObject.object === "otp")
    LoginObject = <Otp confirm={loginObject.confirm} />;
  else LoginObject = <Signin setObject={setLoginObject} />;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-7">
          {LoginObject}
          <div className="otp_container"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
