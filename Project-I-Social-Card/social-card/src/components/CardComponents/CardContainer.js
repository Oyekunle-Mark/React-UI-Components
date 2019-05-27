import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const url = 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png';
const header = 'Get started with React';
const text = 'React makes it painless to create interactive UIs. Design simple views for each state in your application';

const CardContainer = () => (
  <div className='card-content'>
    <CardBanner url={url} />
    <CardContent header={header} text={text} />
  </div>
);

export default CardContainer;
