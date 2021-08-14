import React from "react";
import "./Navtop.css";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
const Navtop = () => {
  return (
    <div>
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href="/">
                Digital Spirit <span>Made it Easy</span>
              </a>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane">
                      <FaPaperPlane />
                    </span>
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <span>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="275e485255424a464e4b67424a464e4b0944484a"
                      >
                        digitalspiritmakeiteasy.com
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2">
                      <FaPhoneAlt />
                    </span>
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <span>Call Us: + 91 9685826000 </span>
                  </div>
                </div>
                <div className="col-md topper d-flex align-items-center justify-content-end">
                  <p className="mb-0">
                    <a
                      href="#"
                      className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center"
                    >
                      <span>Apply now</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
