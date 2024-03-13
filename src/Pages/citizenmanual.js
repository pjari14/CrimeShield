import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Assets/images/register.jpg";
import image2 from "../Assets/images/login.jpg";
import image3 from "../Assets/images/personal_data.jpg";
import image4 from "../Assets/images/incident.jpg";
const Citizenmanual = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class="p-1 text-center mb-1 text-warning fs-1 ">
            ━━━ Citizen Manual ━━━
          </div>
          <hr></hr>
          <div class="row">
          <td
                style={{
                  backgroundColor: "#74A4BC",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                ⇒ HOW TO REPORT AND TRACK A COMPLAINT
              </td>
          </div>
          <div class="row g-3 shadow py-4 px-4 mx-10 my-1">
            <tr class="row">
              <td
                style={{
                  backgroundColor: "#938BA1",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                Step 1 :- Register to report & track a complaint.
              </td>
            </tr>
            <div class="row">
              <div class="col-sm">
                <img
                  src={image1}
                  style={{ width: "100%", height: "450px" }}
                  class="py-3"
                  alt="image not found"
                ></img>{" "}
              </div>
              <div class="col-sm">
                <p
                  style={{
                    paddingTop: "30px",
                    fontSize: "18px",
                    color: "#150578",
                  }}
                >
                  {" "}
                  ➤ You are required to fill the following details to register
                  into the portal to report your complaint.{" "}
                </p>
                <br></br>
                <p style={{ paddingLeft: "23px" }}>
                  i. Enter your first name and last name.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  ii. Enter your permanent address.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  iii. Enter your contact number.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  iv. Enter your email address.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  v. Create a strong password.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  vi. Click on register button to compelete the registration
                  process. <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
              </div>
            </div>
            <hr></hr>
            <tr class="row">
              <td
                style={{
                  backgroundColor: "#938BA1",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                Step 2 :- Login for reporting a complaint.
              </td>
              <div class="row">
                <div class="col-sm">
                  <img
                    src={image2}
                    style={{ width: "100%", height: "450px" }}
                    class="py-3"
                    alt="image not found"
                  ></img>{" "}
                </div>
                <div class="col-sm">
                  <p
                    style={{
                      paddingTop: "30px",
                      fontSize: "18px",
                      color: "#150578",
                    }}
                  >
                    {" "}
                    ➤ You are required to fill the following details to login
                    into the portal to report your complaint.
                  </p>
                  <br></br>
                  <p style={{ paddingLeft: "23px" }}>
                    i. Enter your <strong>Email</strong> address in the email
                    field. <b style={{ color: "red" }}>(mandatory) </b>{" "}
                  </p>
                  <p style={{ paddingLeft: "23px" }}>
                    ii. Enter the <strong>Password</strong> which you created at
                    the time of registration.{" "}
                    <b style={{ color: "red" }}>(mandatory) </b>{" "}
                  </p>
                  <p style={{ paddingLeft: "23px" }}>
                    iii. Click on <strong>Log-In</strong> button to report your
                    complaint. <b style={{ color: "red" }}>(mandatory) </b>{" "}
                  </p>
                </div>
              </div>
            </tr>
            <hr></hr>
            <tr class="row">
              <td
                style={{
                  backgroundColor: "#938BA1",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                Step 3 :- Provide your personal details.
              </td>
            </tr>
            <div class="row">
              <div class="col-sm">
                <img
                  src={image3}
                  style={{ width: "100%", height: "450px" }}
                  class="py-3"
                ></img>
              </div>
              <div class="col-sm">
                <p
                  style={{
                    paddingTop: "30px",
                    fontSize: "18px",
                    color: "#150578",
                  }}
                >
                  {" "}
                  ➤ You are required to fill your personal details into the
                  portal to report your complaint.
                </p>
                <br></br>
                <p style={{ paddingLeft: "23px" }}>
                  i. Enter your first name and last name.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  ii. Enter your email address.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  iii. Enter your contact number.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  iv. Upload your identity proof{" "}
                  <b style={{ color: "Orange" }}>
                    (Aadhar card, Driving License, PAN Card)
                  </b>
                  . <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  v. Enter your permanent address.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  vi. Enter your city.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  vi. Select your area.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  vi. Enter date of the complaint.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  vi. Click on <strong>Next</strong> button to proceed.{" "}
                  <b style={{ color: "red" }}>(mandatory) </b>{" "}
                </p>
              </div>
            </div>
            <p style={{ color: "red" }}>
              * Ensure that the information you submit is true, current and
              reliable.
            </p>
            <hr></hr>
            <tr class="row">
              <td
                style={{
                  backgroundColor: "#938BA1",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                Step 4 :- Provide incident details.
              </td>
            </tr>
            <br></br>
            <div class="row">
              <div class="col-sm">
                <img
                  src={image4}
                  style={{ width: "110%", height: "450px" }}
                  class="py-3"
                ></img>
              </div>
              <div class="col-sm">
                <p
                  style={{
                    paddingTop: "30px",
                    fontSize: "18px",
                    color: "#150578",
                  }}
                >
                  {" "}
                  ➤ You are required to fill your incident details into your
                  portal.
                </p>

                <p style={{ paddingLeft: "23px" }}>
                  i. Enter the date of complaint.
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  ii. Enter the date when the incident happened.
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  iii. Enter the time when the incident took place.
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  iv. Select the <strong>Type of Crime</strong> happened with
                  you :
                </p>
                <p style={{ paddingLeft: "60px" }}>a. Cyber Crime</p>
                <p style={{ paddingLeft: "60px" }}>b. Domestic Violence</p>
                <p style={{ paddingLeft: "60px" }}>c. Abuse</p>
                <p style={{ paddingLeft: "60px" }}>d. Theft</p>
                <p style={{ paddingLeft: "60px" }}>e. Robbery</p>
                <p style={{ paddingLeft: "23px" }}>
                  v. Enter the name of the person/company against which/whom the
                  complaint is filed.
                </p>
                <p style={{ paddingLeft: "23px" }}>
                  vi. Enter any specific information about the crime.
                </p>
              </div>
            </div>
            <p style={{ color: "red" }}>
              * Select the checkbox to confirm that the details you have
              provided are accurate.
            </p>
            
          </div>
          <br></br>
          <div class="row">
          <td
                style={{
                  backgroundColor: "#74A4BC",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                ⇒ HOW TO REPORT AN ANONYMOUS COMPLAINT
              </td>
          </div>
          <div class="row g-3 shadow py-4 px-4 mx-10 my-1">
            <tr class="row">
              <td
                style={{
                  backgroundColor: "#938BA1",
                  color: "#121420",
                  fontSize: "20px",
                }}
              >
                Step 1 :- Navigate to Report Anonymously complaint section
              </td>
            </tr>
            </div>
        </div>
      </div>
    </>
  );
};
export default Citizenmanual;
