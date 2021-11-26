import React from "react";
import "../ComponentStyles/inputStyle.css";

const Label = (props) => {
  return <label className={"card-label"} {...props.attributes}>{props.children}</label>;
};

export default Label;
