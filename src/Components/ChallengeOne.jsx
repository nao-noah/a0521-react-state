import React, { Component } from "react";
import leftimg from "../Assets/look-left.jpeg";
import rightimg from "../Assets/look-right.jpeg";

class ChallengeOne extends Component {
  constructor(props) {
    super(props);
    this.state = { isLeft: true };

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  left() {
    this.setState((prevState) => ({
      isLeft: true,
    }));
  }

  right() {
    this.setState((prevState) => ({
      isLeft: false,
    }));
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          {this.state.isLeft ? (
            <img className="ch1" src={leftimg} alt="" />
          ) : (
            <img className="ch1" src={rightimg} alt="" />
          )}
        </div>
        <button className="btn" onClick={this.left}>
          ⭠
        </button>
        <button className="btn" onClick={this.right}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
