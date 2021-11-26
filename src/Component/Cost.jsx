import React from "react";
import "../ComponentStyles/component.css";

const Cost = (props) => {
  return <h1 className="total-cost" {...props.attributes}>${props.children}</h1>;
};

export default Cost;
