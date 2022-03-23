import React, { memo } from 'react'

 const Todos = ({todos,addTodo}) => {
  return (
      <div className="container">
          {todos.map((ele) => <h5 className="text-muted fst-italic">{ele}</h5>)} 
          <button className="btn btn-primary m-3"onClick={addTodo}>Add Todo</button>
    </div>
  )
}
export default memo(Todos);