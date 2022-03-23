import React from 'react'
import { useState } from 'react';
 function ShowCount({value}) {
    return (
        <h3>Count is :{ value } </h3>
    )
}

 function Button({counterHandler,label}) {
    return (
        <button class="btn btn-primary m-2" onClick={counterHandler}>{ label }</button>
    )
}

export const SiblingStateLifting = () => {
    const [count, setCount] = useState(0);
    function handlleChnage(value) {
        setCount(count+value)
    }
  return (
      <div class="container w-50 mx-auto my-3">
          <ShowCount value={count} /> 
          <Button counterHandler={() => handlleChnage(-1)} label={ "-" }/>
          <Button counterHandler={() => handlleChnage(1)} label={ "+" }/>
    </div>
  )
}
