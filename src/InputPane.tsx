import React, {
  ChangeEventHandler,
  Component,
  CSSProperties,
  FormEventHandler
} from "react";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onTextAreaChange: ChangeEventHandler<HTMLTextAreaElement>;
  texts: string;
  style: CSSProperties;
}

import TextArea from "./components/TextArea";
import Color from "./styles/Color";

const styles = {
  form: {
    display: "flex",
    flex: 1,
    flexDirection: "column" as "column"
  },
  input: {
    alignSelf: "flex-end" as "flex-end",
    backgroundColor: Color.WHITE,
    borderColor: Color.LIGHT_GRAY,
    borderRadius: 3,
    borderWidth: 1,
    color: "#5078C8",
    fontWeight: 700 as 700,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  }
};

class InputPane extends Component<IProps> {
  public render() {
    const { onTextAreaChange, onSubmit, style, texts } = this.props;

    return (
      <form onSubmit={onSubmit} style={{ ...styles.form, ...style }}>
        <TextArea texts={texts} onChange={onTextAreaChange} />

        <button style={styles.input} type="submit">
          SAVE
        </button>
      </form>
    );
  }
}

export default InputPane;
