import React, { useState } from 'react'

export const PropsDrilling = () => {
    const [name,setName] = useState("Tauseef")
  return (
      <div>
          <h1 className="text-muted fst-italic">Component1</h1>
          <Component2 user={ name }/>
     </div>
  )
}

const Component2 = ({ user })=> {
    return (
        <div>
            <h2 className="text-muted fst-italic">Component2</h2>
            <Component3 user={ user }/>
        </div>
    )
}

const Component3 = ({ user })=> {
    return (
        <div>
            <h3 className="text-muted fst-italic">Component3</h3>
            <Component4 user={ user }/>
        </div>
    )
}

const Component4 = ({ user })=> {
    return (
        <div>
            <h4 className="text-muted fst-italic">Component4</h4>
            <Component5 user={ user }/>
        </div>
    )
}
const Component5 = ({ user })=> {
    return (
        <div>
            <h5 className="text-muted fst-italic">Component5</h5>
            <h6 className="text-muted fst-italic">{ `User Name is ${user}` }</h6>
           
        </div>
    )
}