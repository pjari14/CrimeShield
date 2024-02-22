import React from "react";
import image from "../CyberIris-removebg-preview.png";

const FormLayout = () => {
  return (
    <>
      <section className="bg-light py-5 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-6 col-xl-7">
              <div className="d-flex justify-content-center text-bg-primary">
                <div className="col-12 col-xl-9">
                  <img
                    className="img-fluid rounded mb-4"
                    loading="lazy"
                    src={image}
                    width="60%"
                    height="60%"
                    alt="BootstrapBrain Logo"
                  />
                  <hr className="border-primary-subtle mb-4" />

                  <p className="lead mb-5">
                    Reporting incidents made easy. Sign in here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormLayout;
