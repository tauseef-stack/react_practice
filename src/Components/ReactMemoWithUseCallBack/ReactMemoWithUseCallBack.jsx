import React, { useCallback, useState } from 'react'
import  Todos  from './Todos';

export const ReactMemoWithUseCallBack = () => {
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const [count, setCount] = useState(0);
    function handleChange(val) {
        setCount(count + val);
    }

    const handleTodo = useCallback(() => {
      return  setTodos((ele)=>[...ele,"New Todo"])
  },[todos]) 
       
    
  return (
      <div className="container w-50 mx-auto my-3">
          <div>
              <h4 className="text-muted">My Todo</h4> 
              <Todos todos={todos} addTodo={ handleTodo }/>
              
          </div>
          <div>
          <h4 className="text-muted">My Counter</h4> 
              <h5>Count is {count}</h5>
              <button className="btn btn-warning m-3" onClick={()=>handleChange(1)}>+</button>
              <button className="btn btn-warning" onClick={()=>handleChange(-1)}>-</button>
          </div>
          
     </div>
  )
}
