import React, { ChangeEventHandler, Component, MouseEventHandler } from "react";

import InputPane from "./InputPane";
import StorageManager from "./managers/StorageManager";
import OutputPane from "./OutputPane";
import Space from "./styles/Space";
import TitleBar from "./TitleBar";

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
        <TitleBar onSubmit={this.save} />

        <div style={styles.panesContainer}>
          <InputPane
            texts={inputTexts}
            onTextAreaChange={this.handleTextAreaChange}
            style={styles.inputPane}
          />

          <OutputPane texts={inputTexts} />
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

  private save: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();

    this.storageManager.save(this.state.inputTexts);
  };

  private handleTextAreaChange: ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    this.setState({ inputTexts: event.target.value });
  };
}

export default App;
