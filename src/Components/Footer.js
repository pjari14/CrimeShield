import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="container my-5">
      <footer class="text-center text-dark">
        <div class="container">
          <section class="mt-5">
            <div class="row text-center d-flex justify-content-center pt-5">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-dark">
                    Blog
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-dark">
                    FAQ's
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-dark">
                    Usefull Links
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-dark">
                    Help
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-dark">
                    Contact
                  </a>
                </h6>
              </div>
            </div>
          </section>

          <hr class="my-5" />

          <section class="mb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  Visit the CyberIris Crime Reporting Portal to report incidents
                  and contribute to a safer environment. Together, we can combat
                  cybercrime.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div class="text-center p-3">
          © 2020 Copyright:
          <Link class="text-dark" to="/">
            SCRP
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
