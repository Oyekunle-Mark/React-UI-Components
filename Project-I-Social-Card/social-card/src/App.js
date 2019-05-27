import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from './components/CardComponents/CardContainer';
import "./App.css";

const App = () => (
  <div className='card'>
    <HeaderContainer />
    <CardContainer />
  </div>
);

export default App;
