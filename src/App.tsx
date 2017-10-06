import React, { ChangeEventHandler, Component } from "react";

import InputPane from "./InputPane";
import Preview from "./Preview";
import Space from "./styles/Space";

interface IState {
  inputTexts: string;
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column" as "column",
    padding: Space.md
  },
  panesContainer: {
    display: "flex",
    flex: 1
  }
};

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = { inputTexts: "" };
  }

  public render() {
    const { inputTexts } = this.state;

    return (
      <div style={styles.container}>
        <h1>Awesome Markdown Editor</h1>

        <div style={styles.panesContainer}>
          <InputPane
            texts={inputTexts}
            onTextAreaChange={this.handleTextAreaChange}
          />

          <Preview texts={this.parsedTexts()} />
        </div>
      </div>
    );
  }

  private handleTextAreaChange: ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    this.setState({ inputTexts: event.target.value });
  };

  private parsedTexts = () => {
    return this.state.inputTexts;
  };
}

export default App;
