import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <CalculatorDisplay />
      <NumberButton text='1' buttonStyle='number-button' />
      <ActionButton text='clear' />
    </div>
  );
};

export default App;
