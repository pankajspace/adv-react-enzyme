import React from "react";
import propTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export const Congrats = ({ success }) => {
  let content;

  if (success) {
    content = (
      <Alert variant={"success"}>
        <div data-test="congrats-message">
          You have guessed the word correctly
        </div>
      </Alert>
    );
  } else {
    content = <div data-test="congrats-message"></div>;
  }

  return <div data-test="congrats-component">{content}</div>;
};

Congrats.propTypes = {
  success: propTypes.bool.isRequired,
};
