import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CCContent,
  DVContent,
  RBContent,
  THContent,
  ABContent,
} from "../Components/crimecomponent";
const crimeTypes = [
  { id: "CC", label: "Cyber Crime" },
  { id: "DV", label: "Domestic Violence" },
  { id: "AB", label: "Abuse" },
  { id: "TH", label: "Theft" },
  { id: "RB", label: "Robbery" },
];

const crimeDetails = {
  CC: {
    title: "Cyber Crime",
    component: CCContent,
  },
  DV: {
    title: "Domestic Violence",
    component: DVContent,
  },
  AB: {
    title: "Abuse",
    component: ABContent,
  },
  TH: {
    title: "Theft",
    component: THContent,
  },
  RB: {
    title: "Robbery",
    component: RBContent,
  },
};

const Complaint = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);

  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const renderCrimeDetails = () => {
    const CrimeDetailComponent = crimeDetails[selectedCrime].component;
    return CrimeDetailComponent ? <CrimeDetailComponent /> : null;
  };

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

            <select
              class="form-select"
              id="ctype"
              name="crimeType"
              value={selectedCrime}
              onChange={handleCrimeChange}
            >
              {" "}
              <option value="">Select a crime type</option>
              {crimeTypes.map((crime) => (
                <option key={crime.id} value={crime.id}>
                  {crime.label}
                </option>
              ))}
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
        <div class="container py-3 text-center ">
          <h2>IPC sections according to crime type</h2>
          {selectedCrime && renderCrimeDetails()}
        </div>
      </div>
    </>
  );
};
export default Complaint;

