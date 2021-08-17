import React, { useState } from "react";
import Signin from "../../components/login/signin/Signin";
import Otp from "../../components/login/otp/Otp";

function Login() {
  let LoginObject;
  const [loginObject, setLoginObject] = useState({confirm:null,object:"Signin"});
  if (loginObject.object === "otp") LoginObject = <Otp confirm={loginObject.confirm} />;
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
