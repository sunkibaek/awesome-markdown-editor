import React, { Component, MouseEventHandler } from "react";

import Color from "./styles/Color";
import Space from "./styles/Space";

interface IProps {
  isSaved: boolean;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

const styles = {
  container: {
    alignItems: "center" as "center",
    backgroundColor: Color.NAVY,
    display: "flex",
    justifyContent: "space-between" as "space-between",
    padding: Space.LG
  },
  disabledInput: {
    backgroundColor: Color.LIGHT_GRAY
  },
  input: {
    backgroundColor: Color.WHITE,
    borderRadius: 3,
    borderWidth: 0,
    color: Color.NAVY,
    fontWeight: 700 as 700,
    paddingBottom: Space.MD,
    paddingLeft: Space.LG,
    paddingRight: Space.LG,
    paddingTop: Space.MD
  },
  title: {
    color: Color.WHITE,
    fontWeight: 100 as 100,
    margin: 0
  }
};

class TitleBar extends Component<IProps> {
  public render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Awesome Markdown Editor</h1>

        <button
          disabled={this.props.isSaved}
          onClick={this.props.onSubmit}
          style={this.buttonStyle()}
        >
          {this.buttonText()}
        </button>
      </div>
    );
  }

  private buttonStyle = () => ({
    ...styles.input,
    ...this.props.isSaved ? styles.disabledInput : {}
  });

  private buttonText = () => (this.props.isSaved ? "SAVED!" : "SAVE");
}

export default TitleBar;
