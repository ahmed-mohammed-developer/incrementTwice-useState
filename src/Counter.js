import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    function incrementTwice(){
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }
    return(
        <>
        <p>Coun: {count}</p>
        <button onClick={incrementTwice}>Increment Twice</button>
        </>
    )
}