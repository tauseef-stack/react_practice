import React, { useState } from 'react'
function Child({ value }) {
    return (
        <h3>Count is : { value}</h3>
    )
}
export const ParentToChildState = () => {
    const [count, setCount] = useState(0);
    function handlleChange(val) {
        setCount(count + val);
    }
  return (
      <div className="container w-50 mx-auto my-3">
          <h3>Parent to Child State Transfer</h3> 
          <Child value={count} />
          <button className="btn btn-primary m-3" onClick={() =>{handlleChange(1)}}>+</button>
          <button className="btn btn-primary m-3" onClick={() =>{handlleChange(-1)}}>-</button>
    </div>
  )
}
