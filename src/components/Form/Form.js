import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };
  return (
    <div className="formInputs">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focused={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Form;
