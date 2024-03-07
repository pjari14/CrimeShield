import React from "react";
import image from "../Assets/images/Heading__1_-removebg-preview.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
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
                <h2 className="h1 mb-4">
                  Reporting incidents made easy. Sign in here
                </h2>
                <p className="lead mb-5"></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="card border-0 rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <h3>Sign in</h3>
                      <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                        <label for="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          value=""
                          placeholder="Password"
                          required
                        />
                        <label for="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          className="form-check-label text-secondary"
                          for="remember_me"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-info btn-lg" type="submit">
                          Log in now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                      <a href="#!">Forgot password</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
