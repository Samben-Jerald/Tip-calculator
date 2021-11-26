import React, { useState } from "react";
import "../ComponentStyles/HomePage.css";
import TotalAmountCard from "../PageComponent/TotalAmountCard";
import AmountCalcualtorCard from "../PageComponent/AmountCalcualationCard";

const HomePage = () => {
  const [amount, setAmount] = useState(null);
  const [peopleCount, setPeopleCount] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [tipCost,setTipCost] = useState("00.00");
  const [personCost,setPersonCost] = useState("00.00");
  const [amountError, setAmountError] = useState(false);
  const [peopleCountError, setPeopleCounterError] = useState(false);

  function dividePerPerson(total,personCount){
    const totalAmount = total/personCount;
    return totalAmount.toFixed(2);
  }

  function findTipPerPerson(percent,amount){
    const TipAmount = (percent/100)*amount;
    return TipAmount.toFixed(2);
  }

  function getAllData(amount, percentage, peopleCount) {
    setAmount(amount);
    setPercentage(percentage);
    setPeopleCount(peopleCount);
  }
  const submitHandler = () => {
    if (amount < 10) {
      setAmountError(true);
      return;
    }
    if (amount >= 10) {
      setAmountError(false);
    }
    if (peopleCount < 2) {
      setPeopleCounterError(true);
      return;
    }
    if (peopleCount >= 2) {
      setPeopleCounterError(false);
    }
    if(percentage === null || percentage === undefined){
      return;
    }
    const personShare = dividePerPerson(amount,peopleCount)
    const TipShare = findTipPerPerson(percentage,personShare)
    setTipCost(TipShare)
    setPersonCost(personShare)
  };

  return (
    <div className="main-container">
      <header>
        <h3 className="title">SPLI</h3>
        <h3 className="title">TTER</h3>
      </header>
      <main>
        <section>
          <AmountCalcualtorCard
            amountError={amountError}
            peopleCountError={peopleCountError}
            sendAllData={getAllData}
          />
        </section>
        <section>
          <TotalAmountCard
            tipPerPerson={tipCost}
            costPerPerson={personCost}
            submitHandler={submitHandler}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
