import React from "react";
import "../ComponentStyles/inputStyle.css";

const Input = (props) => {
  return (
    <div>
      <span className="input-icon">{props.icon}</span>
      <input
        type={props.type || "number"}
        className={props.inputClassName || "main-input"}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        {...props}
      />
    </div>
  );
};

export default Input;
