
import { useState } from 'react';
export function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count+1);
    }
    function handleDecrement() {
        setCount(count-1);
   }
    return (
        <div className="container border border-success w-50 mx-auto my-3 p-3">
            <h3>Your count is : {count}</h3>
            <button className="btn btn-success m-3" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-success" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}