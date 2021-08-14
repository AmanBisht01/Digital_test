import React from "react";
import Imgsrc from "../../Shared/Imgsrc";

const About = () => {
  return (
    <div>
      <div
        className="jumbotron"
        style={{ backgroundImage: `url(${Imgsrc.banner})` }}
      >
        <h1 style={{ color: "white" }} className="display-3">
          <strong style={{ color: "white" }}>
            <b>ABOUT US</b> <span style={{ color: "blue" }}>!</span>
          </strong>
        </h1>
      </div>

      <div
        className="overviews"
        className="section wb"
        style={{ paddingTop: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="message-box">
                <div className="text">
                  <b> Digital Spirit(makeITeasy)</b>
                </div>
                <br />
                <p>
                  Digital Spirit (makeITeasy) is opened in the year 2019 to
                  primarily work in niche technologies such as Big Data, Data
                  Science, Machine Learning, Cloud Computing and BlockChain.
                  <br />
                  <br />
                  Digital Spirit is an Information Technology based Development
                  and Training Centre located at Indore (MP).
                  <br />
                  <br />
                  Our other services involves IT Recruitment, Placement Services
                  and Immigration.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post-media wow fadeIn">
                <div className="pricing-table pricing-table-highlighted">
                  <div className="pricing-table-header grd1">
                    <img
                      src={Imgsrc.biglogo}
                      alt="Logo"
                      className="img-responsive img-rounded"
                      style={{
                        margin: "0px 0px 40px 120px",
                        width: "65%",
                        height: "65%",
                      }}
                    />
                  </div>
                </div>
                <a
                  href="http://www.youtube.com/watch?v=nrJtHemSPW4"
                  data-rel="prettyPhoto[gal]"
                  className="playbutton"
                >
                  <i className="flaticon-play-button"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="overviews" className="section wb" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ width: "70%" }}>
                <img
                  src={Imgsrc.IOS}
                  style={{ width: "100%", cursor: "zoom-in" }}
                  onclick="document.getElementById('modal05').style.display='block'"
                  alt="aboutimg"
                />
                <div
                  id="modal05"
                  className="w3-modal"
                  onclick="this.style.display='none'"
                >
                  <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">
                    &times;
                  </span>
                  <div className="w3-modal-content w3-animate-zoom">
                    {/* <img src={Imgsrc.IOS} style={{ width: "100%" }} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="message-box">
                <h2 style={{ fontSize: "23px" }}>
                  ISO 9001:2015 (Quality Management System)
                </h2>
                <br />
                <p>
                  ISO give framework to put business on sound footing for long
                  term,ISO 9001 aims to provide a practical & workable Quality
                  Management System for improving & monitoring all areas of your
                  Business.
                  <br />
                  <br />
                  ISO 9001:2015 standard is recognized world wide & your
                  customer will understand the benefits of working with
                  Companies that are ISO 9001 Certified. In fact some of yours
                  customers will only do Business with Certified Companies
                  because it gives them assurance that your management systems
                  are constantly assessed & approved.
                  <br />
                  <br />
                </p>
                <p
                  className="lead"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Some of the main benefits of ISO 9001 Certifications :
                </p>
                <p className="lead" style={{ color: "grey" }}>
                  1. Better Internal Management
                </p>
                <p className="lead" style={{ color: "grey" }}>
                  2. Increase Efficiency, Productivity & Profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
