import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const url = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png';
const headerText = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!";

const HeaderContainer = () => (
  <header>
    <ImageThumbnail url={url} />

    <div>
      <HeaderTitle title='Lambda School' handle='@LambdaSchool' />
      <HeaderContent text={headerText} />
    </div>
  </header>
);

export default HeaderContainer;
