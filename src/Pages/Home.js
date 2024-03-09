import React from "react";
import Services from "../Components/services";
import image from "../Assets/images/CyberIris__4_-removebg-preview.png";
import OnlineComplaint from "../Components/OnlineComplaint";

import { Link } from "react-router-dom";
import homebg from "../Assets/images/Homebg2.jpeg";
import homebg2 from "../Assets/images/cybercrime.png";
import homebg3 from "../Assets/images/Scams.jpeg";
import Cards from "../Components/Cards";
import resources from "../Assets/icons/resources.png";
const Home = () => {
  return (
    <div>
      <div
        id="demo"
        class="carousel slide"
        data-interval="5000"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={homebg} alt="..." class="d-block w-100 img-responsive" />
          </div>
          <div class="carousel-item">
            <img src={homebg2} alt="..." class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={homebg3} alt="..." class="d-block w-100" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <OnlineComplaint />
      <Services />

      <div class="page-section" id="resources">
        <div class="container p-4 d-flex flex-column justify-content-center align-items-center">
          <div class="text-center" style={{ width: "100%" }}>
            <h2 class="section-heading text-uppercase p-3 mx-0 my-4 text-dark">
              Resources
            </h2>
          </div>

          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
