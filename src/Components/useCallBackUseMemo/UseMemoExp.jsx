import React, { useMemo, useState } from 'react'
function expensiveCalcuation(num) {
    for (let i = 0; i < 1000000000; i++){
        num += 1;
    }
    return num;
}
export const UseMemoExp = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => {
       return expensiveCalcuation(count)
    },[count]);
    function handleTodo() {
        setTodos([...todos,"New Todo"]);
    }
    function handleChange(val) {
        setCount(count + val);
   }
  return (
      <div className="container w-50 mx-auto my-3">
          <div>
              <h4 className="text-muted">My Todo</h4>
              {todos.map((ele) => <h5 className="fst-italic">{ele}</h5>)}
              <button class="btn btn-primary" onClick={handleTodo}>Add Todo</button>
          </div>
          <div>
              <h4 className="text-muted">My Counter</h4>
              <h5>Count is {count}</h5>
              <button className="btn btn-info m-3"onClick={()=>handleChange(1)}>+</button>
              <button className="btn btn-danger"onClick={()=>handleChange(-1)}>-</button>
          </div>
          <h1>
              {calculation}
          </h1>
    </div>
  )
}
