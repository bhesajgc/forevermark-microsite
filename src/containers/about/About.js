import React from "react";
import "./about.css";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  return (
    <div style={{ padding: "0 10%" }} className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="cmn-container">
            <div className="abt-event">
              <h2 style={{ fontFamily: "Didot-HTF-L42",fontWeight:'bold', fontSize: "27.5px" }}>
                About the Event
              </h2>
              <p>
                Diamonds bring beauty to the world and ours at Forevermark shine
                with an unparalleled brilliance. At Forevermark, brilliance is
                thought of in a more meaningful way for the people and places
                involved in a diamond’s journey. Living life to one's fullest,
                thriving and resilient communities in a world that is fairer,
                safer and more transparent makes for a brilliant life - but to
                see this brilliance in our future, we must take action in our
                present. The Forevermark Forum is a virtual space where we work
                side-by-side with our communities to build a new brilliant world
                where people see our diamonds as a deeply trusted and cherished
                symbol worthy of their love and joy. Together, let's make life
                brilliant.
              </p>
              <p>
                This year, the 10th Forevermark Forum, is presented to you ‘just
                click away’! Witness a plethora of activities over 3 eventful
                days. Interact with the senior management of the De Beers team,
                transact with 20 leading authorized diamantaires and
                manufacturers from around the country, witness over 1500 designs
                inspired from the Trends of 2022, know all about the new
                campaigns and iconic collections to be launched, gain a new
                perspective of business from our globally renowned entrepreneurs
                at our Knowledge Series, understand the evolved consumer through
                our latest insight report, discover how to maximize your digital
                marketing and much more. All of this, from the comfort of your
                own home this August!
              </p>
              <p>
                De Beers Forevermark is a diamond brand from De Beers Group,
                with a history of diamond expertise spanning back more than 130
                years. It takes a special diamond to be a Forevermark - each
                being selected after rigorous testing and scrutiny. Inscribed at
                the heart of every Forevermark diamond comes the promise that
                each diamond is natural, hand-selected and that it is beautiful,
                rare and responsibly sourced.
              </p>
              <p>
                Learn more about us:{" "}
                <a
                  href="http://www.forevermark.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.forevermark.com
                </a>{" "}
                |{" "}
                <a
                  href="http://www.debeersgroup.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.debeersgroup.com
                </a>
              </p>
              <p>
                Catch a glimpse of our previous Forums here:{" "}
                <a href="https://www.youtube.com/watch?v=pd9JRyIa0BE">2020</a> | <a href="https://www.youtube.com/watch?v=4doovnI1y9I">2019</a> |{" "}
                <a href="https://www.youtube.com/watch?v=kVPmwmRwHTs">2018</a> 
              </p>
              <button
                className="cmn-register-btn"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/register");
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
