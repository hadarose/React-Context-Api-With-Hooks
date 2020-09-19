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
        <div>
            <input type = "button" value = "+" onClick = {increment} />
            <input type = "button" value = "-" onClick = {decrement} />
        </div>
    )
}

export default CounterChange;