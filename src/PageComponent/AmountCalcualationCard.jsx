import React, { useReducer,useEffect } from "react";
import useAmount from "../Hooks/use-amount";
import { AttachMoney, PeopleAltSharp } from "@mui/icons-material";
import Label from "../Component/label";
import Input from "../Component/input";
import Error from "../Component/Error";
import TipSelectorPage from "./TipSelectorPage";

const percentageReducer = (state, action) => {
  if (action.type === "PERCENTAGE") {
    return { percentage: action.value };
  } else if (action.type === "CUSTOM_PERCENTAGE") {
    return { percentage: action.CustomValue };
  }
};

const AmountCalcualationCard = (props) => {
  const { number: amount, numberHandler: amountHandler } = useAmount("");
  const { number: peopleCount, numberHandler: peopleCountHandler } =
    useAmount("");
  const [percentage, dispatchPercentage] = useReducer(percentageReducer, {
    percentageValue: null,
  });


  const getPercentage = (percent) => {
    dispatchPercentage({ type: "PERCENTAGE", value: percent });
  };

  const getCustomPercentage = (CustomPercent) => {
    dispatchPercentage({
      type: "CUSTOM_PERCENTAGE",
      CustomValue: CustomPercent,
    });
  };

  useEffect(() => {
    props.sendAllData(amount, percentage.percentage, peopleCount);
  }, [amount,percentage.percentage,peopleCount,props])

  return (
    <div className="billing-container">
      <div className="billing-amount">
        <div className="billing-label">
          <Label>Bill</Label>
          {props.amountError && <Error>Should be greater than 10</Error>}
        </div>
        <div className="billing-inputs">
          <Input
            attributes={{
              min: 0,
              max: 999
            }}
            onChange={amountHandler}
            value={amount}
            icon={
              <AttachMoney fontSize="24" sx={{ color: "hsl(184, 14%, 56%)" }} />
            }
          />
        </div>
      </div>
      <div className="tip-percentage">
        <div className="billing-label">
          <Label>Select Tip %</Label>
        </div>
        <div className="tip-selector">
          <TipSelectorPage
            sendPercentValue={getPercentage}
            sendCustomPercent={getCustomPercentage}
          />
        </div>
      </div>
      <div className="people-count">
        <div className="billing-label">
          <Label>No of People</Label>
          {props.peopleCountError && <Error>Can't be Zero</Error>}
        </div>
        <div className="billing-inputs">
          <Input
            attributes={{
              min: 0,
              max: 999,
            }}
            onChange={peopleCountHandler}
            value={peopleCount}
           // onBlur={peopleCountBlurHandler}
            icon={
              <PeopleAltSharp
                fontSize="24"
                sx={{ color: "hsl(184, 14%, 56%)" }}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AmountCalcualationCard;
