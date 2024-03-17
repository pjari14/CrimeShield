import React from "react";

import lock from "../Assets/icons/lock.png";
import service from "../Assets/icons/service.png";
import time from "../Assets/icons/back-in-time.png";
const Services = () => {
  return (
    <>
      <div class="page-section " id="services">
        <div class="container p-4 d-flex flex-column justify-content-center align-items-center">
          <div class="text-center">
            <h2
              class="section-heading text-uppercase "
              style={{ fontWeight: "bold" }}
            >
              Services
            </h2>
            <h4 class="section-subheading ">Why choose us?</h4>
          </div>
          <div class="col-12 w-100 text-center p-4 d-flex justify-content-center align-items-center">
            <div class="col-md-4 d-flex flex-column align-items-center  justify-content-center">
              <img
                src={lock}
                class="rounded float-start"
                alt="..."
                height="30%"
                width="50%"
              />
              <span>Security</span>
            </div>
            <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
              <img
                src={service}
                class="rounded float-start"
                alt="..."
                height="30%"
                width="50%"
              />
              <span>Safety Assurance</span>
            </div>
            <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
              <img
                src={time}
                class="rounded float-start"
                alt="..."
                height="30%"
                width="40%"
              />
              <br />
              <span>24/7 Service</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
