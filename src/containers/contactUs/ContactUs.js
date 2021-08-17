import React from "react";
import "./contact.css";

function ContactUs() {
  return (
    <div className="contact-content">
      <div className="text-center cmn-queries">
        <h2>
          For any technical queries:
          <a href="tel:+91 080 4718 6644" className="cmn-link">
            +91 080 4718 6644
          </a>
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">EAST</span>{" "}
              <span>Prasenjit Basu</span>
              <a href="mailto:Prasenjit.Basu@forevermark.com">
                Prasenjit.Basu@forevermark.com
              </a>
              <a href="tel:+91 9830130965" className="cmn-link">
                +91 9830130965
              </a>
            </h2>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">SOUTH</span>
              <span>Rajesh Rajagopalan</span>
              <a href="mailto:Rajesh.RajaGopalan@forevermark.com">
                Rajesh.RajaGopalan@forevermark.com
              </a>
              <a href="tel:+91 9344383188" className="cmn-link">
                +91 9344383188
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">NORTH</span>
              <span>Anand Mall</span>
              <a href="mailto:Anand.Mall@forevermark.com">
                Anand.Mall@forevermark.com
              </a>
              <a href="tel:+91 9810291696" className="cmn-link">
                +91 9810291696
              </a>
            </h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">WEST</span>
              <span>Ankesh Jain</span>
              <a href="mailto:Ankesh.Jain@forevermark.com">
                Ankesh.Jain@forevermark.com
              </a>
              <a href="tel:+91 98203 79994" className="cmn-link">
                +91 98203 79994
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">INDEPENDANT STORES</span>
              <span>Santosh Savant</span>
              <a href="mailto:Santosh.Savant@forevermark.com">
                Santosh.Savant@forevermark.com
              </a>
              <a href="tel:+91 99872 55772" className="cmn-link">
                +91 99872 55772
              </a>
            </h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">TRAINING</span>
              <span>Leena Amin</span>
              <a href="mailto:leena.amin@forevermark.com">
                Leena.Amin@forevermark.com
              </a>
              <a href="tel:+91 99204 48885" className="cmn-link">
                +91 99204 48885
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header"> CHAIN STORES</span>
              <span>Arun Ramakrishnan</span>
              <a href="mailto:Arun.Ramakrishnan@forevermark.com">
                Arun.Ramakrishnan@forevermark.com
              </a>
              <a href="tel:+91 9845644995" className="cmn-link">
                +91 9845644995
              </a>
            </h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">RETAIL CO-ORDINATOR</span>
              <span>Jessie D'souza</span>
              <a href="mailto:Jessie.Dsouza@forevermark.com">
                Jessie.Dsouza@forevermark.com
              </a>
              <a href="tel:+91 9820154344" className="cmn-link">
                +91 9820154344
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">MERCHANDISING</span>
              <span>Rita Gohil</span>
              <a href="mailto:Rita.Gohil@forevermark.com">
                Rita.Gohil@forevermark.com
              </a>
              <a href="tel:+91 9833754465" className="cmn-link">
                +91 9833754465
              </a>
            </h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="text-center cmn-queries">
            <h2>
              {" "}
              <span className="cm-queries-header">RETAIL DIRECTOR</span>
              <span>Amit Pratihari</span>
              <a href="mailto:Amit.Pratihari@forevermark.com">
                Amit.Pratihari@forevermark.com
              </a>
              <a href="tel:+91 7738233330" className="cmn-link">
                +91 7738233330
              </a>
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center address-sec">
        <p>
          <span>De Beers India</span>
        </p>
        <p>TCG Financial Centre, 6th Floor, C-53, G Block,</p>
        <p>Bandra Kurla Complex, Bandra (East),</p>
        <p>Mumbai 400098.</p>
      </div>
    </div>
  );
}

export default ContactUs;
