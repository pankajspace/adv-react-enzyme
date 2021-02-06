import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

import "./App.css";
import { Congrats } from "../appJotto/Congrats";
import { GuessedWords } from "../appJotto/GuessedWords";

const guessedWords = [
  { word: "pest", correctLetters: 3 },
  { word: "best", correctLetters: 3 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App container" data-test="component-app">
        <h1>Jotto App</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

export default App;
