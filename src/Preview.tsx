import React from "react";

import Space from "./styles/Space";

interface IProps {
  texts: string;
}

const styles = {
  container: {
    flex: 1,
    padding: Space.md
  }
};

const Preview = ({ texts }: IProps) => (
  <div style={styles.container}>{texts}</div>
);

export default Preview;
