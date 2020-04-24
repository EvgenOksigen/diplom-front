import React from "react";

const TextArea = ({
  input,
  meta: { touched, error },
  type,
  label,
  required,
  placeholder,
  notification
}) => {
  return (
    <>
      {label === "empty" ? (
        <label>&nbsp;</label>
      ) : (
        <label className={required && "required"}>
          {label}:{" "}
          {notification && (
            <span className="notification">( {notification} )</span>
          )}
        </label>
      )}

      <textarea
        className="form-input"
        {...input}
        placeholder={placeholder}
        onChange={input.onChange}
        type={type}
      />
    </>
  );
};

export default TextArea;
