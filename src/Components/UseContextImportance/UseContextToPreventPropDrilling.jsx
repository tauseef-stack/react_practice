import React, { createContext, useContext, useState } from 'react'
const myContext = createContext();

export const UseContextToPreventPropDrilling = () => {
    const [user, setUser] = useState("Tauseef");
    
    return (
      <myContext.Provider value={user}>
        <div className="container w-50 mx-auto my-3">
          <h1 className="text-muted fst-italic">{`Hello ${user} Component 1`}</h1>
          <Component2/>
     </div>    
      </myContext.Provider>   
  )
}

const Component2 = () => {
    return (
        <div >
        <h2 className="text-muted fst-italic">Component2</h2>
        <Component3/>
   </div> 
    )
}

const Component3 = () => {
    return (
        <div >
        <h3 className="text-muted fst-italic">Component3</h3>
        <Component4/>
   </div> 
    )
}

const Component4 = () => {
    return (
        <div >
        <h4 className="text-muted fst-italic">Component4</h4>
        <Component5/>
   </div> 
    )
}

const Component5 = () => {
    const myUser = useContext(myContext);
    return (
        <div >
        <h5 className="text-muted fst-italic">Component5</h5>
            <h6 className="text-muted fst-italic">{ `User Name is ${myUser}` }</h6>
         
        </div> 
    )
}
