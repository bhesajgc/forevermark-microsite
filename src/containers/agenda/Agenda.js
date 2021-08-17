import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./agenda.css";

function Agenda() {
  const [navclasses, setNavclasses] = useState([
    "nav-link active",
    "nav-link",
    "nav-link",
  ]);
  const [tabClassess, setTabClasses] = useState([
    "tab-pane fade show active",
    "tab-pane fade ",
    "tab-pane fade ",
  ]);
  const history = useHistory();
  return (
    <div className="container">
      <div class="row justify-content-center agenda_container">
        <div class="col-md-10">
          <div class="cmn-container">
            <div className="abt-event">
              <h2
                style={{
                  fontFamily: "Didot-HTF-L42",
                  fontWeight: "bold",
                  fontSize: "27.5px",
                }}
              >
                Forum Agenda
              </h2>
              <ul
                className="nav justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNavclasses([
                        "nav-link active",
                        "nav-link",
                        "nav-link",
                      ]);
                      setTabClasses([
                        "tab-pane fade show active",
                        "tab-pane fade ",
                        "tab-pane fade ",
                      ]);
                    }}
                    className={navclasses[0]}
                  >
                    24th August, 2021
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNavclasses([
                        "nav-link ",
                        "nav-link active",
                        "nav-link",
                      ]);
                      setTabClasses([
                        "tab-pane fade ",
                        "tab-pane fade show active",
                        "tab-pane fade ",
                      ]);
                    }}
                    className={navclasses[1]}
                  >
                    25th August, 2021
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNavclasses([
                        "nav-link ",
                        "nav-link",
                        "nav-link active",
                      ]);
                      setTabClasses([
                        "tab-pane fade ",
                        "tab-pane fade ",
                        "tab-pane fade show active",
                      ]);
                    }}
                    className={navclasses[2]}
                  >
                    26th August, 2021
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className={tabClassess[0]}>
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="starttm">
                          <span className="time_header">Time</span>
                        </th>
                        <th scope="col">
                          <span className="programme_header">Programme</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="time-cell" align="center">
                          10:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>FORUM 2021 COMMENCES </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          11:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>KEYNOTE SPEECHES</strong>
                          <ul>
                            <li>Sachin Jain, Managing Director, De Beers</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          12:30 - 13:30
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>LUNCH</strong>
                          <ul>
                            <li>Venue: Pre function</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          13:30 - 19:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          19:00 Onwards
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>DINNER</strong>
                          <ul>
                            <li>Venue: Pre function</li>
                          </ul>
                        </td>
                      </tr>
                      {/* <tr className="border">
                        <td align="center" className="bgcolor">
                          12:45 - 18:00
                        </td>
                        <td style={{ paddingLeft: "25px" }} className="bgcolor">
                          Explore all the exciting Zones of the Forum
                          <br />
                          Interact with the Forevermark Manufacturers and
                          Diamantaires
                          <br />
                          View the latest Jewellery Collections and Loose
                          Diamonds, Book Orders and Send Enquiries
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className={tabClassess[1]}>
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="starttm">
                          <span>Time</span>
                        </th>
                        <th scope="col">
                          <span>Programme</span>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="time-cell" align="center">
                          10:00-10:30
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          {" "}
                          <strong>KEYNOTE SPEECH</strong>
                          <ul>
                            <li>Sachin Jain, Managing Director, De Beers</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          10:30 - 11:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>FOREVERMARK KNOWLEDGE SERIES</strong>
                          <ul>
                            <li>
                              The Knowledge Series presents new ideas and fresh
                              prespectives from outside our industry,so you can
                              continue to innovate and delight your customers{" "}
                            </li>
                          </ul>
                          <br />
                          Speaker: TBD
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          11:00 onwards
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          13:00 - 14:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>LUNCH</strong>
                          <ul>
                            <li>Venue: Pre function</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          14:00 - 19:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          19:00 onwards
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>DINNER</strong>
                          <ul>
                            <li>Venue: Pre function</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={tabClassess[2]}>
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="starttm">
                          <span>Time</span>
                        </th>
                        <th scope="col">
                          <span>Programme</span>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="time-cell" align="center">
                          10:00-10:30
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          {" "}
                          <strong>KEYNOTE SPEECH</strong>
                          <ul>
                            <li>Sachin Jain, Managing Director, De Beers</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          10:30 - 11:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>FOREVERMARK KNOWLEDGE SERIES</strong>
                          <ul>
                            <li>
                              The Knowledge Series presents new ideas and fresh
                              prespectives from outside our industry,so you can
                              continue to innovate and delight your customers{" "}
                            </li>
                          </ul>
                          <br />
                          Speaker: TBD
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          11:00 onwards
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          13:00 - 14:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>LUNCH</strong>
                          <ul>
                            <li>Venue: Pre function</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          14:00 - 19:00
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="time-cell" align="center">
                          19:00 onwards
                        </td>
                        <td style={{ paddingLeft: "25px" }}>
                          <strong>DINNER</strong>
                          <ul>
                            <li>Venue: Pre function</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/register");
                  }}
                  className="cmn-register-btn"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
