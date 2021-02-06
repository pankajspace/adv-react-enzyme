import React from "react";
import propTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export const GuessedWords = ({ guessedWords }) => {
  const renderGuesses = () => {
    return guessedWords.map((guess, index) => {
      return (
        <tr data-test="guessed-words-row" key={index}>
          <td>{guess.word}</td>
          <td>{guess.correctLetters}</td>
        </tr>
      );
    });
  };

  const renderContent = () => {
    if (guessedWords && guessedWords.length > 0) {
      return (
        <div>
          <h4>Guessed Words</h4>
          <Row className="justify-content-md-center">
            <Col>
              <Table
                striped
                bordered
                hover
                size="sm"
                variant="light"
                data-test="guessed-words-table"
              >
                <thead>
                  <tr>
                    <th>Guessed Word</th>
                    <th>Correct Letters</th>
                  </tr>
                </thead>
                <tbody>{renderGuesses()}</tbody>
              </Table>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div data-test="guessed-words-instructions">Try to guess the words</div>
      );
    }
  };

  return <div data-test="guessed-words-component">{renderContent()}</div>;
};

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      word: propTypes.string.isRequired,
      correctLetters: propTypes.number.isRequired,
    })
  ).isRequired,
};
