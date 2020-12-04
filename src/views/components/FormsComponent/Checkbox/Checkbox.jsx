import React from "react";
import "../formComponents.scss";
import Tooltip from "react-tooltip-lite";

const Checkbox = ({ input, text, name, disabled, withEmptyLabel }) => {
  return (
    <>
      {withEmptyLabel && <label className="empty-label">&nbsp;</label>}
      <Tooltip
        className="form-checkbox-container"
        content="Выбрать если ответ правильный"
      >
        <input
          name={name}
          disabled={disabled ? true : false}
          className="form-checkbox"
          {...input}
          onClick={input.onChange}
          type="checkbox"
        ></input>
      </Tooltip>
    </>
  );
};

export default Checkbox;
