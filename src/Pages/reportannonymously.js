import React, { useState } from "react";
import { Link } from "react-router-dom";

const Annonymously = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const states = [
    {
      name: "Andhra Pradesh",
      cities: ["Hyderabad", "Visakhapatnam", "Vijayawada"],
    },
    { name: "Arunachal Pradesh", cities: ["Itanagar", "Ziro", "Pasighat"] },
    { name: "Assam", cities: ["Dispur", "Guwahati", "Jorhat"] },
    { name: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur"] },
    { name: "Chhattisgarh", cities: ["Raipur", "Bilaspur", "Durg"] },
    { name: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama"] },
    { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara"] },
    { name: "Haryana", cities: ["Chandigarh", "Gurgaon", "Faridabad"] },
    { name: "Himachal Pradesh", cities: ["Shimla", "Dharamshala", "Mandi"] },
    { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad"] },
    { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli"] },
    { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode"] },
    { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Gwalior"] },
    { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
    { name: "Manipur", cities: ["Imphal", "Bishnupur", "Chandel"] },
    { name: "Meghalaya", cities: ["Shillong", "Tura", "Nongpoh"] },
    { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Champhai"] },
    { name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung"] },
    { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Puri"] },
    { name: "Punjab", cities: ["Chandigarh", "Amritsar", "Ludhiana"] },
    { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota"] },
    { name: "Sikkim", cities: ["Gangtok", "Pelling", "Rumtek"] },
    { name: "Tamil Nadu", cities: ["Chennai", "Madurai", "Coimbatore"] },
    { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad"] },
    { name: "Tripura", cities: ["Agartala", "Dharmanagar", "Kailashahar"] },
    { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Agra"] },
    { name: "Uttarakhand", cities: ["Dehradun", "Mussoorie", "Nainital"] },
    { name: "West Bengal", cities: ["Kolkata", "Siliguri", "Durgapur"] },
    {
      name: "Andaman and Nicobar Islands",
      cities: ["Port Blair", "Havelock", "Neil Island"],
    },
    { name: "Chandigarh", cities: ["Chandigarh"] },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      cities: ["Daman", "Silvassa"],
    },
    { name: "Delhi", cities: ["Delhi"] },
    { name: "Lakshadweep", cities: ["Kavaratti", "Minicoy", "Agatti"] },
    { name: "Puducherry", cities: ["Puducherry"] },
  ];

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    const selectedStateObj = states.find(
      (state) => state.name === e.target.value
    );
    setCities(selectedStateObj.cities);
  };

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

          <div class="col-md-6">
            <label for="state" class="form-label">
              State:
            </label>
          </div>
          <div class="col-md-6">
            <select
              class="form-select"
              id="state"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div class="col-md-6">
            <label for="city" class="form-label">
              City:
            </label>
          </div>
          <div class="col-md-6">
            <select class="form-select" id="city">
              <option value="">Select a City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

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
