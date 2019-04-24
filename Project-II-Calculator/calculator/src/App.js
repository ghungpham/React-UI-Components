import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const actions = [{text:"÷", buttonStyle: "action"}, {text: "x", buttonStyle:"action"}, {text: "+", buttonStyle: "action"}, {text: "-", buttonStyle: "action"}, {text: "=", buttonStyle: "action"}];

const App = () => {
  return (
    <div className = "calc">
      <CalculatorDisplay />
      <div className = "buttons">
      <NumberButton />
      <div className = "actionbuttons">
  {actions.map(buttons => {return <ActionButton buttonProp={buttons} />})}
      </div>
      </div>
    </div>
  );
};

export default App;
