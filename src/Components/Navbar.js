import React from "react";
import image from "../CyberIris-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light text-large">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="" height="50%" width="50%" src={image} alt="..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <li className="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Register a Complaint
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/Complaint">
                    Women/Children related chrime
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="">
                    Financial Fraud
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="">
                    Cyber Crime
                  </Link>
                </li>
              </ul>
            </li>
            <Link className="nav-link" to="">
              View FIR status
            </Link>
            <Link className="nav-link" to="">
              Blog
            </Link>
            <Link className="nav-link" to="">
              Crime Prevention
            </Link>
            <Link className="nav-link" to="">
              Contact
            </Link>
            <Link className="nav-link" to="/login">
              Sign In
            </Link>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
