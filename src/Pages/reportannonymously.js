import React, { useState } from "react";
import { Link } from "react-router-dom";
import IndiaCities from "../Components/incidancities";
const Annonymously = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-success fs-1">
            Report complaint annonymously!
          </div>
          <hr />
        </div>

        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="personaldata">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Complaint/Incident details</h2>
          </div>
          <hr />
          <div class="col-md-6">
            <label for="categoryofcomplaint" class="form-label">
              Category of complaint:
            </label>
          </div>

          <div class="col-md-6">
            <select class="form-select" id="ctype" name="crimeType">
              <option value="">Select a crime type</option>
              <option value="">Select a crime type</option>
              <option value="">Select a crime type</option>
              <option value="">Select a crime type</option>
              <option value="">Select a crime type</option>
              <option value="">Select a crime type</option>
            </select>
          </div>

          <IndiaCities />

          <div class="col-md-6">
            <label for="dtincident" class="form-label">
              Approximate date & time of incident:
            </label>
          </div>
          <div class="col-md-4">
            <input type="date" class="form-control" id="dtincident" />
          </div>
          <div class="col-md-2">
            <input type="time" class="form-control" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Reason of delay in report:
            </label>
          </div>
          <div class="col-md-6">
            <input
              type="textarea"
              placeholder="Enter reason of delay"
              class="form-control"
              id="reasonindelay"
            />
          </div>

          <div class="col-md-6">
            <label for="inputIncidentplace" class="form-label">
              Where did the incident occur?
            </label>
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Enter where did the incident occur"
              id="inputIncidentplace"
            />
          </div>
          <div class="col-md-6">
            <label for="supportingevidence" class="form-label">
              Supporting Evidence
            </label>
          </div>
          <div class="col-md-6">
            <input type="file" class="form-control" id="supportingevidence" />
          </div>
          <div class="col-md-6">
            <label for="additionalinfo" class="form-label">
              Please provide any additional information:
            </label>
          </div>
          <div class="col-md-6">
            <textarea class="form-control" id="additionalinfo" rows="3" />
          </div>
          <div class="row py-4 justify-content-end">
            <div class="col-3 ">
              <button
                type="reset"
                id="btnclear"
                to=""
                class="btn btn-smshadow-sm  btn-warning  w-100 bg-gradient  p-3 text-center text-white fw-bold "
              >
                Clear
              </button>
            </div>
            <div class="col-3 ">
              <Link
                to="/SuspectDetails"
                class="btn shadow-sm button btn-sm btn-info shadow-sm w-100 bg-gradient p-3 text-center text-white fw-bold "
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
export default Annonymously;
