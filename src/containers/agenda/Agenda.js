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
    "tab-pane col-lg-4 col-sm-12 col-md-12  active",
    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
  ]);
  const history = useHistory();
  return (
    // <div className="container-fluid">
    <div className="agenda_container">
      <div className="cmn-container">
        <div className="abt-event">
          <div className="agenda_header">
            <h2
              style={{
                // fontFamily: "Didot-HTF-L42",
                // fontWeight: "bold",
                fontSize: "27.5px",
              }}
            >
              Forum Agenda
            </h2>
            <button onClick={(e) => {
              e.preventDefault();
              history.push("/speakers");
            }}>FORUM SPEAKERS</button>
          </div>
          <ul
            className="nav justify-content-center mt-3"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNavclasses(["nav-link active", "nav-link", "nav-link"]);
                  setTabClasses([
                    "tab-pane col-lg-4 col-sm-12 col-md-12  active",
                    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
                    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
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
                  setNavclasses(["nav-link ", "nav-link active", "nav-link"]);
                  setTabClasses([
                    "tab-pane col-lg-4 col-sm-12 col-md-12 ",
                    "tab-pane col-lg-4 col-sm-12 col-md-12  active",
                    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
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
                  setNavclasses(["nav-link ", "nav-link", "nav-link active"]);
                  setTabClasses([
                    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
                    "tab-pane col-lg-4 col-sm-12 col-md-12  ",
                    "tab-pane col-lg-4 col-sm-12 col-md-12 active",
                  ]);
                }}
                className={navclasses[2]}
              >
                26th August, 2021
              </button>
            </li>
          </ul>
          <div className=" row tab-content" id="myTabContent">
            <div className={tabClassess[0]}>
              <table className="table">
                <tr className="tab_header">
                  <th>DAY 1</th>
                  <th>24th August 2021</th>
                  {/* <th style={{ width: '150px' }}>VIEW SPEAKERS</th> */}
                </tr>
                <tbody>
                  <tr>
                    <td className="time-cell" align="left">
                      10:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>FORUM 2021 COMMENCES </strong>
                    </td>
                    {/* <td> </td> */}
                  </tr>
                  <tr>
                    <td className="time-cell" align="left">
                      11:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>KEYNOTE SPEECHES</strong>
                      <ul>
                        <li>Sachin Jain, Managing Director, De Beers</li>
                      </ul>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="time-cell" align="left">
                      12:30 - 13:30
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>LUNCH</strong>
                      <ul>
                        <li>Venue: Pre function</li>
                      </ul>
                    </td>
                  </tr> */}
                  <tr>
                    <td className="time-cell" align="left">
                      12:30 - 19:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="time-cell" align="left">
                      19:00 Onwards
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>DINNER</strong>
                      <ul>
                        <li>Venue: Pre function</li>
                      </ul>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div
              style={{ backgroundColor: "#f9eee7" }}
              className={tabClassess[1]}
            >
              {/* <div
                style={{ backgroundColor: "#f4ded1" }}
                className="tab_header"
              >
                <span>DAY 1</span>
                <span>24th August 2021</span>
                <span>VIEW SPEAKERS</span>
              </div> */}
              <table className="table">
                <tr className="tab_header">
                  <th>DAY 1</th>
                  <th>
                    25th August 2021
                    <span style={{ marginLeft: "60px" }}>VIEW SPEAKERS</span>
                  </th>
                </tr>
                <tbody>
                  {/* <tr>
                    <td className="time-cell" align="left">
                      10:00-10:30
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      {" "}
                      <strong>KEYNOTE SPEECH</strong>
                      <ul>
                        <li>Sachin Jain, Managing Director, De Beers</li>
                      </ul>
                    </td>
                  </tr> */}
                  <tr>
                    <td className="time-cell" align="left">
                      10:30 - 12:00
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
                      <strong>Speaker: CDR ABHILASH TOMY</strong><br />
                      Former Indian Naval Officer and Sailor. First Indian to
                      complete a solo, non-stop circumnavigation of the world
                      under sail
                      <br />
                      <strong>Speaker: DR. LUC JULIA</strong><br />
                      Co-creator of the Apple voice assistant SIRI and
                      Recipient of Legion d'Honneur, the highest order of
                      France, also recognized as one of the top 100 most
                      influential French developers in the digital world.
                    </td>
                  </tr>
                  <tr>
                    <td className="time-cell" align="left">
                      12:00 noon - 19:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="time-cell" align="left">
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
                    <td className="time-cell" align="left">
                      14:00 - 19:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="time-cell" align="left">
                      19:00 onwards
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>DINNER</strong>
                      <ul>
                        <li>Venue: Pre function</li>
                      </ul>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className={tabClassess[2]}>
              {/* <div className="tab_header">
                <span>DAY 1</span>
                <span>24th August 2021</span>
                <span>VIEW SPEAKERS</span>
              </div> */}
              <table className="table">
                <tr className="tab_header">
                  <th>DAY 3</th>
                  <th>26th August 2021</th>
                  {/* <th style={{ width: '150px' }}>VIEW SPEAKERS</th> */}
                </tr>
                <tbody>
                  {/* <tr>
                    <td className="time-cell" align="left">
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
                    <td className="time-cell" align="left">
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
                    <td className="time-cell" align="left">
                      11:00 onwards
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="time-cell" align="left">
                      13:00 - 14:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>LUNCH</strong>
                      <ul>
                        <li>Venue: Pre function</li>
                      </ul>
                    </td>
                  </tr> */}
                  <tr>
                    <td className="time-cell" align="left">
                      10:00 - 19:00
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>BUSINESS AND NETWORKING MEETINGS</strong>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="time-cell" align="left">
                      19:00 onwards
                    </td>
                    <td style={{ paddingLeft: "25px" }}>
                      <strong>DINNER</strong>
                      <ul>
                        <li>Venue: Pre function</li>
                      </ul>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="btn-cont">
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
    // </div>
  );
}

export default Agenda;
