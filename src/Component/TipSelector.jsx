import React from "react";
import "../ComponentStyles/tipSelector.css";

const TipSelector = (props) => {
  return (
    <div
      className={`tip-container ${props.extraclass}`}
      {...props}
    >
      <div className="tip-content" >
        {props.children}
        <span>%</span>
      </div>
    </div>
  );
};

export default TipSelector;
