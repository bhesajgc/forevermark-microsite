import React, { useState, useEffect } from "react";
import "./signin.css";
import CallingCodeSelect from "../../callingcodeSelect/CallingCodeSelect";
import { auth } from "../../../config/Firebase";
import firebase from "firebase";

function Signin({ setObject }) {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("91");

  const signIn = (e) => {
    e.preventDefault();
    let recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    auth
      .signInWithPhoneNumber("+" + countryCode + phone, recaptchaVerifier)
      .then((confirm) => {
        setObject({ confirm: confirm, object: "otp" });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="cmn-container">
      <h2 style={{ fontFamily: "Didot-HTF-L42" }}>Sign-In for the Event</h2>
      <p className="small-txt text-center">
        {" "}
        Sign in using your mobile number registered with us to proceed to the
        Forevermark event.{" "}
      </p>
      <div className="sigin-container">
        <form className="ng-untouched ng-pristine ng-invalid">
          <div className="form-group row cmn-form-field">
            <label htmlFor="mobile" className="col-sm-2 col-form-label">
              <span>*</span>
              Mobile
            </label>
            <div className="col-4 col-sm-4 mb-2">
              <CallingCodeSelect
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
            </div>
            <div className="col-8 col-sm-6">
              <input
                type="tel"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control ng-untouched ng-pristine ng-invalid"
              />
              <div>
                {phone.length !== 10 || isNaN(phone) === true ? (
                  <p className="validation-error">
                    {" "}
                    Please enter a valid mobile number.{" "}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-12">
              <input
                type="submit"
                onClick={signIn}
                className="cmn-register-btn text-uppercase "
                disabled={phone.length !== 10 || isNaN(phone) === true}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div style={{ width: "50%" }} id="recaptcha-container"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
