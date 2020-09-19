import React, {useState, createContext} from "react";

export const CounterContext = createContext();

export const CounterContextProvider = props =>
{
    const [count, setCount] = useState(0);

    return (
        // This is the Provider of context Api. 
        // Every layer, each child could use not only the state (count) but the setState also (setCount)
        <CounterContext.Provider value = {[count, setCount]} >
            {props.children}
        </CounterContext.Provider>
    )
}