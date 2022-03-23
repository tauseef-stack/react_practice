import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
export const TodosInput = ({addTodo}) => {
    const [todoText, setTodoText] = useState("");
    function handleChange(e) {
        setTodoText(e.target.value);
        //console.log(todoText)
    }
    function handleTodo() {
        const payload = {
            id:uuid(),
            text: todoText,
            status: false,
        }
        console.log(payload)
        addTodo(payload);
        setTodoText("");
    }
  return (
      <div className=" mb-3">
          <input type="text" className="form-control m-3" placeholder="Enter Your Todo" name="todoValue" value={todoText} onChange={handleChange} />
         <button className="btn btn-primary m-3" onClick={handleTodo}>Add Todo</button>  
    </div>
  )
}
