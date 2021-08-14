import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiLocationMarker, HiArrowNarrowRight } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa";

import Imgsrc from "../../Shared/Imgsrc.js";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker">
                      <HiLocationMarker />
                    </span>
                    <span className="text">
                      DIGITAL SPIRIT (makeITeasy) INDORE, INDIA
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone">
                        <FaPhone />
                      </span>
                      <span className="text">+91 9685826000</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope"></span>
                      <span className="text">
                        <span
                          className="__cf_email__"
                          data-cfemail="6d04030b022d1402181f0902000c0403430e0200"
                        >
                          digitalspiritmakeiteasy@gmail.com
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Our NewsPaper</h2>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{
                    backgroundImage: `url(${Imgsrc.Carousel3})`,
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading" style={{ fontSize: "16px" }}>
                    <a href="#">
                      Digital Spirit is offering skill based training in IT
                      field (Python, Java, Big Data, Machine Learning, Cloud
                      Computing) with 100% job assurance which will yield to a
                      successful professional groth for individual.
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar"></span> June 27, 2019
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person"></span> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat"></span> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="ion-ios-arrow-round-forward mr-2">
                      <HiArrowNarrowRight />
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ion-ios-arrow-round-forward mr-2">
                      <HiArrowNarrowRight />
                    </span>
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ion-ios-arrow-round-forward mr-2">
                      <HiArrowNarrowRight />
                    </span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ion-ios-arrow-round-forward mr-2">
                      <HiArrowNarrowRight />
                    </span>
                    Deparments
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ion-ios-arrow-round-forward mr-2">
                      <HiArrowNarrowRight />
                    </span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Subscribe Us!</h2>
              <form action="#" className="subscribe-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2 text-center"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="form-control submit px-3"
                  />
                </div>
              </form>
            </div>
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook">
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram">
                      <FaLinkedin />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script
                data-cfasync="false"
                src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
              ></script>
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="icon-heart" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
