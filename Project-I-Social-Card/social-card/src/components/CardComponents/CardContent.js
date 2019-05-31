import React from 'react';
import './Card.css';

const CardContent = ({ header, text }) => (
  <div className='content'>
    <h4>{header}</h4>
    <p>{text}</p>
    <p className='react-web'>reactjs.org</p>
  </div>
);

export default CardContent;
