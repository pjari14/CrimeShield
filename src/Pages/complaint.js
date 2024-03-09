import React from "react";
import { Link } from "react-router-dom";
const Complaint = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-success fs-1">
            File your complaint here !!
          </div>
          <hr />
        </div>

        <form class="row g-3  shadow py-4 px-4 mx-5 my-5 " id="complaint">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Incident Details</h2>
          </div>

          <div class="col-md-6">
            <label class="form-label">Date of complaint:</label>

            <input class="form-control" type="date" name="doc" id="cdate" />
          </div>

          <div class="col-md-6">
            <label class="form-label">Incident Date:</label>

            <input
              class="form-control"
              type="date"
              name="incidentDate"
              id="idate"
            />
          </div>

          <div class="col-md-6">
            <label class="form-label">Incident Time:</label>

            <input
              class="form-control"
              type="Time"
              name="incidentTime"
              id="selecttime"
            />
          </div>

          <div class="col-md-6">
            <label class="form-label">Select Crime Type:</label>

            <select class="form-select" id="ctype" name="crimeType">
              <option value="select crime" default>
                Select Crime
              </option>
              <option value="Robbery" name="crimeType">
                Robbery
              </option>
              <option value="Financial Fraud" name="crimeType">
                Financial Fraud
              </option>
              <option value="Kidnapping" name="crimeType">
                Kidnapping
              </option>
              <option value="Assault" name="crimeType">
                Assault
              </option>
              <option value="Other type" name="crimeType">
                Other type
              </option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">
              Name of the person/company against which/whom the complaint is
              filed:
            </label>

            <input class="form-control" name="suspect" type="text" id="" />
          </div>

          <div class="col-md-6">
            <label class="form-label">
              Any specific information about the crime:
            </label>

            <textarea
              class="form-control"
              name="additionalInfo"
              id="addinfo"
            ></textarea>
          </div>

          <div class="col-6">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="check"
            />
            <label class="form-check-label" for="flexCheckDefault">
              I confirm that the information I've given is accurate and true.
            </label>
          </div>
          <div class="row py-4 ">
            <div class="col-4 ">
              <Link
                to="/PersonalData"
                class="btn btn-sm shadow-sm  btn-dark   bg-gradient  p-3 text-center text-white fw-bold "
              >
                Back
              </Link>
            </div>
            <div class="col-4 ">
              <button
                type="reset"
                id="btnclear"
                to=""
                class="btn btn-sm shadow-sm  btn-warning   bg-gradient  p-3 text-center text-white fw-bold "
              >
                Clear
              </button>
            </div>
            <div class="col-4 ">
              <Link
                to="/Complaint"
                class="btn shadow-sm button btn-sm btn-info shadow-sm bg-gradient p-3 text-center text-white fw-bold "
              >
                <span>Next</span>
              </Link>
            </div>
          </div>
          <div class="col-4 text-end"></div>
        </form>
      </div>
    </>
  );
};
export default Complaint;
