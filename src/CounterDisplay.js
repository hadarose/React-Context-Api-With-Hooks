import React, {useContext} from "react";
import {CounterContext} from "./CounterContext";

function CounterDisplay()
{
    const [count] = useContext(CounterContext);
    
    return (
        <div style = {{marginLeft: '10px'}}>
            Counter: {count}
        </div>
    )
}

export default CounterDisplay;