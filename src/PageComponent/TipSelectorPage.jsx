import React, { useState } from "react";
import TipSelector from "../Component/TipSelector";
import TipCustomInput from "../Component/TipCustomInput";

const TipSelectorPage = (props) => {
  const percentage = [5, 10, 15, 20, 25];
  const [percentValue, setPercentValue] = useState(null);
  const [customPercentage, setCustomPercentage] = useState("");

  const onPercentageHandler = (percent, index) => {
    setPercentValue((prev) => (prev === index ? null : index));
    props.sendPercentValue(percent);
  };
 
  const onCustomInputChangeHandler= (event) => {
    setCustomPercentage(event.target.value)
  }

  const onCustomPercentBlurHandler = () => {
    props.sendCustomPercent(customPercentage);
  };

  const onFocusHandler = () => {
    setPercentValue(null);
  };

  return (
    <>
      {percentage.map((percent, index) => {
        return (
          <TipSelector
            style={{
              backgroundColor:
                percentValue === index ? "hsl(172, 67%, 45%)" : null,
            }}
            id={`percent${percent}`}
            key={index}
            onClick={() => onPercentageHandler(percent, index)}
          >
            {percent}
          </TipSelector>
        );
      })}
      <TipCustomInput
        onChange={onCustomInputChangeHandler}
        onBlur={onCustomPercentBlurHandler}
        onFocus={onFocusHandler}
        value={customPercentage}
      />
    </>
  );
};

export default TipSelectorPage;
