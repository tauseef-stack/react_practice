import React, { useRef, useState } from 'react'

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isStart, setIsStart] = useState(true);
    const intervalRef = useRef();
    function handleStart() {
        if (isStart) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000)
            setIsStart(false);
        }
    }
    function handleStop() {
        clearInterval(intervalRef.current);
        setIsStart(true)
    }
    function handleReset() {
        clearInterval(intervalRef.current);
        setIsStart(true)
        setTime(0);
  }

  return (
      <div className="container border border-primary w-50 mx-auto p-3">
          <h2>Stop Watch</h2>
          <h3>Time is : {time}</h3>
          <button className="btn btn-success" onClick={handleStart}>Start</button>
          <button className="btn btn-danger m-3" onClick={handleStop}>Stop</button>
          <button className="btn btn-info" onClick={handleReset}>Reset</button>   
    </div>
  )
}
