import React from "react";
import Imgsrc from "../../Shared/Imgsrc";
import "./style.css";
import { FaUserAlt, FaTable, FaCalendarAlt } from "react-icons/fa";
const Courseshome = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid px-4">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">
              <span>Our</span> Courses
            </h2>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 course ftco-animate">
            <div
              className="img"
              style={{
                backgroundImage: `url(${Imgsrc.Cloud})`,
                backgroundSize: "contain",
              }}
            ></div>
            <div className="text pt-4">
              <p className="meta d-flex">
                <span>
                  <i className="icon-user mr-2">
                    <FaUserAlt />
                  </i>
                  Mr. Khan
                </span>
                <span>
                  <i className="icon-table mr-2">
                    <FaTable />
                  </i>
                  10 seats
                </span>
                <span>
                  <i className="icon-calendar mr-2">
                    <FaCalendarAlt />
                  </i>
                  4 Years
                </span>
              </p>
              <h3>
                <a href="#">Cloud Computing</a>
              </h3>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Apply now
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 course ftco-animate">
            <div
              className="img"
              style={{
                backgroundImage: `url(${Imgsrc.Webimg})`,
                backgroundSize: "contain",
              }}
            ></div>
            <div className="text pt-4">
              <p className="meta d-flex">
                <span>
                  <i className="icon-user mr-2">
                    <FaUserAlt />
                  </i>
                  Mr. Khan
                </span>
                <span>
                  <i className="icon-table mr-2">
                    <FaTable />
                  </i>
                  10 seats
                </span>
                <span>
                  <i className="icon-calendar mr-2">
                    {" "}
                    <FaCalendarAlt />
                  </i>
                  4 Years
                </span>
              </p>
              <h3>
                <a href="#">Web Development</a>
              </h3>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Apply now
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 course ftco-animate">
            <div
              className="img"
              style={{
                backgroundImage: `url(${Imgsrc.BigData})`,
                backgroundSize: "contain",
              }}
            ></div>
            <div className="text pt-4">
              <p className="meta d-flex">
                <span>
                  <i className="icon-user mr-2">
                    <FaUserAlt />
                  </i>
                  Mr. Khan
                </span>
                <span>
                  <i className="icon-table mr-2">
                    <FaTable />
                  </i>
                  10 seats
                </span>
                <span>
                  <i className="icon-calendar mr-2">
                    {" "}
                    <FaCalendarAlt />
                  </i>
                  4 Years
                </span>
              </p>
              <h3>
                <a href="#">Big Data</a>
              </h3>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Apply now
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 course ftco-animate">
            <div
              className="img"
              style={{
                backgroundImage: `url(${Imgsrc.DSM})`,
                backgroundSize: "contain",
              }}
            ></div>
            <div className="text pt-4">
              <p className="meta d-flex">
                <span>
                  <i className="icon-user mr-2">
                    <FaUserAlt />
                  </i>
                  Mr. Khan
                </span>
                <span>
                  <i className="icon-table mr-2">
                    <FaTable />
                  </i>
                  10 seats
                </span>
                <span>
                  <i className="icon-calendar mr-2">
                    {" "}
                    <FaCalendarAlt />
                  </i>
                  4 Years
                </span>
              </p>
              <h3>
                <a href="#">Data Mining</a>
              </h3>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Apply now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courseshome;
