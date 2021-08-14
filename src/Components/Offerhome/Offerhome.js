import React from "react";
import "./offer.css";
import Imgsrc from "../../Shared/Imgsrc";
import { AiOutlineSafety } from "react-icons/ai";
import {
  FaBookOpen,
  FaRegKeyboard,
  FaRegHandshake,
  FaJenkins,
  FaPrayingHands,
} from "react-icons/fa";

const Offerhome = () => {
  return (
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
            <div
              className="img"
              style={{
                backgroundImage: `url(${Imgsrc.student})`,
              }}
            ></div>
          </div>
          <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
            <h2 className="mb-4">What We Offer</h2>
            <p style={{ color: "#666666" }}>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word.
            </p>
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className="flaticon-security">
                      <AiOutlineSafety />
                    </span>
                  </div>
                  <div className="text pl-3">
                    <h3>Safety First</h3>
                    <p style={{ color: "#666666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className="flaticon-reading">
                      <FaPrayingHands />
                    </span>
                  </div>
                  <div className="text pl-3">
                    <h3>Regular classes</h3>
                    <p style={{ color: "#666666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className="flaticon-diploma">
                      <FaBookOpen />
                    </span>
                  </div>
                  <div className="text pl-3">
                    <h3>Certified Teachers</h3>
                    <p style={{ color: "#666666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className="flaticon-education">
                      <FaJenkins />
                    </span>
                  </div>
                  <div className="text pl-3">
                    <h3>Sufficient classrooms</h3>
                    <p style={{ color: "#666666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className="flaticon-jigsaw">
                      <FaRegKeyboard />{" "}
                    </span>
                  </div>
                  <div className="text pl-3">
                    <h3>Creative Lessons</h3>
                    <p style={{ color: "#666666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className="flaticon-kids">
                      <FaRegHandshake />
                    </span>
                  </div>
                  <div className="text pl-3">
                    <h3>Sports Facilities</h3>
                    <p style={{ color: "#666666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerhome;
