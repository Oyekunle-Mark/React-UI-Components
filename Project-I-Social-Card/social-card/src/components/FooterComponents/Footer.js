import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retweet: 0,
      like: 0,
    };

    this.likeHandler = this.likeHandler.bind(this);
    this.retweetHandler = this.retweetHandler.bind(this);
  }

  likeHandler() {
    const newCount = this.state.like;

    this.setState({
      like: newCount + 1,
    });
  }

  retweetHandler() {
    const newCount = this.state.retweet;

    this.setState({
      retweet: newCount + 1,
    });
  }

  render() {
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
            onClick={this.retweetHandler}
          />
          <span>{this.state.retweet === 0 ? " " : this.state.retweet}</span>
        </div>
        <div className="icon">
          <img
            src="https://img.icons8.com/dusk/64/000000/hearts.png"
            alt="like"
            onClick={this.likeHandler}
          />
          <span>{this.state.like === 0 ? " " : this.state.like}</span>
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
}

export default Footer;
