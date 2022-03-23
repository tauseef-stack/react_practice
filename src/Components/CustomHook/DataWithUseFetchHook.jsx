import React from 'react'
import { useFetch } from './useFetch'

export const DataWithUseFetchHook = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
      <div className="container w-50 mx-auto my-3">
          {data && data.map((ele,i) => <h5 key={i} className="text-muted fst-italic">{ ele.title }</h5>)} 
    </div>
    
  )
}
