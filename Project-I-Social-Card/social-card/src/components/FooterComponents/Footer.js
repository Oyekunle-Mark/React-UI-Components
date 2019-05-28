import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [retweet, updateRetweet] = useState(0);
  const [like, updateLike] = useState(0);

  const retweetHandler = () => {
    updateRetweet(retweet + 1);
  };

  const likeHandler = () => {
    updateLike(like + 1);
  };

  return (
    <footer>
      <div className="icon">
        <img
          src="https://img.icons8.com/cotton/64/000000/speech-bubble-with-dots.png"
          alt="comment"
        />
      </div>
      <div className="icon">
        <img
          src="https://img.icons8.com/office/16/000000/retweet.png"
          alt="retweet"
          onClick={retweetHandler}
        />
        <span>{retweet === 0 ? " " : retweet}</span>
      </div>
      <div className="icon">
        <img
          src="https://img.icons8.com/dusk/64/000000/hearts.png"
          alt="like"
          onClick={likeHandler}
        />
        <span>{like === 0 ? " " : like}</span>
      </div>
      <div className="icon">
        <img
          src="https://img.icons8.com/nolan/64/000000/new-post.png"
          alt="message"
        />
      </div>
    </footer>
  );
}
