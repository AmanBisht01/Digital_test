import Carousel1 from "../../Components/Carousel/Carousel";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardhome from "../../Components/Cardshome/Cardhome";
import Offerhome from "../../Components/Offerhome/Offerhome";
import Parallexhome from "../../Components/Parallexhome/Parallexhome";
import Courseshome from "../../Components/Courseshome/Courseshome";
import Ourteam from "../../Components/OurTeam/Ourteam";
// import Blogshome from "../../Components/Blogshome/Blogs";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section>
      <div data-aos="zoom-out">
        <Carousel1 />
      </div>
      <div data-aos="zoom-out">
        <Cardhome />
      </div>
      <div data-aos="fade-left">
        <Offerhome />
      </div>
      <div data-aos="zoom-in">
        <Parallexhome />
      </div>
      <div data-aos="fade-right">
        <Courseshome />
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="5000"
      >
        <Ourteam />
      </div>
      {/* <div data-aos="fade-down">
        <Blogshome />
      </div> */}
    </section>
  );
};

export default Home;
