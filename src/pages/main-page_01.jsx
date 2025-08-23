import React from 'react';
import Header from '../components/header/header';
import CardContainer from '../components/landing/card-container';
import EmojiContainer from '../components/landing/emoji-container';

function MainPage() {
  return (
    <div>
      <CardContainer />
      <EmojiContainer />
    </div>
  );
}

export default MainPage;
