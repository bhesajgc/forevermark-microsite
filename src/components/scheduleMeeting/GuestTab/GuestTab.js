import React from "react";

function GuestTab({ text, setGuest, value }) {
  return (
    <div className="col-lg-3 col-md-6">
      <button
        onClick={(e) => {
          e.preventDefault();
          setGuest(value);
        }}
        className="guest-wrap"
      >
        <div className="row nomargin align-items-center">
          <div className="col-md-3 col-2">
            <i className="fa fa-user"></i>
          </div>
          <div className="col-md-9 col-10">
            <p>{text} </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default GuestTab;
