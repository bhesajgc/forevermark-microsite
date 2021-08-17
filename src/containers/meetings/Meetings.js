import React, { useEffect, useContext, useState } from "react";
import { Statecontext } from "../../context/Dataprovider";
import { db } from "../../config/Firebase";
import "./meetings.css";

function Meetings() {
  const state = useContext(Statecontext);
  const [meetings, setMeetings] = useState(null);
  const [vcs, setVcs] = useState([]);
  const [slots, setSlots] = useState([]);
  const [zones, setZones] = useState([]);
  const [booths, setBooths] = useState([]);
  useEffect(() => {
    {
      db.collection("meetings")
        .where(
          "user",
          "==",
          db.collection("users").doc("isEoSYzaW1Yh90KZApPvCPWQRNH2")
        )
        .onSnapshot((snap) => {
          setMeetings(
            snap.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    }
    return () => {
      setMeetings([]);
    };
  }, []);

  useEffect(() => {
    meetings?.forEach((item) => {
      item?.vc.get().then((snap) => {
        setVcs((prev) => [...prev, snap.data()]);
      });
      item?.slot.get().then((snap) => {
        setSlots((prev) => [
          ...prev,
          {
            startTime: new Date(snap.data().startTime * 1000),
            endTime: new Date(snap.data().endTime * 1000),
          },
        ]);
      });
    });
    return () => {
      setVcs([]);
      setSlots([]);
    };
  }, [meetings]);

  useEffect(() => {
    setBooths(
      vcs?.map((item) => {
        item.boothReference.get().then((snap1) => {
          return {
            name: snap1.data().boothName,
            zone: snap1.data().zoneReference,
          };
        });
      })
    );
    console.log(booths);
    return () => {
      setBooths([]);
    };
  }, [vcs]);
  return (
    <div className="container">
      <div className="abt-event meetings">
        <h2
          style={{
            fontFamily: "Didot-HTF-L42",
            fontSize: "27.5px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
          className="text-center"
        >
          My Meeting
        </h2>
        <div className="row">
          <div className="table-responsive">
            <table id="example" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Zone</th>
                  <th>Booth</th>
                  <th>VC Name</th>
                  <th>Date &amp; Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {meetings?.map((item, index) => {
                  return (
                    <tr key={item.createdAt}>
                      <td>Zone 1</td>
                      <td>{booths ? booths[index]?.name : ""}</td>
                      <td>{vcs ? vcs[index]?.name : ""}</td>
                      <td>
                        {slots[index]?.startTime.toLocaleDateString([], {
                          month: "long",
                          day: "numeric",
                        }) +
                          " || " +
                          slots[index]?.startTime.toLocaleString([], {
                            hour: "numeric",
                            minute: "numeric",
                          }) +
                          " - " +
                          slots[index]?.endTime.toLocaleString([], {
                            hour: "numeric",
                            minute: "numeric",
                          })}
                      </td>
                      <td>
                        <span
                          className={
                            item.approvalStatus
                              ? " badge badge-success"
                              : item.status === "cancelled"
                              ? "badge badge-danger"
                              : "badge badge-warning"
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetings;
