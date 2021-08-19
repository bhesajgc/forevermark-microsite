import React from "react";
import { useHistory } from "react-router-dom";
// import Logo from "../../images/logo.png";
import speaker_1 from "../../images/speaker-1.png";
import speaker_2 from "../../images/speaker-2.png";
import "../agenda/Agenda";

function Speakers() {
    const history = useHistory();
    return (
        // <div className="container-fluid">
        <div className="agenda_container">
            <div className="cmn-container">
                <div className="abt-event">
                    <div className="speaker_header">
                        <span className='speaker_heading'>
                            <h2
                                style={{
                                    // fontFamily: "Didot-HTF-L42",
                                    // fontWeight: "bold",
                                    fontSize: "27.5px",
                                    color: 'white'
                                }}
                            >
                                FORUM SPEAKERS
                            </h2>
                        </span>
                        <span style={{ color: "white", paddingTop: "28px" }}>25 August 2021</span>
                    </div>
                    <div className='speakers'>
                        <div className='speakerInfo'>
                            <span><img src={speaker_1} alt='luc julia' className='speakerImage' /></span>
                            <div className='speakerData'>
                                <h3 style={{ color: "orange", fontWeight: "bold" }}>Cdr Abhilash Tomy</h3>
                                <span>Former Indian Naval Officer and Sailor. First Indian to
                                    complete a solo, non-stop circumnavigation of the world
                                    under sail.</span>
                            </div>
                        </div>
                        <div className='speakerInfo'>
                            <span><img src={speaker_2} alt='luc julia' className='speakerImage' /></span>
                            <div className='speakerData'>
                                <h3 style={{ color: "orange", fontWeight: "bold" }}>Dr. Luc Julia</h3>
                                <span>Co-creator of the Apple voice assistant SIRI and
                                    Recipient of Legion d'Honneur, the highest order of
                                    France, also recognized as one of the top 100 most
                                    influential French developers in the digital world.</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn-cont-speaker">
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
        // </div>
    );
}

export default Speakers;