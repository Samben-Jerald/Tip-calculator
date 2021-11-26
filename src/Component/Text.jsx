import React from "react";
import "../ComponentStyles/component.css";

const Text = (props) => {
  return <span className="text" {...props.attribute}>{props.children}</span>;
};

export default Text;
