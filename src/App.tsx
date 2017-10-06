import React from "react";

import Space from "./styles/Space";
import TextArea from "./TextArea";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column" as "column",
    padding: Space.md
  }
};

const App = () => (
  <div style={styles.container}>
    <h1>Awesome Markdown Editor</h1>

    <TextArea />
  </div>
);

export default App;
