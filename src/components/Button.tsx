import React, { Component, MouseEventHandler } from "react";

import Color from "../styles/Color";
import Space from "../styles/Space";

interface IProps {
  isDisabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const styles = {
  disabledInput: {
    backgroundColor: Color.LIGHT_GRAY
  },
  input: {
    backgroundColor: Color.GREEN,
    borderRadius: 3,
    borderWidth: 0,
    color: Color.WHITE,
    fontWeight: 700 as 700,
    paddingBottom: Space.MD,
    paddingLeft: Space.LG,
    paddingRight: Space.LG,
    paddingTop: Space.MD
  }
};

class Button extends Component<IProps> {
  public render() {
    return (
      <button
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}
        style={this.buttonStyle()}
      >
        {this.props.text}
      </button>
    );
  }

  private buttonStyle = () => ({
    ...styles.input,
    ...this.props.isDisabled ? styles.disabledInput : {}
  });
}

export default Button;
