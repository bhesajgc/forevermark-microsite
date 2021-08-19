import React, { useState, useEffect } from "react";
import "./meetings.css";
// import { db } from "../../config/Firebase";

const MeetingDetail = ({ details }) => {
  const [user, setUser] = useState("");
  const [representative, setRepresentative] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  useEffect(() => {
    details.user
      ?.get()
      .then((userData) => {
        if (userData.exists) {
          let name = userData.data().firstName + userData.data().lastName;
          setUser(name);
        }
      })
      .catch((error) => alert(error.message));
    details.slot
      ?.get()
      .then((slotData) => {
        if (slotData.exists) {
          let name =
            new Date(slotData.data().startTime).toISOString().substr(0, 19) +
            " || " +
            new Date(slotData.data().endTime).toISOString().substr(0, 19);
          setSelectedSlot(name);
        }
      })
      .catch((error) => alert(error.message));
    details.vc
      ?.get()
      .then((repData) => {
        if (repData.exists) {
          let name = repData.data().name;
          setRepresentative(name);
        }
      })
      .catch((error) => alert(error.message));
  }, [details]);

  return (
    <tr>
      {console.log(details)}
      <td>{details.createdAt}</td>
      <td>{selectedSlot}</td>
      <td>{details.updatedAt}</td>
      <td>{user}</td>
      <td>{representative}</td>
      <td>
        <span
          className={
            details.status === "approved"
              ? " badge badge-success"
              : details.status === "cancelled"
              ? "badge badge-danger"
              : details.status === "rescheduled"
              ? "badge badge-resheduled"
              : "badge badge-warning"
          }
        >
          {details.status}
        </span>
      </td>
    </tr>
  );
};

export default MeetingDetail;
