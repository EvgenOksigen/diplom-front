import React, { useState, useEffect } from "react";

const MultiSelect = ({ options, input }) => {
  const [multiSelect, setSelect] = useState([]);

  useEffect(() => {
    console.log("useeffect", multiSelect);
  }, [multiSelect.length]);

  const onChange = el => {
    if (multiSelect.includes(el)) {
      setSelect([...multiSelect.filter(item => item !== el)]);
      input.onChange([...multiSelect.filter(item => item !== el)]);
    } else {
      setSelect([...multiSelect, el]);
      input.onChange([...multiSelect, el]);
    }
  };

  return (
    <>
      <div className="answer-list">
        {options.map((el, index) => (
          <div
            key={index}
            className={`single test-form-item ${multiSelect.includes(el) ? "active" : ""
              }`}
            onClick={() => onChange(el)}
          >
            {el.answer}
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiSelect;
