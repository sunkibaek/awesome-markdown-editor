import React, { ChangeEventHandler, Component } from "react";

import Preview from "./Preview";
import Space from "./styles/Space";
import TextArea from "./TextArea";

interface IState {
  texts: string;
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

    this.state = { texts: "" };
  }

  public render() {
    const { texts } = this.state;

    return (
      <div style={styles.container}>
        <h1>Awesome Markdown Editor</h1>

        <div style={styles.panesContainer}>
          <TextArea texts={texts} onChange={this.handleTextAreaChange} />

          <Preview texts={texts} />
        </div>
      </div>
    );
  }

  private handleTextAreaChange: ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    this.setState({ texts: event.target.value });
  };
}

export default App;
