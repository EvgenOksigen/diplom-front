import React from "react";
import { Radio, Form } from "antd";

const RadioButton = ({ disabled, input, options = [], touched, error, right }) => {
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

      <p className="form-item_error ant-form-explain">{touched && error}</p>
    </Form.Item>
  );
};

export default RadioButton;
