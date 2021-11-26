import React from "react";
import '../ComponentStyles/component.css'

const Error = (props) => {
  return <span className={props.className|| "error"}>{props.children}</span>;
};

export default Error;
