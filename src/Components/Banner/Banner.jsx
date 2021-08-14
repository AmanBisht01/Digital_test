import React from "react";

const Banner = () => {
  return (
    <section
      class="hero-wrap hero-wrap-2"
      style="background-image:url(images/xbg_1.jpg.pagespeed.ic._C6ebyFa8h.webp)"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
            <h1 class="mb-2 bread">Certified Teacher</h1>
            <p class="breadcrumbs">
              <span class="mr-2">
                <a href="index.html">
                  Home <i class="ion-ios-arrow-forward"></i>
                </a>
              </span>{" "}
              <span>
                Teacher <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
