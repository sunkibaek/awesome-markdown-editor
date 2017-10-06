import React, { MouseEventHandler } from "react";

import Color from "./styles/Color";

interface IProps {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

const styles = {
  container: {
    alignItems: "center" as "center",
    display: "flex",
    justifyContent: "space-between" as "space-between"
  },
  input: {
    backgroundColor: Color.WHITE,
    borderColor: Color.LIGHT_GRAY,
    borderRadius: 3,
    borderWidth: 1,
    color: "#5078C8",
    fontWeight: 700 as 700,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  }
};

const TitleBar = ({ onSubmit }: IProps) => (
  <div style={styles.container}>
    <h1>Awesome Markdown Editor</h1>

    <button onClick={onSubmit} style={styles.input} type="submit">
      SAVE
    </button>
  </div>
);

export default TitleBar;
