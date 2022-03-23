import React, { useState } from 'react'
function Child({value,handleInc,handleDecr}) {
    return (
        <div>
        <h3>Count is : {value}</h3>
        <button className="btn btn-primary m-3" onClick={handleInc}>+</button>
        <button className="btn btn-primary m-3" onClick={handleDecr}>-</button>
    </div>
   ) 
    
}
export const ChidToParent = () => {
    const [count, setCount] = useState(0);
    function handleChange(val) {
        setCount(count + val);
    }
  return (
      <div className="container w-50 mx-auto my-3">
          <Child value={count} handleInc={()=>handleChange(1)} handleDecr={()=>handleChange(-1)}/>  
    </div>
  )
}
