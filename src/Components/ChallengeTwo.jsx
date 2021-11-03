import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { students: studentList, show: false };

    this.randomize = this.randomize.bind(this);
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 secondst
    window.setTimeout(() => {
      this.setState((prevState) => ({
        show: true,
      }));
    }, 3000);
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    this.setState((prevState) => ({
      students: prevState.students.sort((a, b) => 0.5 - Math.random()),
    }));
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>{this.state.show && this.state.students}</ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}
