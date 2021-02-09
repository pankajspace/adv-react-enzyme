import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
  render() {
    let content = this.props.success ? "" : (
      <form data-test="form-input">
        <input type="text" data-test="element-input" />
        <button type="submit" data-test="button-input">
          Submit
        </button>
      </form>
    );
    return content;
  }
}

const mapStateToProps = ({success}) => {
  return {success};
};

export default connect(mapStateToProps)(Input);
