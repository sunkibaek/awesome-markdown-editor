import React, { ChangeEventHandler, Component } from "react";

interface IProps {
  texts: string;
  onTextAreaChange: ChangeEventHandler<HTMLTextAreaElement>;
}

import TextArea from "./components/TextArea";

class InputPane extends Component<IProps> {
  public render() {
    const { onTextAreaChange, texts } = this.props;

    return <TextArea texts={texts} onChange={onTextAreaChange} />;
  }
}

export default InputPane;
