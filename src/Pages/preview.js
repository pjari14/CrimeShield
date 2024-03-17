import React from "react";
import { Link } from "react-router-dom";
const Preview = () => {
  return (
    <>
      <div class="container mt-2 pt-2">
        <div class="col-sm-12">
          <div class=" p-3 text-center mb-2 text-danger fs-1 ">
            Preview And Submit
          </div>
          <hr />
        </div>
        <form class="row g-3 shadow py-4 px-4 mx-5 my-5 " id="complaintdetails">
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Personal details</h2>
          </div>
          <hr />
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Incident details</h2>
          </div>
          <hr />
          <div class="col-sm-12">
            <h2 class="text text-danger fw-3">Suspect details</h2>
          </div>
          <hr />
        </form>
      </div>
    </>
  );
};
export default Preview;
