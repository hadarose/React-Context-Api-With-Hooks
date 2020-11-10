import React, {useContext} from "react";
import {CounterContext} from "./CounterContext";

function CounterChange()
{
    const [count, setCount] = useContext(CounterContext);
    
    const increment = () =>
    {
        setCount(count + 1);
    }

    const decrement = () =>
    {
        setCount(count - 1);
    }

    return (
        <div style = {{marginLeft: '10px'}}>
            <h1>A Counter in React</h1>
            <h3>Using Context API with Hooks</h3>
            <input type = "button" value = "+" onClick = {increment} />
            <input type = "button" value = "-" onClick = {decrement} />
        </div>
    )
}

export default CounterChange;