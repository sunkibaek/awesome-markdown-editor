import React, { MouseEventHandler } from "react";

import Color from "./styles/Color";
import Space from "./styles/Space";

interface IProps {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

const styles = {
  container: {
    alignItems: "center" as "center",
    backgroundColor: Color.NAVY,
    display: "flex",
    justifyContent: "space-between" as "space-between",
    paddingBottom: Space.LG,
    paddingLeft: Space.MD,
    paddingRight: Space.MD,
    paddingTop: Space.LG
  },
  input: {
    backgroundColor: Color.WHITE,
    borderRadius: 3,
    borderWidth: 0,
    color: Color.NAVY,
    fontWeight: 700 as 700,
    paddingBottom: Space.MD,
    paddingLeft: Space.LG,
    paddingRight: Space.LG,
    paddingTop: Space.MD
  },
  title: {
    color: Color.WHITE,
    fontWeight: 100 as 100,
    margin: 0
  }
};

const TitleBar = ({ onSubmit }: IProps) => (
  <div style={styles.container}>
    <h1 style={styles.title}>Awesome Markdown Editor</h1>

    <button onClick={onSubmit} style={styles.input}>
      SAVE
    </button>
  </div>
);

export default TitleBar;
