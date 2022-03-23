import React, { useState } from 'react'

export const Sorting = () => {

    const initArr = [5, 6, 7, 8, 4, 3, 2, 9, 0];
    const [arr, setArr] = useState(initArr);
  return (
      <div className="container border border-danger mx-auto p-3 my-3 w-50">
          <h3>Sorting of an Array </h3>
          <button className="btn btn-primary" onClick={() => {
              console.log("Clicked",arr)
              setArr(arr.sort((a, b) => (a - b)))
              console.log("Clicked",arr)
          }}>Ascending</button>
          <button className="btn btn-primary m-3" onClick={() => {
              console.log("Clicked",arr)
               
              setArr([...arr].sort((a, b) => (b - a)))
              console.log("Clicked",arr)
          }}>Dcending</button>
          <button className="btn btn-primary" onClick={() => {
              console.log(initArr)
              setArr([...initArr])
          }}> Original

          </button>
          <div className="container border border-info w-50 m-auto">
              <ul className="list-group list-group-flush m-3">
                  {arr.map((ele,i) => (<li key={i} className="list-group-item">{ ele }</li>))}
              </ul>
          </div>
      </div>
  )
}
