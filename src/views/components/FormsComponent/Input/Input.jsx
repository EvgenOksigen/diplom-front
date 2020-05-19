import React from "react";

const Input = ({
  input,
  meta: { touched, error },
  type,
  label,
  required,
  placeholder,
  notification,
  maxLength,
  disabled
}) => {
  console.log(disabled);

  return (
    <>
      {label === "empty" ? (
        <label>&nbsp;</label>
      ) : (
        <label className={required && "required"}>
          {label}
          {label && ": "}
          {notification && (
            <span className="notification">( {notification} )</span>
          )}
        </label>
      )}

      <input
        className="form-input"
        {...input}
        placeholder={placeholder}
        onChange={input.onChange}
        type={type}
        maxLength={maxLength}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
