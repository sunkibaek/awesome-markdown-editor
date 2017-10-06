import React from "react";

import Space from "./styles/Space";

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
  </div>
);

export default App;
