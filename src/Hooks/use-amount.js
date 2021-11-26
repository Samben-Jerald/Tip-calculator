  import React, { useState } from 'react'
  

  const useAmount = (value)=> {
    const [number, setNumber] = useState(value);
 
    const numberHandler = (event) => {
        setNumber(event.target.value);
      };
    return{
        number,
        numberHandler
    }
  }

  export default useAmount;