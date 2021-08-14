import React from "react";
import Imgsrc from "../../Shared/Imgsrc";
import "./style.css";
import { Parallax, Background } from "react-parallax";
const Parallexhome = () => {
  //   const inlineStyle = {
  //     background: "#fff",
  //     left: "50%",
  //     top: "50%",
  //     position: "absolute",
  //     padding: "20px",
  //     transform: "translate(-50%, -50%)",
  //   };
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax strength={-200}>
        <Background className="custom-bg">
          <img
            src={Imgsrc.Carousel3}
            alt="fill murray"
            style={{
              backgroundSize: "cover",
              width: "85rem",
              filter: "brightness(0.5)",
            }}
            height="100rem"
          />
        </Background>
        <div className="container" style={{ height: "41rem" }}>
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div
              className="col-md-6 align-items-stretch d-flex vid"
              style={{
                backgroundImage: `url('${Imgsrc.Carousel1}')`,
              }}
            >
              <div className="img img-video d-flex align-items-center">
                <div className="video justify-content-center">
                  <a
                    href="https://vimeo.com/45830194"
                    className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                  >
                    <span className="ion-ios-play"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5"
              style={{ color: "white" }}
            >
              <h2 style={{ color: "white" }} className="mb-4">
                Digital Spirit
              </h2>
              <p>
                Digital Spirit (makeITeasy) is opened in the year 2019 to
                primarily work in niche technologies such as Big Data, Data
                Science, Machine Learning, Cloud Computing and BlockChain.
                Digital Spirit is an Information Technology based Development
                and Training Centre located at Indore (MP). Our other services
                involves IT Recruitment, Placement Services and Immigration.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallexhome;
