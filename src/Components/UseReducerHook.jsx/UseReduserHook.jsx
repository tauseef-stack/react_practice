import React, { useReducer } from 'react';

const reducer = (state,{id,type}) => {
    switch (type) {
        case "TOGGLE":
           return state.map(ele=> ele.id===id ? {...ele,status:!ele.status} : ele)   
        default:
            return state;
      } 
}

export const UseReduserHook = () => {
    const initialState = [
        {
            id: 1,
            todo: "Tauseef",
            status: false,
        },
        {
            id: 2,
            todo: "Shariq",
            status: false,
        }
    ];
    function handleChange(id) {
        dispatch({
            type: "TOGGLE",
            id:id,
        })
    }
    const[todos,dispatch] = useReducer(reducer,initialState);
  return (
      <div className="container w-50 mx-auto my-3">
          {todos.map((ele,i) => (
               <div key={i}>
               <input type="checkbox" onChange={()=>handleChange(ele.id)} checked={ele.status} />
               <h5 className="text-muted fst-italic">{ ele.todo }</h5>
               <h6 className="text-muted fst-italic">{ ele.status ? "Done" : "Pending" }</h6>
               </div>
          ))}
         
    </div>
  )
}
