import React, { ChangeEventHandler, Component, FormEventHandler } from "react";

import InputPane from "./InputPane";
import StorageManager from "./managers/StorageManager";
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
  inputPane: {
    marginRight: 10
  },
  panesContainer: {
    display: "flex",
    flex: 1
  }
};

class App extends Component<{}, IState> {
  private storageManager: StorageManager;

  constructor(props: {}) {
    super(props);

    this.storageManager = new StorageManager(StorageManager.KEYS.texts);
    this.state = { inputTexts: "" };
  }

  public componentDidMount() {
    this.loadTexts();
  }

  public render() {
    const { inputTexts } = this.state;

    return (
      <div style={styles.container}>
        <h1>Awesome Markdown Editor</h1>

        <div style={styles.panesContainer}>
          <InputPane
            texts={inputTexts}
            onSubmit={this.save}
            onTextAreaChange={this.handleTextAreaChange}
            style={styles.inputPane}
          />

          <Preview texts={this.parsedTexts()} />
        </div>
      </div>
    );
  }

  private loadTexts = () => {
    const texts = this.storageManager.load() || "";

    this.setState({
      inputTexts: texts
    });
  };

  private save: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    this.storageManager.save(this.state.inputTexts);
  };

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
