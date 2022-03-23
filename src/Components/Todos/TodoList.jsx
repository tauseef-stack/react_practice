import React from 'react'

export const TodoList = ({ list, myDelete , myToggle, myUpdate }) => {
    
  return (
      <div className=" my-3">
          {list[0] && list.map((ele, i) => (
              <div className="border border-warning p-3 m-3" key={i}>
                  <h4 className={`${ele.status&&"text-decoration-line-through"} fst-italic` }>Task: {ele.text}</h4>
                  <h5>Status: {!ele.status?"Pending":"Done"}</h5>
                  <button className="btn btn-primary" onClick={()=>{myUpdate(ele.id)}} >Update</button>
                  <button onClick={()=>myDelete(ele.id)} className="btn btn-danger m-3">Delete</button>
                  <button className="btn btn-info" onClick={()=>myToggle(ele.id)}>Toggle Status</button>
              </div> 
        ))}
    </div>
  )
}
