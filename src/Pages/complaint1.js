import React from "react";
import Incident from "../Components/Incident";
const Complaint1 = () => {
  return (
    <>
      <Incident
        nextlink="/Suspect1"
        backlink="/personaldata"
        title="File your complaint here!!"
      />
    </>
  );
};
export default Complaint1;
