import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className = "calc">
      <CalculatorDisplay />
      <div className = "buttons">
      <NumberButton />
      <ActionButton />
      </div>
    </div>
  );
};

export default App;
