import React, { useState } from "react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const ContentComponent = ({ selectedOption }) => {
  if (selectedOption === "option1") {
    return <div>Content for Option 1</div>;
  } else if (selectedOption === "option2") {
    return <div>Content for Option 2</div>;
  } else if (selectedOption === "option3") {
    return <div>Content for Option 3</div>;
  } else {
    return <div>Please select an option</div>;
  }
};

const Selectoption = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ContentComponent selectedOption={selectedOption} />
    </div>
  );
};

export default Selectoption;
