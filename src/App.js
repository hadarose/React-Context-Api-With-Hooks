import React from 'react';
import {CounterContextProvider} from "./CounterContext";
import CounterChange from "./CounterChange";
import CounterDisplay from "./CounterDisplay";


function App() {
  return (
    <CounterContextProvider>
      <CounterChange />
      <br/>
      <CounterDisplay />
    </CounterContextProvider>
  );
}

export default App;
