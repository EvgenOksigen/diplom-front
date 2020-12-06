import React, { useState } from "react";

const SingleSelect = ({ options = [], input }) => {
  const [singleSelect, setSelect] = useState(null);

  const onChange = el => {
    input.onChange(el.answer);
    setSelect(el);
  };
  return (
    <>
      <div className="answer-list">
        {options.map((el, index) => (
          <div
            key={index}
            className={`single test-form-item ${
              el === singleSelect ? "active" : ""
            }`}
            onClick={() => onChange(el)}
          >
            <div className="answer">{el.answer}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleSelect;
