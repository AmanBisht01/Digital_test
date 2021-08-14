import React from "react";
import "./Card.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";

const Cardhome = () => {
  return (
    <section className="ftco-services ftco-no-pb">
      <div className="container-wrap">
        <div className="row no-gutters">
          <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-teacher">
                  {<FaChalkboardTeacher />}
                </span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Certified Teachers</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-reading">
                  <BiBookReader />
                </span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Special Education</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-books">
                  <IoLibrary />
                </span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Book &amp; Library</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-diploma">
                  <GiDiploma />
                </span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Sport Clubs</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardhome;
