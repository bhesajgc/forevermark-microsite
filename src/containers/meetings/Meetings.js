import React, { useEffect, useState } from "react";
// import { Statecontext } from "../../context/Dataprovider";
import MeetingHeader from "./MeetingHeader";
import MeetingDetail from "./MeetingDetail";
import { db } from "../../config/Firebase";
import firebase from "firebase";
import "./meetings.css";
import { useHistory } from "react-router-dom";

function Meetings() {
  const history = useHistory();
  const currentUser = firebase.auth().currentUser;
  // const state = useContext(Statecontext);
  // const [loading, setLoading] = useState(true);
  const [meetings, setMeetings] = useState([]);
  // const [vcs, setVcs] = useState([]);
  // const [slots, setSlots] = useState([]);
  // const [zones, setZones] = useState([]);
  // const [booths, setBooths] = useState([]);
  useEffect(() => {
    let isMounted = true;
    if (currentUser) {
      db.collection("meetings")
        .where("phoneNumber", "==", currentUser.phoneNumber)
        .get()
        .then((snap) => {
          let arr = [];
          // snap.docs.forEach(function (meet) {
          //   arr.push({ id: meet.id, value: meet.data() })
          // })
          snap.docs.map((meet) =>
            arr.push({ id: meet.id, value: meet.data() })
          );

          // setMeetings(snap.docs.map((doc) => {
          //   return doc.data();
          // }));
          if (isMounted) {
            setMeetings(arr);
          }
        });
    } else {
      history.push("/signin", { from: "/my-meetings" });
    }
    return () => {
      isMounted = false;
    };
  }, [currentUser, history]);

  // useEffect(() => {
  //   meetings?.forEach((item) => {
  //     item?.vc.get().then((snap) => {
  //       setVcs((prev) => [...prev, snap.data()]);
  //     });
  //     item?.slot.get().then((snap) => {
  //       setSlots((prev) => [
  //         ...prev,
  //         {
  //           startTime: new Date(snap.data().startTime * 1000),
  //           endTime: new Date(snap.data().endTime * 1000),
  //         },
  //       ]);
  //     });
  //   });
  //   return () => {
  //     setVcs([]);
  //     setSlots([]);
  //   };
  // }, [meetings]);

  // useEffect(() => {
  //   setBooths(
  //     vcs?.map((item) => {
  //       item.boothReference.get().then((snap1) => {
  //         return {
  //           name: snap1.data().boothName,
  //           zone: snap1.data().zoneReference,
  //         };
  //       });
  //     })
  //   );
  //   console.log(booths);
  //   return () => {
  //     setBooths([]);
  //   };
  // }, [vcs]);
  return (
    <div className="container">
      <MeetingHeader />
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
          My Meetings
        </h2>
        {console.log(meetings)}
        <div className="row">
          <div className="table-responsive">
            <table id="example" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Created At</th>
                  <th>Slot</th>
                  <th>Updated At</th>
                  <th>User</th>
                  <th>Representative</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((meet) => (
                  <MeetingDetail key={meet.id} details={meet.value} />
                ))}
                {/* {meetings?.map((item, index) => {
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
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetings;
