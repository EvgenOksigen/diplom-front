import React from "react";
import { useState } from "react";

const Certain = ({ input }) => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    input.onChange(e.target.value);
  };
  return (
    <>
      <div className="answer-list">
        <input
          type="text"
          placeholder="Type answer here"
          value={value}
          {...input}
          onChange={changeHandler}
        />
      </div>
    </>
  );
};

export default Certain;
