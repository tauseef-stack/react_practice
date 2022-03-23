import React, { useEffect, useState } from 'react'

export const DataWithoutCustomHook = () => {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
            res.json().then((data) => {
                setData([...data]) 
             })
         })
    },[])
  return (
      <div>
          {mydata && mydata.map((ele) => <h5 className="text-muted fst-italic">{ ele.title }</h5>)}  
     </div>
  )
}
