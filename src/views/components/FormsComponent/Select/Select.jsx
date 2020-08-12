import React from "react";
import { useEffect } from "react";

const Selecter = ({
  input,
  placeholder,
  label,
  disabled,
  required,
  options = [],
  onChange,
  defaultValue,
}) => {
  useEffect(() => {
    if (defaultValue) {
      input.onChange(defaultValue);
    }
  }, []);
  return (
    <>
      {label === "empty" ? (
        <label></label>
      ) : (
        <label className={required && "required"}>{label + ":"} </label>
      )}

      <select
        disabled={disabled ? true : false}
        {...input}
        onChange={(e) => {
          input.onChange(e);
          onChange && onChange(e);
        }}
        placeholder={placeholder}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} text={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selecter;
