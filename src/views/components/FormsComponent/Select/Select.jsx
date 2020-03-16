import React, { Component } from "react";

class Selecter extends Component {
  componentDidMount() {
    const { input, defaultValue } = this.props;

    if (defaultValue || input.value) {
      input.onChange(input.value || defaultValue);
    }
  }

  render() {
    const {
      input,
      placeholder,
      meta: { touched, error },
      label,
      disabled,
      required,
      options = [],
      onChange,
      defaultValue
    } = this.props;

    return (
      <>
        {label === "empty" ? (
          <label>&nbsp;</label>
        ) : (
          <label className={required && "required"}>{label}: </label>
        )}

        <select
          disabled={disabled ? true : false}
          {...input}
          onChange={e => {
            input.onChange(e);
            onChange && onChange(e);
          }}
          value={input.value ? input.value : undefined}
          placeholder={placeholder}
          defaultValue={defaultValue}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value} text={option.text}>
              {option.text}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default Selecter;
