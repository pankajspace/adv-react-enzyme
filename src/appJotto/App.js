import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import "./App.css";
import { Congrats } from "../appJotto/Congrats";
import Input from "../appJotto/Input";
import { GuessedWords } from "../appJotto/GuessedWords";
import { getSecretWord } from "./actions";

// const guessedWords = [
//   { word: "pest", correctLetters: 3 },
//   { word: "best", correctLetters: 3 },
// ];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="App container" data-test="component-app">
        <h1>Jotto App</h1>
        {/* <div>The secret word is {this.props.secretWord}</div> */}
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

App.propTypes = {
  success: propTypes.bool.isRequired,
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      word: propTypes.string.isRequired,
      correctLetters: propTypes.number.isRequired,
    })
  ).isRequired,
  secretWord: propTypes.string.isRequired,
};

export const mapStateToProps = (state) => {
  const { success, secretWord, guessedWords } = state;
  return {
    success,
    secretWord,
    guessedWords,
  };
};

export default connect(mapStateToProps, { getSecretWord })(App);
