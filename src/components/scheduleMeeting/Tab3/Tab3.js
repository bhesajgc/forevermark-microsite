import React, { useEffect, useState } from "react";
import TimeslotTab from "../TimeslotTab/TimeslotTab";
import { db } from "../../../config/Firebase";

function Tab3({ booth, setGuest, guest, setTimeslot }) {
  const [guests, setGuests] = useState([]);
  const [active, setActive] = useState({});
  const [timeslots, setTimeslots] = useState(null);
  const [navtabclass, setNavTabclass] = useState(["active", "", ""]);
  const [tabclass, setTabclass] = useState([
    "tab-pane fade show active",
    "tab-pane fade",
    "tab-pane fade",
  ]);

  useEffect(() => {
    if (booth) {
      db.collection("vcs")
        .where("boothReference", "==", db.collection("booths").doc(booth[0]))
        .get()
        .then((snapshot) => {
          // setGuests(
          snapshot.docs.map((document) => {
            // return {
            //   id: doc.id,
            //   guestName: doc.data().name,
            // };
            db.collection("slots")
              .where("vcReference", "==", db.collection("vcs").doc(document.id))
              .orderBy("startTime")
              .get()
              .then((snapshot2) => {
                setTimeslots(
                  snapshot2.docs.map((doc_slots) => {
                    return {
                      id: doc_slots.id,
                      startTime: new Date(doc_slots.data().startTime * 1000),
                      endTime: new Date(doc_slots.data().endTime * 1000),
                      status: doc_slots.data().status,
                    };
                  })
                );
              });
          });
          // );
        });
    }
  }, [booth]);

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}>
      <p>
        Scheduling Meeting with <span className="guestnm">{booth[1]}</span>
      </p>
      <div className="row">
        <div className="col-md-3">
          <ul className="nav nav-tabs tabs-left sideways">
            <li className={navtabclass[0]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavTabclass(["active", "", ""]);
                  setTabclass([
                    "tab-pane fade show active",
                    "tab-pane fade",
                    "tab-pane fade",
                  ]);
                }}
              >
                August 24, 2021
              </button>
            </li>
            <li className={navtabclass[1]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavTabclass(["", "active", ""]);
                  setTabclass([
                    "tab-pane fade ",
                    "tab-pane fade show active",
                    "tab-pane fade",
                  ]);
                }}
              >
                August 25, 2021
              </button>
            </li>
            <li className={navtabclass[2]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavTabclass(["", "", "active"]);
                  setTabclass([
                    "tab-pane fade ",
                    "tab-pane fade ",
                    "tab-pane fade show active",
                  ]);
                }}
              >
                August 26, 2021
              </button>
            </li>
          </ul>
        </div>

        <div className="col-md-9">
          <div className="tab-content">
            <div className={tabclass[0]} id="home-v">
              <div className="row justify-content-center">
                {timeslots?.map((item) => {
                  if (item.startTime.getDate() === 18)
                    return (
                      <TimeslotTab
                        key={item.id}
                        active={item.status !== "open"}
                        value={{
                          startTime: item.startTime,
                          endTime: item.endTime,
                        }}
                        setTimeslot={setTimeslot}
                      />
                    );
                })}
              </div>
            </div>
            <div className={tabclass[1]}>
              <div className="row justify-content-center">
                {timeslots?.map((item) => {
                  if (item.startTime.getDate() === 19)
                    return (
                      <TimeslotTab
                        key={item.id}
                        active={item.status !== "open"}
                        value={{
                          startTime: item.startTime,
                          endTime: item.endTime,
                        }}
                        setTimeslot={setTimeslot}
                      />
                    );
                })}
              </div>
            </div>
            <div className={tabclass[2]}>
              <div className="row justify-content-center">
                {timeslots?.map((item) => {
                  if (item.startTime.getDate() === 26)
                    return (
                      <TimeslotTab
                        key={item.id}
                        active={item.status !== "open"}
                        value={{
                          startTime: item.startTime,
                          endTime: item.endTime,
                        }}
                        setTimeslot={setTimeslot}
                      />
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#confirm-meeting" className="register-btn">
        Next
      </a>
    </div>
  );
}

export default Tab3;
