import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <NumberButton text='1' buttonStyle='number-button' />
    </div>
  );
};

export default App;
