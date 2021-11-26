import React from "react";
import "../ComponentStyles/component.css";

const Button = (props) => {
  return <button className={"button"} {...props.attributes}>{props.children}</button>;
};

export default Button;
