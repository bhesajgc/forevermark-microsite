import React, { useEffect, useState } from "react";

function TimeslotTab({ value, active, setTimeslot }) {
  const [classes, setclasses] = useState("timeslot");

  useEffect(() => {
    if (active) setclasses("timeslot active");
  }, [active]);

  return (
    <div className="col-md-4 col-6">
      <button
        onClick={(e) => {
          e.preventDefault();
          if (!active) {
            setTimeslot(value);
          } else setTimeslot(null);
        }}
        className={classes}
      >
        <i className="far fa-clock"></i>{" "}
        {value?.startTime?.toLocaleString([], {
          hour: "numeric",
          minute: "numeric",
        }) +
          " - " +
          value?.endTime?.toLocaleString([], {
            hour: "numeric",
            minute: "numeric",
          })}
      </button>
    </div>
  );
}

export default TimeslotTab;
