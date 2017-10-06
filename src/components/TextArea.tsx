import React, { ChangeEventHandler, Component } from "react";

import Color from "../styles/Color";
import Space from "../styles/Space";

interface IProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  texts: string;
}

const styles = {
  textarea: {
    backgroundColor: Color.LIGHT_NAVY,
    borderWidth: 0,
    color: Color.WHITE,
    flex: 1,
    fontSize: "1rem",
    padding: Space.LG
  }
};

class TextArea extends Component<IProps> {
  public render() {
    const { texts } = this.props;

    return (
      <textarea
        style={styles.textarea}
        value={texts}
        onChange={this.handleTextareaChange}
      />
    );
  }

  private handleTextareaChange: ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    const { onChange } = this.props;

    if (typeof onChange === "function") {
      onChange(event);
    }
  };
}

export default TextArea;
