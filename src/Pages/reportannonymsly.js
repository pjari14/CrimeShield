import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";

const Form1 = () => {
  return (
    <div>
      <h2>Form 1</h2>
      {/* form fields */}
    </div>
  );
};

const Form2 = () => {
  return (
    <div>
      <h2>Form 2</h2>
      {/* form fields */}
    </div>
  );
};

const Form3 = () => {
  return (
    <div>
      <h2>Form 3</h2>
      {/* form fields */}
    </div>
  );
};

const StepperForm = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const forms = [<Form1 />, <Form2 />, <Form3 />];

  const handleBack = () => {
    setCurrentForm(currentForm - 1);
  };

  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  return (
    <div>
      <Stepper steps={forms} activeStep={currentForm} />
      <button onClick={handleBack} disabled={currentForm === 0}>
        Back
      </button>
      <button onClick={handleNext} disabled={currentForm === forms.length - 1}>
        Next
      </button>
    </div>
  );
};

export default StepperForm;
