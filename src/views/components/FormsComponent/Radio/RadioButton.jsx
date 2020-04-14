import React from "react";
import { Radio, Form } from "antd";

const RadioButton = ({ disabled, input, label, required, options = [], ...rest }) => {
  // console.log(rest);
  
  return (
    <Form.Item className="test-form-item radio-field">
      <Radio.Group disabled={disabled} buttonStyle="solid" {...input}>
        {options.map((elem, index) => (
          <Radio.Button key={index} value={elem.value}>
            {elem.text}
          </Radio.Button>
        ))}
      </Radio.Group>

      <div className="verticalLine" />

      <label className={required && "required"}>{label}</label>
    </Form.Item>
  );
};

export default RadioButton;
