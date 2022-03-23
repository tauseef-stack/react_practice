import React, { useRef, useState } from 'react'

export function Todos() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const todoInputRef = useRef();
    function handleChange(e) {
        setTodo(e.target.value);
       // console.log(todo)
    }
    function handleTodo() {
        setList([...list, todo]);
        setTodo(null);
        todoInputRef.current.value = "";
    }
  return (
      <div className="container border border-warning w-50 mx-auto my-3 p-3">
          <h3>Your Todo : {todo}</h3> 
          <input type="text" placeholder='Enter your Todo' className="form-control w-50 m-auto" onChange={handleChange} ref={todoInputRef} />
          <button className="btn btn-primary m-3" onClick={handleTodo}>Add Todo</button>
          <div className="container w-50 m-auto border">
              <ul className="list-group list-group-flush">
                  {list.map((ele) => (<li className="list-group-item">{ele }</li>))}
              </ul>
          </div>
    </div>
  )
}
