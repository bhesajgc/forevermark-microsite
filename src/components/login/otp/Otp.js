import React, { useState, useContext } from "react";
import { Statecontext } from "../../../context/Dataprovider";
import { useHistory } from "react-router-dom";

function Otp({ confirm }) {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const [state, dispatch] = useContext(Statecontext);
  const handleVerify = (e) => {
    e.preventDefault();
    confirm
      .confirm(value)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        dispatch({ type: "ADD USER", item: user });
        history.push("/");
        // ...
      })
      .catch((error) => {
        alert("Bad verification code");
      });
  };
  return (
    <div>
      <form className="ng-untouched ng-pristine ng-invalid">
        <div className="form-group row cmn-form-field justify-content-center">
          <label htmlFor="mobile" className="col-sm-2 col-form-label">
            <span>*</span>
            OTP
          </label>
          <div className="col-8 col-sm-6">
            <input
              type="tel"
              maxLength="6"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="form-control ng-untouched ng-pristine ng-invalid"
            />
          </div>
          <div className="row justify-content-end">
            <div className="col-12">
              <input
                type="submit"
                className="cmn-register-btn text-uppercase "
                disabled={value.length < 6}
                onClick={handleVerify}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Otp;
