import React, { useEffect, useState } from "react";
import GuestTab from "../GuestTab/GuestTab";
import { db } from "../../../config/Firebase";

function Tab2({ booth, setGuest }) {
  const [guests, setGuests] = useState([]);
  const [active, setActive] = useState({});
  useEffect(() => {
    if (booth) {
      db.collection("vcs")
        .where("boothReference", "==", db.collection("booths").doc(booth))
        .get()
        .then((snapshot) => {
          setGuests(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                guestName: doc.data().name,
              };
            })
          );
        });
    }
    return () => {
      setGuests([]);
    };
  }, [booth]);
  return (
    <div className="row justify-content-center guest-container">
      <div className="col-sm-12">
        <div className="row justify-content-center">
          {guests.map((item) => {
            return (
              <GuestTab
                key={item.id}
                active={active}
                setActive={setActive}
                setGuest={setGuest}
                value={[item.id, item.guestName]}
                text={item.guestName}
              />
            );
          })}
        </div>
        <a href="#date-time" className="register-btn">
          Next
        </a>
      </div>
    </div>
  );
}

export default Tab2;
