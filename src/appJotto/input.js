import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import { guessWord } from "./actions";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: "",
    };
  }

  submitGuess = (e) => {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  };

  render() {
    let content = this.props.success ? (
      ""
    ) : (
      <form data-test="form-input">
        <input
          type="text"
          data-test="element-input"
          value={this.state.currentGuess}
          onChange={(e) => {
            this.setState({ currentGuess: e.target.value });
          }}
        />
        <button
          type="submit"
          data-test="button-input"
          onClick={(e) => this.submitGuess(e)}
        >
          Submit
        </button>
      </form>
    );
    return content;
  }
}

Input.propTypes = {
  success: propTypes.bool.isRequired,
};

// const mapStateToProps = (state) => {
//   return { success: state.success };
// };

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);
