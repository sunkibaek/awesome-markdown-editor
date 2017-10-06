import React, { MouseEventHandler } from "react";

import Color from "./styles/Color";

interface IProps {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

const styles = {
  container: {
    alignItems: "center" as "center",
    backgroundColor: Color.NAVY,
    display: "flex",
    justifyContent: "space-between" as "space-between",
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  input: {
    backgroundColor: Color.WHITE,
    borderRadius: 3,
    borderWidth: 0,
    color: Color.NAVY,
    fontWeight: 700 as 700,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
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
