import React, { Component, MouseEventHandler } from "react";

import Button from "./components/Button";
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

        <Button
          isDisabled={this.props.isSaved}
          onClick={this.props.onSubmit}
          text={this.buttonText()}
        />
      </div>
    );
  }

  private buttonText = () => (this.props.isSaved ? "SAVED!" : "SAVE");
}

export default TitleBar;
