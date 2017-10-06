import React, { ChangeEventHandler, Component, CSSProperties } from "react";

interface IProps {
  onTextAreaChange: ChangeEventHandler<HTMLTextAreaElement>;
  texts: string;
  style: CSSProperties;
}

import TextArea from "./components/TextArea";

const styles = {
  form: {
    display: "flex",
    flex: 1,
    flexDirection: "column" as "column"
  }
};

class InputPane extends Component<IProps> {
  public render() {
    const { onTextAreaChange, style, texts } = this.props;

    return (
      <form style={{ ...styles.form, ...style }}>
        <TextArea texts={texts} onChange={onTextAreaChange} />
      </form>
    );
  }
}

export default InputPane;
